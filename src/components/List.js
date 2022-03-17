import React from "react";
var backgroundColor = [
  "rgb(255, 99, 132)",
  "rgb(54, 162, 235)",
  "rgb(255, 205, 86)",
  "rgb(25, 135, 84)",
  "rgb(108,117,125)",
  "rgb(13,202,240)",
  "rgb(33,37,41)",
  "rgb(13,110,253)",
  "rgb(220,53,69)",
];
export default function List(props) {
  var { data, color, areaName } = props;
  return (
    <div className="area-box">
      <div>
        {data.length !== 0 ? (
          data.map((v, i) => {
            return (
              <div
                className="risk-area"
                key={i}
                style={{
                  borderRight: `8px solid ${backgroundColor[color]}`,
                  background: "rgba(0,0,0,0.03)",
                }}
              >
                {v}
              </div>
            );
          })
        ) : (
          <div
            className="risk-area"
            style={{
              borderRight: `8px solid ${backgroundColor[color]}`,
              background: "rgba(0,0,0,0.1)",
            }}
          ></div>
        )}
      </div>
      <span className="area-name badge bg-dark position-relative">
        {areaName}
        <span className="badge rounded-pill">
          {data.length}
        </span>
      </span>
    </div>
  );
}
