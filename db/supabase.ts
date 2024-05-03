import { createClient } from '@supabase/supabase-js'
import { Database } from '../src/types/schema';

const supabaseAnonKey = import.meta.env.VITE_API_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_LOCAL_SUPABASE_URL;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
