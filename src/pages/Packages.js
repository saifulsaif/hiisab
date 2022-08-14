import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import Loader from "../component/partisals/Loader";

const Packages = () => {
  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <h1>Packages</h1>

        <Loader title="Logging" />
      </main>
    </div>
  );
};

export default Packages;
