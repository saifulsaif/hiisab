import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";

const Packages = () => {
  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <h1>Packages</h1>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <div class="card-header text-center pt-4 pb-3">
                <span class="badge rounded-pill bg-light text-dark">
                  Premium
                </span>
                <h1 class="font-weight-bold mt-2">
                  <small>$</small>89
                </h1>
              </div>
              <div class="card-body text-lg-left text-center pt-0">
                <div class="d-flex justify-content-lg-start justify-content-center p-2">
                  <div class="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                    <i class="fas fa-check opacity-10" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span class="ps-3">10 team members</span>
                  </div>
                </div>

                <div class="d-flex justify-content-lg-start justify-content-center p-2">
                  <div class="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                    <i class="fas fa-check opacity-10" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span class="ps-3">40GB Cloud storage </span>
                  </div>
                </div>

                <div class="d-flex justify-content-lg-start justify-content-center p-2">
                  <div class="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                    <i class="fas fa-check opacity-10" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span class="ps-3">Integration help </span>
                  </div>
                </div>

                <div class="d-flex justify-content-lg-start justify-content-center p-2">
                  <div class="icon icon-shape icon-xs rounded-circle bg-gradient-success shadow text-center">
                    <i class="fas fa-check opacity-10" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span class="ps-3">Sketch Files </span>
                  </div>
                </div>

                <div class="d-flex justify-content-lg-start justify-content-center p-2">
                  <div class="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                    <i class="fas fa-minus" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span class="ps-3">API Access </span>
                  </div>
                </div>

                <div class="d-flex justify-content-lg-start justify-content-center p-2">
                  <div class="icon icon-shape icon-xs rounded-circle bg-gradient-secondary shadow text-center">
                    <i class="fas fa-minus" aria-hidden="true"></i>
                  </div>
                  <div>
                    <span class="ps-3">Complete documentation </span>
                  </div>
                </div>

                <a
                  href={" "}
                  class="btn btn-icon bg-gradient-primary d-lg-block mt-3 mb-0"
                >
                  Try Premium
                  <i class="fas fa-arrow-right ms-1" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card shadow-none border h-100">
              <div class="card-header text-sm-left text-center pt-4 pb-3 px-4">
                <h5 class="mb-1">Pro</h5>
                <p class="mb-3 text-sm">Free access for 30 members</p>
                <h3 class="font-weight-bolder mt-3">
                  $299{" "}
                  <small class="text-sm text-secondary font-weight-bold">
                    / year
                  </small>
                </h3>
                <a
                  href={" "}
                  class="btn btn-sm bg-gradient-dark w-100 border-radius-md mt-4 mb-2"
                >
                  Buy now
                </a>
              </div>
              <hr class="horizontal dark my-0" />
              <div class="card-body">
                <div class="d-flex pb-3">
                  <div>
                    <i
                      class="fas fa-check text-success text-sm"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="ps-3">
                    <span class="text-sm">Complete documentation</span>
                  </div>
                </div>

                <div class="d-flex pb-3">
                  <div>
                    <i
                      class="fas fa-check text-success text-sm"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="ps-3">
                    <span class="text-sm">Working materials in Sketch</span>
                  </div>
                </div>

                <div class="d-flex pb-3">
                  <div>
                    <i
                      class="fas fa-check text-success text-sm"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div class="ps-3">
                    <span class="text-sm">2GB cloud storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card card-pricing">
              <div class="card-header bg-gradient-dark text-center pt-4 pb-5 position-relative">
                <div class="z-index-1 position-relative">
                  <h5 class="text-white">Company</h5>
                  <h1 class="text-white mt-2 mb-0">
                    <small>$</small>779
                  </h1>
                  <h6 class="text-white">per year</h6>
                </div>
              </div>
              <div class="position-relative mt-n5">
                <div class="position-absolute w-100">
                  <svg
                    class="waves waves-sm"
                    viewBox="0 24 150 40"
                    preserveAspectRatio="none"
                    shape-rendering="auto"
                  >
                    <defs>
                      <path
                        id="card-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                      ></path>
                    </defs>
                    <g class="moving-waves">
                      <use x="48" y="-1" fill="rgba(255,255,255,0.30"></use>
                      <use x="48" y="3" fill="rgba(255,255,255,0.35)"></use>
                      <use x="48" y="5" fill="rgba(255,255,255,0.25)"></use>
                      <use x="48" y="8" fill="rgba(255,255,255,0.20)"></use>
                      <use x="48" y="13" fill="rgba(255,255,255,0.15)"></use>
                      <use x="48" y="16" fill="rgba(255,255,255,0.99)"></use>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="card-body text-center">
                <ul class="list-unstyled max-width-200 mx-auto">
                  <li>
                    <b>10</b> Projects
                    <hr class="horizontal dark" />
                  </li>
                  <li>
                    <b>1</b> Team Members
                    <hr class="horizontal dark" />
                  </li>
                  <li>
                    <b>5</b> Personal Contacts
                    <hr class="horizontal dark" />
                  </li>
                  <li>
                    <b>500</b> Messages
                  </li>
                </ul>
                <a href={" "} class="btn bg-gradient-dark w-100 mt-4 mb-0">
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Packages;
