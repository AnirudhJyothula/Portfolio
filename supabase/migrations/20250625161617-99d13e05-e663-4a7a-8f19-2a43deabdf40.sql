
-- Create a table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it accessible for insertion but private for reading
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact form data (public contact form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated users (admin) can view submissions
CREATE POLICY "Only authenticated users can view submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
