import { Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import TopbarMobile from "@/components/dashboard/TopbarMobile";
// interface DashboardLayoutProps {
//   children: ReactNode;
// }

function DashboardLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <TopbarMobile />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
