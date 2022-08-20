import React, { useState } from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import ChatList from "../component/auth/ChatList";
// import Swal from "sweetalert2";

const Message = () => {
  // const showSwal = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   });
  // };

  const chatArray = [
    {
      name: "Jhon Malik",
      avatar:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      last_seen: " 1 hour ago",
      last_message: "Computer users and programmers 2",
      last_message_seen: true,
      active: true,
    },
    {
      name: "Rock Malik ",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      last_seen: " 1 hour ago",
      last_message: "Computer users and programmers 3",
      last_message_seen: true,
      active: true,
    },
    {
      name: "Rockcy Malik",
      avatar:
        "https://images.pexels.com/photos/38289/portrait-photography-profile-face-one-38289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      last_seen: " 1 hour ago",
      last_message: "Computer users and programmers 4",
      last_message_seen: true,
      active: true,
    },
    {
      name: "Jhon Malik",
      avatar:
        "https://images.pexels.com/photos/10016478/pexels-photo-10016478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      last_seen: " 1 hour ago",
      last_message: "Computer users and programmers 5",
      last_message_seen: true,
      active: true,
    },
    {
      name: "Jhon Malik",
      avatar:
        "https://images.pexels.com/photos/10016478/pexels-photo-10016478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      last_seen: " 1 hour ago",
      last_message: "Computer users and programmers 7",
      last_message_seen: true,
      active: true,
    },
  ];

  const [chats] = useState(chatArray);

  const currentChatList = chats.map((chat) => {
    return (
      <a href=" " class="d-block p-2">
        <ChatList chat={chat} />
      </a>
    );
  });

  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-4">
              <div class="card blur shadow-blur max-height-vh-70 overflow-auto overflow-x-hidden mb-5 mb-lg-0">
                <div class="card-header p-3">
                  <h6>Friends</h6>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Search Contact"
                    aria-label="Email"
                    onfocus="focused(this)"
                    onfocusout="defocused(this)"
                  />
                </div>
                <div class="card-body p-2">
                  <div class="d-block p-2 border-radius-lg bg-gradient-primary">
                    <div class="d-flex p-2">
                      <input
                        class="avatar avatar-sm rounded-circle"
                        type="image"
                        alt="photo"
                        src="https://ownlikee.ownmat.com/image/user/profile_image/1726930455799967.jpg"
                      />
                      <div class="ms-3">
                        <div class="justify-content-between align-items-center">
                          <h6 class="text-white mb-0">
                            Charlie Watson
                            <span class="badge badge-success"></span>
                          </h6>
                          <p class="text-white mb-0 text-sm">Typing...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {currentChatList}
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="card blur shadow-blur max-height-vh-70">
                <div class="card-header shadow-lg">
                  <div class="row">
                    <div class="col-md-10">
                      <div class="d-flex align-items-center">
                        <input
                          class="avatar avatar-sm rounded-circle"
                          type="image"
                          alt="photo"
                          src="https://ownlikee.ownmat.com/image/user/profile_image/1726930455799967.jpg"
                        />
                        <div class="ms-3">
                          <h6 class="mb-0 d-block">Charlie Watson</h6>
                          <span class="text-sm text-dark opacity-8">
                            last seen today at 1:53am
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class="col-1 my-auto pe-0">
                      <button
                        class="btn btn-icon-only shadow-none text-dark mb-0 me-3 me-sm-0"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Video call"
                      >
                        <i class="ni ni-camera-compact"></i>
                      </button>
                    </div>
                    <div class="col-1 my-auto ps-0">
                      <div class="dropdown">
                        <button
                          class="btn btn-icon-only shadow-none text-dark mb-0"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i class="ni ni-settings"></i>
                        </button>
                        <ul
                          class="dropdown-menu dropdown-menu-end me-sm-n2 p-2"
                          aria-labelledby="chatmsg"
                        >
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href={" "}
                            >
                              Profile
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href={" "}
                            >
                              Mute conversation
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href={" "}
                            >
                              Block
                            </a>
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md"
                              href={" "}
                            >
                              Clear chat
                            </a>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              class="dropdown-item border-radius-md text-danger"
                              href={" "}
                            >
                              Delete chat
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body overflow-auto overflow-x-hidden">
                  <div class="row justify-content-start mb-4">
                    <div class="col-auto">
                      <div class="card ">
                        <div class="card-body py-2 px-3">
                          <p class="mb-1">
                            It contains a lot of good lessons about effective
                            practices
                          </p>
                          <div class="d-flex align-items-center text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>3:14am</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-end text-right mb-4">
                    <div class="col-auto">
                      <div class="card bg-gray-200">
                        <div class="card-body py-2 px-3">
                          <p class="mb-1">
                            Can it generate daily design links that include
                            essays and data visualizations ?<br />
                          </p>
                          <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:42pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col-md-12 text-center">
                      <span class="badge text-dark">Wed, 3:27pm</span>
                    </div>
                  </div>
                  <div class="row justify-content-start mb-4">
                    <div class="col-auto">
                      <div class="card ">
                        <div class="card-body py-2 px-3">
                          <p class="mb-1">
                            Yeah! Responsive Design is geared towards those
                            trying to build web apps
                          </p>
                          <div class="d-flex align-items-center text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:31pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-end text-right mb-4">
                    <div class="col-auto">
                      <div class="card bg-gray-200">
                        <div class="card-body py-2 px-3">
                          <p class="mb-1">Excellent, I want it now !</p>
                          <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:42pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-start mb-4">
                    <div class="col-auto">
                      <div class="card ">
                        <div class="card-body py-2 px-3">
                          <p class="mb-1">
                            You can easily get it; The content here is all free
                          </p>
                          <div class="d-flex align-items-center text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:42pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-end text-right mb-4">
                    <div class="col-auto">
                      <div class="card bg-gray-200">
                        <div class="card-body py-2 px-3">
                          <p class="mb-1">
                            Awesome, blog is important source material for
                            anyone who creates apps? <br />
                            Beacuse these blogs offer a lot of information about
                            website development.
                          </p>
                          <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:42pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-start mb-4">
                    <div class="col-5">
                      <div class="card ">
                        <div class="card-body p-2">
                          <div class="col-12 p-0">
                            <input
                              class="avatar avatar-sm rounded-circle"
                              type="image"
                              alt="photo"
                              src="https://ownlikee.ownmat.com/image/user/profile_image/1726930455799967.jpg"
                            />
                          </div>
                          <div class="d-flex align-items-center text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:47pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-end text-right mb-4">
                    <div class="col-auto">
                      <div class="card bg-gray-200">
                        <div class="card-body py-2 px-3">
                          <p class="mb-0">
                            At the end of the day … the native dev apps is where
                            users are
                          </p>
                          <div class="d-flex align-items-center justify-content-end text-sm opacity-6">
                            <i class="ni ni-check-bold text-sm me-1"></i>
                            <small>4:42pm</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row justify-content-start">
                    <div class="col-auto">
                      <div class="card ">
                        <div class="card-body py-2 px-3">
                          <p class="mb-0">Charlie is Typing...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer d-block">
                  <form class="align-items-center">
                    <div class="d-flex">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Type here"
                          aria-label="Message example input"
                          onfocus="focused(this)"
                          onfocusout="defocused(this)"
                        />
                      </div>
                      <button class="btn bg-gradient-primary mb-0 ms-2">
                        <i class="ni ni-send"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer pt-3  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    © <script>document.write(new Date().getFullYear())</script>
                    2022, made with{" "}
                    <i class="fa fa-heart" aria-hidden="true"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      class="font-weight-bold"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        class="nav-link text-muted"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        class="nav-link text-muted"
                      >
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        class="nav-link text-muted"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        class="nav-link pe-0 text-muted"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Message;
