import { supabase } from "db/supabase";

export async function getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (!session) {
        return { session: null, error: null };
    }
    if (error) {
        const { data } = await supabase.auth.refreshSession({
            refresh_token: session.refresh_token,
        });
        return { session: data.session, error: null };
    }
    return { session, error: null };
}
