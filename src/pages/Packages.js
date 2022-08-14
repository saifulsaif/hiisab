import React, { useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import Loader from "../component/partisals/Loader";

const LoaderOwn = () => (
  <span>
    <span
      class="spinner-grow spinner-grow-sm"
      role="status"
      aria-hidden="true"
    ></span>
    Loading...
  </span>
);

const Packages = () => {
  const [showResults, setShowResults] = useState(false);
  const onClick = () => setShowResults(true);
  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <h1>Packages</h1>

        <Loader />

        <button
          class="btn btn-success btn-sm mb-2"
          type="button"
          onClick={onClick}
        >
          {showResults ? <LoaderOwn /> : "Login"}
        </button>
      </main>
    </div>
  );
};

export default Packages;
