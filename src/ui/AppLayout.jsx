import { Outlet } from "react-router-dom";
import Offer from "./Offer";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="fixed top-0 z-[100000] h-[100px] w-full">
        <Offer />
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
