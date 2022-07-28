import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/dashboard/Header";
import HeaderCard from "../component/dashboard/HeaderCard";
import Sidebar from "../component/sidebar/Sidebar";

const Home = () => (
  <div>
    <Sidebar />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Header />
      <div class="container-fluid py-4">
        <HeaderCard />
        <div class="row mt-4">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="d-flex flex-column h-100">
                      <p class="mb-1 pt-2 text-bold">Built by developers</p>
                      <h5 class="font-weight-bolder">Soft UI Dashboard</h5>
                      <p class="mb-5">
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                      </p>
                      <div class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto">
                        Read More
                        <i
                          class="fas fa-arrow-right text-sm ms-1"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                    <div class="bg-gradient-primary border-radius-lg h-100">
                      <img
                        src="../assets/img/shapes/waves-white.svg"
                        class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                        alt="waves"
                      />
                      <div class="position-relative d-flex align-items-center justify-content-center h-100">
                        <img
                          class="w-100 position-relative z-index-2 pt-4"
                          src="../assets/img/illustrations/rocket-white.png"
                          alt="rocket"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="card h-100 p-3">
              <div class="overflow-hidden position-relative border-radius-lg bg-cover h-100">
                <span class="mask bg-gradient-dark"></span>
                <div class="card-body position-relative z-index-1 d-flex flex-column h-100 p-3">
                  <h5 class="text-white font-weight-bolder mb-4 pt-2">
                    Work with the rockets
                  </h5>
                  <p class="text-white">
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who take the opportunity first.
                  </p>
                  <div class="text-white text-sm font-weight-bold mb-0 icon-move-right mt-auto">
                    Read More
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-75">
            <div class="container">
              <div class="row">
                <div class="col-xl-8 col-lg-8 col-md-8 d-flex flex-column mx-auto">
                  <div class="card card-plain mt-8">
                    <div class="card-header pb-0 text-left bg-transparent">
                      <h3 class="font-weight-bolder text-info text-gradient">
                        Welcome To Home <Link to="/home"> Dashboard </Link>
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
