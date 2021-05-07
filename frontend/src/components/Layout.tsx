import React from "react";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="bg-gray-800">
        <div className="container py-5 mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
