import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Layout/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      {/* Dashboard Navbar */}
      <DashboardNavbar />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 py-8">
        <div className="bg-[#111111]/40 backdrop-blur-sm border border-white/5 rounded-[32px] p-6 lg:p-10 shadow-2xl min-h-[calc(100vh-160px)]">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
