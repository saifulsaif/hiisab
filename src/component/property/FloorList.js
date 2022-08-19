import React from "react";

const FloorList = (props) => {
  const floors = props.floors.map((element) => {
    return (
      <li>
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    {element.name}
                  </p>
                  <h5 class="font-weight-bolder mb-0">
                    <div class="progress w-${element.percentage}">
                      <div
                        class="progress-bar bg-dark w-90"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </h5>
                </div>
              </div>
              <div class="col-4 text-end">
                <div class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md floor-text">
                  {element.number}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return <div>{floors}</div>;
};

export default FloorList;
