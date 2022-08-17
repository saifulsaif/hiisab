import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import "../component/property/Property.css";
import FloorList from "../component/property/FloorList";

const Floor = () => {
  const floors = [1, 2, 3, 4, 5];
  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div class="row mt-3">
          <div class="col-lg-3 mb-lg-0 mb-3">
            <ul>
              <FloorList floors={floors} />
            </ul>
          </div>
          <div class="col-lg-9 mb-lg-0 mb-9">
            <p>Unit</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Floor;
