import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import "../component/property/Property.css";

const Floor = () => (
  <div>
    <Sidebar />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Header />
      <div class="row mt-4">
        <div class="col-lg-4 mb-lg-0 mb-4">
          <ul>
            <li>
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">
                          Today's Money 33 3
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          $53,000
                          <span class="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          class="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">
                          Today's Money 33 3
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          $53,000
                          <span class="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          class="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">
                          Today's Money 33 3
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          $53,000
                          <span class="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          class="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card">
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="numbers">
                        <p class="text-sm mb-0 text-capitalize font-weight-bold">
                          Today's Money 33 3
                        </p>
                        <h5 class="font-weight-bolder mb-0">
                          $53,000
                          <span class="text-success text-sm font-weight-bolder">
                            +55%
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div class="col-4 text-end">
                      <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                        <i
                          class="ni ni-money-coins text-lg opacity-10"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-lg-8 mb-lg-0 mb-8">
          <p>Unit</p>
        </div>
      </div>
    </main>
  </div>
);

export default Floor;
