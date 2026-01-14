-- Fix function search path for update_updated_at_column
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Drop the overly permissive analytics insert policy and replace with authenticated-only
DROP POLICY IF EXISTS "Anyone can log analytics" ON public.doc_analytics;

CREATE POLICY "Authenticated users can log analytics"
  ON public.doc_analytics FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid() OR user_id IS NULL);