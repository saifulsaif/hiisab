import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/dashboard/Header";

const Home = () => (
  <div>
    <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
      id="sidenav-main"
    >
      <h1>hello</h1>
    </aside>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-75">
            <div class="container">
              <div class="row">
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-8">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Today's Money
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
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-8">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Today's Users
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              2,300
                              <span class="text-success text-sm font-weight-bolder">
                                +3%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              class="ni ni-world text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-8">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              New Clients
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              +3,462
                              <span class="text-danger text-sm font-weight-bolder">
                                -2%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              class="ni ni-paper-diploma text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                  <div class="card">
                    <div class="card-body p-3">
                      <div class="row">
                        <div class="col-8">
                          <div class="numbers">
                            <p class="text-sm mb-0 text-capitalize font-weight-bold">
                              Sales
                            </p>
                            <h5 class="font-weight-bolder mb-0">
                              $103,430
                              <span class="text-success text-sm font-weight-bolder">
                                +5%
                              </span>
                            </h5>
                          </div>
                        </div>
                        <div class="col-4 text-end">
                          <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                            <i
                              class="ni ni-cart text-lg opacity-10"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 d-flex flex-column mx-auto">
                  <div class="card card-plain mt-8">
                    <div class="card-header pb-0 text-left bg-transparent">
                      <h3 class="font-weight-bolder text-info text-gradient">
                        Welcome To Home <Link to="/home"> Dashboard </Link>
                        <Header />
                      </h3>
                      <p class="mb-0">We weill make awasome application</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-4">
                  <div class="card h-100">
                    <div class="card-header pb-0">
                      <h6>Orders overview</h6>
                      <p class="text-sm">
                        <i
                          class="fa fa-arrow-up text-success"
                          aria-hidden="true"
                        ></i>
                        <span class="font-weight-bold">24%</span> this month
                      </p>
                    </div>
                    <div class="card-body p-3">
                      <div class="timeline timeline-one-side">
                        <div class="timeline-block mb-3">
                          <span class="timeline-step">
                            <i class="ni ni-bell-55 text-success text-gradient"></i>
                          </span>
                          <div class="timeline-content">
                            <h6 class="text-dark text-sm font-weight-bold mb-0">
                              $2400, Design changes
                            </h6>
                            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                              22 DEC 7:20 PM
                            </p>
                          </div>
                        </div>
                        <div class="timeline-block mb-3">
                          <span class="timeline-step">
                            <i class="ni ni-html5 text-danger text-gradient"></i>
                          </span>
                          <div class="timeline-content">
                            <h6 class="text-dark text-sm font-weight-bold mb-0">
                              New order #1832412
                            </h6>
                            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                              21 DEC 11 PM
                            </p>
                          </div>
                        </div>
                        <div class="timeline-block mb-3">
                          <span class="timeline-step">
                            <i class="ni ni-cart text-info text-gradient"></i>
                          </span>
                          <div class="timeline-content">
                            <h6 class="text-dark text-sm font-weight-bold mb-0">
                              Server payments for April
                            </h6>
                            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                              21 DEC 9:34 PM
                            </p>
                          </div>
                        </div>
                        <div class="timeline-block mb-3">
                          <span class="timeline-step">
                            <i class="ni ni-credit-card text-warning text-gradient"></i>
                          </span>
                          <div class="timeline-content">
                            <h6 class="text-dark text-sm font-weight-bold mb-0">
                              New card added for order #4395133
                            </h6>
                            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                              20 DEC 2:20 AM
                            </p>
                          </div>
                        </div>
                        <div class="timeline-block mb-3">
                          <span class="timeline-step">
                            <i class="ni ni-key-25 text-primary text-gradient"></i>
                          </span>
                          <div class="timeline-content">
                            <h6 class="text-dark text-sm font-weight-bold mb-0">
                              Unlock packages for development
                            </h6>
                            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                              18 DEC 4:54 AM
                            </p>
                          </div>
                        </div>
                        <div class="timeline-block">
                          <span class="timeline-step">
                            <i class="ni ni-money-coins text-dark text-gradient"></i>
                          </span>
                          <div class="timeline-content">
                            <h6 class="text-dark text-sm font-weight-bold mb-0">
                              New order #9583120
                            </h6>
                            <p class="text-secondary font-weight-bold text-xs mt-1 mb-0">
                              17 DEC
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  </div>
);

export default Home;
