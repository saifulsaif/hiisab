import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 ps ps--active-y bg-transparent"
        id="sidenav-main"
        data-color="info"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a
            class="navbar-brand m-0"
            href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct-dark.png"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold">Soft UI Dashboard</span>
          </a>
        </div>
        <hr class="horizontal dark mt-0" />
        <div
          class="collapse navbar-collapse w-auto ps ps--active-y"
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
              <span class="nav-link-text ms-1">
                <Link to="/home"> Dashboard </Link>
              </span>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span class="nav-link-text ms-1">
                  <Link to="/property"> Property </Link>
                </span>
              </a>
            </li>
            <li class="nav-item">
              <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
              <Link to="/expense"> Expense </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="../pages/virtual-reality.html">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span class="nav-link-text ms-1">Packages</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="../pages/rtl.html">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span class="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="../pages/profile.html">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span class="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link  " href="../pages/sign-in.html">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span class="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <div class="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
                <span class="nav-link-text ms-1">Sign Up</span>
              </div>
            </li>
          </ul>
          <div class="ps__rail-x">
            <div class="ps__thumb-x" tabindex="0"></div>
          </div>
          <div class="ps__rail-y">
            <div class="ps__thumb-y" tabindex="0"></div>
          </div>
        </div>
        <div class="sidenav-footer mx-3 ">
          <div
            class="card card-background shadow-none card-background-mask-info"
            id="sidenavCard"
          >
            <div class="full-background"></div>
            <div class="card-body text-start p-3 w-100">
              <div class="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                <i
                  class="ni ni-diamond text-gradient text-lg top-0 text-info"
                  aria-hidden="true"
                  id="sidenavCardIcon"
                ></i>
              </div>
              <div class="docs-info">
                <h6 class="text-white up mb-0">Need help?</h6>
                <p class="text-xs font-weight-bold">Please check our docs</p>
                <div target="_blank" class="btn btn-white btn-sm w-100 mb-0">
                  Documentation
                </div>
              </div>
            </div>
          </div>
          <a
            class="btn bg-gradient-primary mt-3 w-100"
            href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree"
          >
            Upgrade to pro
          </a>
        </div>
        <div class="ps__rail-x">
          <div class="ps__thumb-x" tabindex="0"></div>
        </div>
        <div class="ps__rail-y">
          <div class="ps__thumb-y" tabindex="0"></div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
