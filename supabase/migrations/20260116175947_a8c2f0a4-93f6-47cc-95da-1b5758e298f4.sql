-- Fix PUBLIC_DATA_EXPOSURE: Restrict profile viewing to owner or admins only
-- Drop the overly permissive policy that allows any authenticated user to read all profiles

DROP POLICY IF EXISTS "Profiles viewable by authenticated users" ON public.profiles;

-- Users can only view their own profile
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Admins can view all profiles for admin purposes
CREATE POLICY "Admins can view all profiles"
  ON public.profiles FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));