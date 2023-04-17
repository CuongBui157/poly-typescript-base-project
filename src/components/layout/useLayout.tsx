import { Outlet } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

export const UseLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
