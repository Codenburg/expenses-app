import { getSession } from "@/api/getSession";

export const getAccessToken = async (): Promise<string | null> => {
    const session = await getSession();
    if (!session?.access_token) {
        return null;
    }
    return session.access_token;
};

export const isAuthenticated = async (): Promise<boolean | null> => {
    const accessToken = await getAccessToken();
    if (!accessToken) {
        return false;
    }
    return true;
};
