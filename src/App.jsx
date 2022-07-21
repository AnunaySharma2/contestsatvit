import { useState, useEffect } from "react";
import Table from "./Table";

function App() {
  const [contestInfo, setContestInfo] = useState();
  const [runningContests, setRunningContests] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (endpoint) => {
      setLoading(true);
      const resp = await fetch(endpoint);
      const data = await resp.json();
      setContestInfo(data.filter((contest) => contest.in_24_hours === "Yes"));
      setRunningContests(data.filter((contest) => contest.status === "CODING"));
      setLoading(false);
    };

    fetchData("https://kontests.net/api/v1/all");
  }, []);

  return (
    <div className="m-5">
      <h1 className="text-5xl mx-5 font-bold text-accent-focus">
        Upcoming Contests
      </h1>
      {loading && <h1 className="mx-5 my-5">Loading...</h1>}
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
          <div className="stat-title ">Upcoming Contests</div>
          <div className="stat-value text-secondary">
            {contestInfo && contestInfo.length}
          </div>
        </div>
      </div>

      <Table tableContent={contestInfo} />
      <h1 className="text-5xl mx-5 font-bold text-accent-focus">
        Running Contests
      </h1>
      {loading && <h1 className="mx-5 my-5">Loading...</h1>}

      <div className="stats shadow mt-3">
        <div className="stat">
          <div className="stat-figure text-primary">
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
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Running Contests</div>
          <div className="stat-value text-primary">
            {runningContests && runningContests.length}
          </div>
        </div>
      </div>
      <Table tableContent={runningContests} />
    </div>
  );
}

export default App;
