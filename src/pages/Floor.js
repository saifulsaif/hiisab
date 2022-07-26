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
    {
      number: 5,
      name: "England",
      percentage: 90,
    },
    {
      number: 6,
      name: "Franch",
      percentage: 40,
    },
  ];

  var renters = [
    {
      name: "saiful saif",
      profile:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        unit_name: "A1",
        advance: 20000,
        rent: 1400,
        document: true,
        join: "01-10-2022",
        verified: true,
      },
    },
    {
      name: "Jhon Malik ",
      profile:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        unit_name: "A2",
        advance: 30000,
        rent: 1600,
        document: false,
        join: "02-10-2022",
        verified: true,
      },
    },
    {
      name: "Sara Khan ",
      profile:
        "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        unit_name: "A3",
        advance: 40000,
        rent: 2600,
        document: true,
        join: "03-10-2022",
        verified: true,
      },
    },
    {
      name: "Sarika khanom ",
      profile:
        "https://images.pexels.com/photos/10016478/pexels-photo-10016478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        unit_name: "A4",
        advance: 40000,
        rent: 2600,
        join: "015-10-2022",
        document: true,
        verified: true,
      },
    },
    {
      name: "Justin",
      profile:
        "https://images.pexels.com/photos/10016478/pexels-photo-10016478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        unit_name: "A5",
        advance: 40000,
        rent: 2600,
        document: true,
        join: "05-10-2022",
        verified: true,
      },
    },
    {
      name: "Ziyon malek",
      profile:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      info: {
        unit_name: "A6",
        advance: 80000,
        rent: 7600,
        join: "09-10-2022",
        document: false,
        verified: true,
      },
    },
  ];

  const [units] = useState(renters);
  const [floors] = useState(floors_data);

  const unitList = units.map((element) => {
    return (
      <div class="col-12 col-md-6">
        <Unit units={element} />
      </div>
    );
  });

  const floorView = floors.map((element) => {
    return <FloorList floors={element} />;
  });

  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div class="row">
          <div class="col-12 col-md-3">
            <ul>
              <li>
                <div class="card">
                  <div class="card-body add-floor-card">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <h5> Level / Floor</h5>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <button
                          className="btn bg-gradient-success"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {floorView}
            </ul>
          </div>
          <div class="col-12 col-md-9">
            <div className="row">
              {unitList}
              <div class="col-12 col-md-6">
                <div class="card">
                  <div class="card-header pb-0 p-3">
                    <div class="d-flex align-items-center">
                      <h6 class="mb-0">Renter Name </h6>
                      <button
                        type="button"
                        class="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                      >
                        <i class="fas fa-info" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-5 text-center">
                        <div>
                          <input
                            class="border-profile"
                            type="image"
                            alt="photo"
                            src="https://images.pexels.com/photos/10016478/pexels-photo-10016478.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                          />
                        </div>
                      </div>
                      <div class="col-7">
                        <div class="card h-100">
                          <div class="card-body d-flex flex-column justify-content-center text-center">
                            <button className="btn add-renter">
                              <i
                                class="fa fa-plus text-secondary mb-3"
                                aria-hidden="true"
                              ></i>
                              <h5 class="text-secondary"> New Renter </h5>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Level / Floor
                </h5>
                <button
                  type="button"
                  class="btn-close text-dark"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Lavel name or number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn bg-gradient-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn bg-gradient-success">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* endmodal */}
      </main>
    </div>
  );
};

export default Floor;
