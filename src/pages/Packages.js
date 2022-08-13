import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";

const Packages = () => (
  <div>
    <Sidebar />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Header />
      <h1>Packages</h1>
    </main>
  </div>
);

export default Packages;
