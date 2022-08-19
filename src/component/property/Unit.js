import React from "react";

const Unit = (props) => {
  const unitList = props.units.map((element) => {
    return (
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header pb-0 p-3">
            <div class="d-flex align-items-center">
              <h6 class="mb-0">{element.name}</h6>
              <button
                type="button"
                class="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
              >
                <i class="fas fa-info" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div class="card-body p-3">
            <div class="row">
              <div class="col-5 text-center">
                <div>
                  <input
                    class="border-profile"
                    type="image"
                    alt="photo"
                    src={element.profile}
                  />
                </div>
              </div>
              <div class="col-7">
                <div class="table-responsive">
                  <table class="table align-items-center mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-0">
                            <span class="badge bg-gradient-primary me-3">
                              {" "}
                            </span>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Living Room</h6>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 15% </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-0">
                            <span class="badge bg-gradient-secondary me-3">
                              {" "}
                            </span>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Kitchen</h6>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 20% </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-0">
                            <span class="badge bg-gradient-info me-3"> </span>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Attic</h6>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 13% </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-0">
                            <span class="badge bg-gradient-success me-3">
                              {" "}
                            </span>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Garage</h6>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 32% </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="d-flex px-2 py-0">
                            <span class="badge bg-gradient-warning me-3">
                              {" "}
                            </span>
                            <div class="d-flex flex-column justify-content-center">
                              <h6 class="mb-0 text-sm">Basement</h6>
                            </div>
                          </div>
                        </td>
                        <td class="align-middle text-center text-sm">
                          <span class="text-xs font-weight-bold"> 20% </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{unitList}</div>;
};

export default Unit;
