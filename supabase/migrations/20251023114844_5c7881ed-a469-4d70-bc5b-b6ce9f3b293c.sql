-- Create site_styles table for storing element-specific styles
CREATE TABLE IF NOT EXISTS public.site_styles (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  element_id varchar NOT NULL UNIQUE,
  styles jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamp with time zone DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id),
  created_at timestamp with time zone DEFAULT now()
);

-- Create site_layout table for storing section order
CREATE TABLE IF NOT EXISTS public.site_layout (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  layout_data jsonb NOT NULL DEFAULT '{"sections": ["hero", "about", "services", "differentials", "space", "testimonials", "philosophy", "contact"]}'::jsonb,
  updated_at timestamp with time zone DEFAULT now(),
  updated_by uuid REFERENCES auth.users(id),
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.site_styles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_layout ENABLE ROW LEVEL SECURITY;

-- Policies for site_styles
CREATE POLICY "Anyone can read site styles"
  ON public.site_styles
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert site styles"
  ON public.site_styles
  FOR INSERT
  WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admins can update site styles"
  ON public.site_styles
  FOR UPDATE
  USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete site styles"
  ON public.site_styles
  FOR DELETE
  USING (is_admin(auth.uid()));

-- Policies for site_layout
CREATE POLICY "Anyone can read site layout"
  ON public.site_layout
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert site layout"
  ON public.site_layout
  FOR INSERT
  WITH CHECK (is_admin(auth.uid()));

CREATE POLICY "Admins can update site layout"
  ON public.site_layout
  FOR UPDATE
  USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete site layout"
  ON public.site_layout
  FOR DELETE
  USING (is_admin(auth.uid()));

-- Insert default layout
INSERT INTO public.site_layout (layout_data) 
VALUES ('{"sections": ["hero", "about", "services", "differentials", "space", "testimonials", "philosophy", "contact"]}'::jsonb)
ON CONFLICT DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_site_styles_element_id ON public.site_styles(element_id);
CREATE INDEX IF NOT EXISTS idx_site_styles_updated_at ON public.site_styles(updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_site_layout_updated_at ON public.site_layout(updated_at DESC);