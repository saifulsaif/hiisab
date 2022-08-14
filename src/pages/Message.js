import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";

const Message = () => (
  <div>
    <Sidebar />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Header />
      <h1>
        {" "}
        hi {process.env.API_URL} {process.env.API_URL}{" "}
      </h1>
    </main>
  </div>
);

export default Message;
