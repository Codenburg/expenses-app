import { Toaster } from "@/components/ui/toaster";
import CardBalances from "@/components/CardBalances";

function DashboardHome() {
  return (
    <>
      <div className="space-y-4 pb-6 pt-6">
        <CardBalances />
      </div>
      
      <Toaster />
    </>
  );
}

export default DashboardHome;
