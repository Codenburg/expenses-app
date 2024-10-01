import { AuthSession } from "@supabase/supabase-js";
import { supabase } from "db/supabase";

export async function getSession(): Promise<AuthSession | null> {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (!session) {
        return null;
    }
    if (error) {
        await supabase.auth.refreshSession({
            refresh_token: session.refresh_token,
        });
    }
    return session;
}
