import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";

export default function UsernameMenu() {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <img src={user?.picture} alt="" className="rounded-full w-10" />
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-center">
        <DropdownMenuItem className="mb-1">
          <Link to="/user-profile" className="font-bold hover:text-orange-500">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            className="font-bold bg-orange-500 w-full mt-1"
            onClick={async () => await logout()}
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
