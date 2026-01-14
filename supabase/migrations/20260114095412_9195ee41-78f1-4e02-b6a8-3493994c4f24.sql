-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'viewer');

-- Create enum for doc status
CREATE TYPE public.doc_status AS ENUM ('draft', 'published', 'archived');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create user_roles table (separate from profiles for security)
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'viewer',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Create doc_categories table
CREATE TABLE public.doc_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create docs table
CREATE TABLE public.docs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES public.doc_categories(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '',
  summary TEXT,
  status doc_status NOT NULL DEFAULT 'draft',
  version INTEGER NOT NULL DEFAULT 1,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (category_id, slug)
);

-- Create doc_versions table for version history
CREATE TABLE public.doc_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id UUID REFERENCES public.docs(id) ON DELETE CASCADE NOT NULL,
  version INTEGER NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create code_examples table for interactive code blocks
CREATE TABLE public.code_examples (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id UUID REFERENCES public.docs(id) ON DELETE CASCADE,
  title TEXT,
  code_javascript TEXT,
  code_python TEXT,
  code_curl TEXT,
  ai_explanation TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create doc_analytics table
CREATE TABLE public.doc_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  doc_id UUID REFERENCES public.docs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  view_count INTEGER DEFAULT 1,
  search_query TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doc_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.docs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doc_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.code_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.doc_analytics ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Function to check if user is admin or editor
CREATE OR REPLACE FUNCTION public.is_editor_or_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'editor')
  )
$$;

-- Handle new user signup - create profile and assign default viewer role
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.raw_user_meta_data ->> 'name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'avatar_url', '')
  );
  
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'viewer');
  
  RETURN NEW;
END;
$$;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Update triggers for all tables
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_doc_categories_updated_at
  BEFORE UPDATE ON public.doc_categories
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_docs_updated_at
  BEFORE UPDATE ON public.docs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_code_examples_updated_at
  BEFORE UPDATE ON public.code_examples
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- RLS Policies

-- Profiles: Users can view all, update own
CREATE POLICY "Profiles viewable by authenticated users"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- User roles: Only admins can manage, users can view their own
CREATE POLICY "Users can view their own roles"
  ON public.user_roles FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage all roles"
  ON public.user_roles FOR ALL
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Doc categories: Public read, editors can write
CREATE POLICY "Categories viewable by everyone"
  ON public.doc_categories FOR SELECT
  USING (true);

CREATE POLICY "Editors can manage categories"
  ON public.doc_categories FOR ALL
  TO authenticated
  USING (public.is_editor_or_admin(auth.uid()));

-- Docs: Published docs public, drafts for editors
CREATE POLICY "Published docs viewable by everyone"
  ON public.docs FOR SELECT
  USING (status = 'published' OR public.is_editor_or_admin(auth.uid()));

CREATE POLICY "Editors can create docs"
  ON public.docs FOR INSERT
  TO authenticated
  WITH CHECK (public.is_editor_or_admin(auth.uid()));

CREATE POLICY "Editors can update docs"
  ON public.docs FOR UPDATE
  TO authenticated
  USING (public.is_editor_or_admin(auth.uid()));

CREATE POLICY "Admins can delete docs"
  ON public.docs FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Doc versions: Same as docs
CREATE POLICY "Doc versions viewable by editors"
  ON public.doc_versions FOR SELECT
  TO authenticated
  USING (public.is_editor_or_admin(auth.uid()));

CREATE POLICY "Editors can create versions"
  ON public.doc_versions FOR INSERT
  TO authenticated
  WITH CHECK (public.is_editor_or_admin(auth.uid()));

-- Code examples: Public read for published doc examples
CREATE POLICY "Code examples viewable with published docs"
  ON public.code_examples FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.docs 
      WHERE docs.id = code_examples.doc_id 
      AND (docs.status = 'published' OR public.is_editor_or_admin(auth.uid()))
    )
  );

CREATE POLICY "Editors can manage code examples"
  ON public.code_examples FOR ALL
  TO authenticated
  USING (public.is_editor_or_admin(auth.uid()));

-- Analytics: Editors can view, anyone can insert
CREATE POLICY "Analytics viewable by editors"
  ON public.doc_analytics FOR SELECT
  TO authenticated
  USING (public.is_editor_or_admin(auth.uid()));

CREATE POLICY "Anyone can log analytics"
  ON public.doc_analytics FOR INSERT
  WITH CHECK (true);