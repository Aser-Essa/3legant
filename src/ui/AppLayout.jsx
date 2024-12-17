import { Outlet } from "react-router-dom";
import Offer from "./Offer";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <Offer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
