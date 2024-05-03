/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_LOCAL_SUPABASE_URL: string
    readonly VITE_API_ANON_KEY : string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }