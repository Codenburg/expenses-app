import { createClient } from '@supabase/supabase-js'


export const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')