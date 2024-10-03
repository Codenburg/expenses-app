import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components";
import { HistoryIcon, Home, LineChart, PanelLeft } from "lucide-react";
import UserDropdownMenu from "@/components/dashboard/UserDropdownMenu";
import { Link } from "react-router-dom";

function TopbarMobile() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetTitle>Expenses App</SheetTitle>
        <SheetContent side="left" className="sm:max-w-xs">
          <SheetDescription></SheetDescription>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <Home className="h-5 w-5" />
              Saldo disponible
            </Link>
            <Link
              to="/expenses-history"
              className="flex items-center gap-4 px-2.5 text-foreground"
            >
              <HistoryIcon className="h-5 w-5" />
              Historial de gastos
            </Link>

            <Link
              to="#"
              className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
            >
              <LineChart className="h-5 w-5" />
              Placeholder
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="relative ml-auto sm:hidden">
        <UserDropdownMenu />
      </div>
    </header>
  );
}

export default TopbarMobile;
