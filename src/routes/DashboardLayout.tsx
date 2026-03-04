import { Outlet } from "react-router-dom";
import DashboardNavbar from "../Layout/DashboardNavbar";
import CommonWrapper from "@/common/CommonWrapper";

const DashboardLayout = () => {
  return (
    <div className="bg-white flex flex-col">
      {/* Dashboard Navbar */}
      <DashboardNavbar />

      <main className="grow w-full mx-auto px-4 py-8">
          <CommonWrapper>
            <Outlet />
          </CommonWrapper>
      </main>
    </div>
  );
};

export default DashboardLayout;
