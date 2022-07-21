import React from "react";

function Stat({ statTitle, contestInfo}) {
  return (
    <>
      <div className="stats shadow mt-3">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title ">{statTitle}</div>
          <div className="stat-value text-secondary">
            {contestInfo && contestInfo.length}
          </div>
        </div>
      </div>
    </>
  );
}

export default Stat;
