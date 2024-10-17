import React from "react";
import Header from "../components/Header";
import { NavBarProvider } from "../provider/NavBarProvider";

function Students() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "teal",
        padding: "12px",
        boxSizing: "border-box",
        // backgroundImage:
        //   "radial-gradient(farthest-side at 60% 20%, var(--secondary-color), var(--primary-color))",
      }}
    >
      <NavBarProvider>
        <Header />
      </NavBarProvider>
    </div>
  );
}

export default Students;
