import { Outlet } from "react-router-dom";
import Offer from "./Offer";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="h-[100px]">
        <div className="xxx fixed top-0 z-[9998] w-full">
          <Offer />
          <Header />
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
