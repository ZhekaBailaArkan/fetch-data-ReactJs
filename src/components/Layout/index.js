import React from "react";

function Layout({ children }) {
  return (
    <div className="flex justify-center p-10 bg-slate-600">{children}</div>
  );
}

export default Layout;
