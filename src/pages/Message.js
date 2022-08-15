import React from "react";
import Sidebar from "../component/sidebar/Sidebar";
import Header from "../component/dashboard/Header";
import Swal from "sweetalert2";

const Message = () => {
  const showSwal = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div>
      <Sidebar />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        <h1>
          {" "}
          hi {process.env.API_URL} {process.env.API_URL}{" "}
        </h1>

        <button class="btn bg-gradient-primary" onClick={showSwal}>
          Take the shot!
        </button>

        <button
          type="button"
          class="btn bg-gradient-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>

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
                  Modal title
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
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn bg-gradient-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn bg-success">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Message;
