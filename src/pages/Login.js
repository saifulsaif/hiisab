import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../component/partisals/Loader";
import axios from "axios";
import cookie from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const inputsHandlerEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const inputsHandlerPassword = (e) => {
    setInputPassword(e.target.value);
  };

  let url = "";

  const submitButton = () => {
    setShowLoader(true);
    let data = { email: inputEmail, password: inputPassword };
    axios.post("https://ownlikee.ownmat.com/api/login", data).then((res) => {
      cookie.set("token", res.data.token);
      cookie.set("user", res.data.user);
      console.log(res.data.user);
      return navigate("/home");
    });
    console.log(inputEmail, inputPassword);
  };

  return (
    <div>
      <div class="container position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <nav class="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
              <div class="container-fluid">
                <a
                  class="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                  href="../../../pages/dashboards/default.html"
                >
                  RocksFox
                </a>

                <Link
                  class="btn btn-sm btn-round mb-0 me-1 bg-gradient-dark"
                  to="/home"
                >
                  {" "}
                  Home{" "}
                </Link>
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
                <div
                  class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
                  id="navigation"
                >
                  <ul class="navbar-nav d-lg-block d-none">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/product/soft-ui-dashboard-pro"
                        class="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
                        onclick="smoothToPricing('pricing-soft-ui')"
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
      <main class="main-content mt-0 ps">
        <section>
          <div class="page-header min-vh-100">
            <div class="container">
              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div class="card card-plain">
                    <div class="card-header pb-0 text-start">
                      <h4 class="font-weight-bolder">Sign In</h4>
                      <p class="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <input
                            type="email"
                            class="form-control form-control-lg"
                            placeholder="Email"
                            aria-label="Email"
                            onChange={inputsHandlerEmail}
                            value={inputEmail}
                          />
                        </div>
                        <div class="mb-3">
                          <input
                            type="password"
                            class="form-control form-control-lg"
                            placeholder="Password"
                            aria-label="Password"
                            onChange={inputsHandlerPassword}
                            value={inputPassword}
                          />
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <div class="text-center">
                          <button
                            type="button"
                            onClick={submitButton}
                            class="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                          >
                            {showLoader ? (
                              <Loader title=" Logging" />
                            ) : (
                              "Login in"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center pt-0 px-lg-2 px-1">
                      <p class="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          href={url}
                          class="text-primary text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center">
                    <img
                      src="../../../assets/img/shapes/pattern-lines.svg"
                      alt="pattern-lines"
                      class="position-absolute opacity-4 start-0"
                    />
                    <div class="position-relative">
                      <img
                        class="max-width-500 w-100 position-relative z-index-2"
                        src="../../../assets/img/login/img1.png"
                        alt="chat-img"
                      />
                    </div>
                    <h4 class="mt-5 text-white font-weight-bolder">
                      "Attention is the new currency"
                    </h4>
                    <p class="text-white">
                      The more effortless the writing looks, the more effort the
                      writer actually put into the process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="ps__rail-x">
          <div class="ps__thumb-x" tabindex="0"></div>
        </div>
        <div class="ps__rail-y">
          <div class="ps__thumb-y" tabindex="0"></div>
        </div>
      </main>
    </div>
  );
};

export default Login;
