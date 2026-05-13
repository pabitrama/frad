import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "./Layout.css";

const MainLayout = () => {

  /* =========================
     SIDEBAR COLLAPSE STATE
  ========================= */
  const [sidebarOpen, setSidebarOpen] = useState(true);

  /* =========================
     THEME STATE
  ========================= */
  const { mode, fontSize } = useSelector(
    (state) => state.theme
  );

  return (

    <div
      className={`main-layout ${mode}`}
      style={{
        fontSize: `${fontSize}px`,
        minHeight: "100vh"
      }}
    >

      {/* =========================
          TOPBAR
      ========================= */}
      <Topbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* =========================
          BODY SECTION
      ========================= */}
      <div className="layout-body d-flex">

        {/* =========================
            SIDEBAR
        ========================= */}
        <Sidebar
          sidebarOpen={sidebarOpen}
        />

        {/* =========================
            PAGE CONTENT
        ========================= */}
        <div
          className={`content-wrapper flex-grow-1 transition-all ${
            sidebarOpen
              ? "content-expanded"
              : "content-collapsed"
          }`}
        >

          {/* PAGE CONTENT */}
          <main className="main-content p-3">

            <Outlet />

          </main>

          {/* FOOTER */}
          <Footer />

        </div>

      </div>

    </div>
  );
};

export default MainLayout;