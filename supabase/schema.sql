-- Radhika Solar Energy - Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL, -- Residential, Commercial, Industrial
    location VARCHAR(255) NOT NULL,
    system_size_kw DECIMAL NOT NULL,
    annual_savings DECIMAL,
    image_url TEXT,
    customer_review TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads Table (Contact Form & Calculator Inquiries)
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255),
    city VARCHAR(100),
    property_type VARCHAR(50),
    monthly_bill DECIMAL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'New', -- New, Contacted, Converted, Lost
    source VARCHAR(50), -- Contact Form, Calculator, WhatsApp
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    location VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
    language VARCHAR(20) DEFAULT 'Marathi',
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS public.blogs (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    excerpt TEXT,
    category VARCHAR(100),
    author VARCHAR(100) DEFAULT 'Admin',
    image_url TEXT,
    is_published BOOLEAN DEFAULT FALSE,
    published_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customer Feedback Table
CREATE TABLE IF NOT EXISTS public.feedbacks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_name VARCHAR(255),
    project_id UUID REFERENCES public.projects(id),
    rating_installation INTEGER CHECK (rating_installation >= 1 AND rating_installation <= 5),
    rating_support INTEGER CHECK (rating_support >= 1 AND rating_support <= 5),
    rating_pricing INTEGER CHECK (rating_pricing >= 1 AND rating_pricing <= 5),
    overall_experience TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Setup Row Level Security (RLS)
-- Allow public read access to projects, testimonials, and blogs
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access on projects" ON public.projects FOR SELECT USING (true);

ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access on testimonials" ON public.testimonials FOR SELECT USING (true);

ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read access on blogs" ON public.blogs FOR SELECT USING (is_published = true);

-- Allow public to insert leads and feedbacks, but not read them
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on leads" ON public.leads FOR INSERT WITH CHECK (true);

ALTER TABLE public.feedbacks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert on feedbacks" ON public.feedbacks FOR INSERT WITH CHECK (true);
