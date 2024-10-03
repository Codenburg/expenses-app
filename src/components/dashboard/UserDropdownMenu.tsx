import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Button,
} from "@/components";
import { getUser } from "@/api/getUser";
import { logoutUser } from "@/hooks/auth/useLogout";
import { UserMetadata } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

function UserDropdownMenu() {
  const [user, setUser] = useState<UserMetadata | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { metadata } = await getUser();
      setUser(metadata);
    };
    fetchUser();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="relative ml-auto flex md:grow-0">
        <Button
          variant="outline"
          size="icon"
          className="overflow-hidden rounded-full"
        >
          <img
            src={`https://robohash.org/${user?.firstName}.svg/?set=set4`}
            width={36}
            height={36}
            alt="Avatar"
            className="overflow-hidden rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {user && (
          <>
            <DropdownMenuItem>Mi cuenta</DropdownMenuItem>
            <DropdownMenuSeparator />
          </>
        )}
        <DropdownMenuItem>Soporte</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logoutUser}>Cerrar sesión</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserDropdownMenu;
