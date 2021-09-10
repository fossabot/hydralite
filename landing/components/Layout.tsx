import React from "react";
import Navbar from "~/components/Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({
  children,
  navType,
  connectCardRef,
}: {
  children?: any;
  navType: "home" | "dash";
  connectCardRef: React.MutableRefObject<any>;
}) => (
  <div>
    {navType === "home" && <Navbar connectCardRef={connectCardRef} />}
    {children}
    <Footer />
  </div>
);

export default Layout;
