import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
  const [inputEmail, setInputEmail] = useState(" ");
  const [inputPassword, setInputPassword] = useState(" ");

  const inputsHandlerEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const inputsHandlerPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const submitButton = () => {
    let data = { email: inputEmail, password: inputPassword };
    fetch("url", {
      method: "post",
      body: JSON.stringify(data),
      headers: { "content-Type": "applicaiton/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    console.log(inputEmail, inputPassword);
  };

  return (
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
                      <a class="nav-link me-2" href="assets/pages/sign-in.html">
                        <i class="fas fa-key opacity-6 text-dark me-1"></i>
                        Sign In
                      </a>
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
                <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                  <div class="card card-plain mt-8">
                    <div class="card-header pb-0 text-left bg-transparent">
                      <h3 class="font-weight-bolder text-info text-gradient">
                        Welcome back
                      </h3>
                      <p class="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <form>
                      <div class="card-body">
                        <label>Email</label>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Email"
                            name="email"
                            aria-label="Email"
                            aria-describedby="email-addon"
                            onChange={inputsHandlerEmail}
                            value={inputEmail}
                          />
                        </div>
                        <label>Password</label>
                        <div class="mb-3">
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            onChange={inputsHandlerPassword}
                            value={inputPassword}
                          />
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            checked=""
                          />
                          <label class="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <div class="text-center">
                          <button
                            onClick={submitButton}
                            type="button"
                            class="btn bg-gradient-info w-100 mt-4 mb-0"
                          >
                            Sign in
                          </button>
                        </div>
                      </div>
                    </form>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">Dont have an account?</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                    <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
