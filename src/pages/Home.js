import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <div class="container position-sticky z-index-sticky top-0">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div class="container-fluid pe-0">
              <a
                class="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                href="assets/pages/dashboard.html"
              >
                Soft UI Dashboard
              </a>
              <button
                class="navbar-toggler shadow-none ms-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon mt-2">
                  <span class="navbar-toggler-bar bar1"></span>
                  <span class="navbar-toggler-bar bar2"></span>
                  <span class="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navigation">
                <ul class="navbar-nav mx-auto ms-xl-auto me-xl-7">
                  <li class="nav-item">
                    <div class="nav-link me-2">
                      <i class="fa fa-chart-pie opacity-6 text-dark me-1"></i>
                      <Link to="/home"> Dashboard </Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link me-2">
                      <i class="fa fa-user opacity-6 text-dark me-1"></i>
                      <Link to="/home"> Home </Link>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link me-2" href="assets/pages/sign-up.html">
                      <i class="fas fa-user-circle opacity-6 text-dark me-1"></i>
                      Sign Up
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="nav-link me-2">
                      <i class="fas fa-key opacity-6 text-dark me-1"></i>
                      <Link to="/login"> Login </Link>
                    </div>
                  </li>
                </ul>
                <li class="nav-item d-flex align-items-center">
                  <a
                    class="btn btn-round btn-sm mb-0 btn-outline-primary me-2"
                    href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard"
                  >
                    Online Builder
                  </a>
                </li>
                <ul class="navbar-nav d-lg-block d-none">
                  <li class="nav-item">
                    <a
                      href="https://www.creative-tim.com/product/soft-ui-dashboard"
                      class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                    >
                      Free download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
                      Welcome To Home Page
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
  </div>
);

export default Home;
