import React, { useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import "../component/property/Property.css";
import FloorList from "../component/property/FloorList";
import Unit from "../component/property/Unit";

const Floor = () => {
  const floors_data = [
    {
      number: 1,
      name: "America",
      percentage: 75,
    },
    {
      number: 2,
      name: "Bangladesh",
      percentage: 50,
    },
    {
      number: 3,
      name: "Canada",
      percentage: 100,
    },
    {
      number: 4,
      name: "Denmark",
      percentage: 25,
    },
  ];

  var renters = [
    {
      name: "saiful saif",
      profile:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        advance: 20000,
        rent: 1400,
        document: true,
        verified: true,
      },
    },
    {
      name: "Jhon Malik ",
      profile:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        advance: 30000,
        rent: 1600,
        document: false,
        verified: true,
      },
    },
    {
      name: "Sara Khan ",
      profile:
        "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        advance: 40000,
        rent: 2600,
        document: true,
        verified: true,
      },
    },
    {
      name: "Sarika khanom ",
      profile:
        "https://images.pexels.com/photos/10016478/pexels-photo-10016478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        advance: 40000,
        rent: 2600,
        document: true,
        verified: true,
      },
    },
  ];

  const [units, setUnites] = useState(renters);
  const [floors, setFloot] = useState(floors_data);

  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div class="row">
          <div class="col-12 col-md-3">
            <ul>
              <FloorList floors={floors} />
            </ul>
          </div>
          <div class="col-12 col-md-9">
            <Unit units={units} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Floor;
