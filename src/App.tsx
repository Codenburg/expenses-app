import DashboardLayout from "./layout/dashboard-layout";
import { Toaster } from "@/components/ui/toaster";
import DashboardHome from "./pages/dashboard-home";

function App() {
  return (
    <DashboardLayout>
      <DashboardHome />
      <Toaster />
    </DashboardLayout>
  );
}

export default App;
