// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://toplkkelhsxbljifktwk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcGxra2VsaHN4YmxqaWZrdHdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ1NjQzNTQsImV4cCI6MjA2MDE0MDM1NH0.ydTm3Vk9DhVcYdc40f_egc5YkbPH8gdz8XTfCZv-_vk";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);