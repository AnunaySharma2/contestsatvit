import { useState, useEffect } from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Stat from "./Stat";
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
      <Navbar />
      <h1 className="text-5xl mx-5 my-3 font-bold text-accent-focus">
        Upcoming Contests
      </h1>
      <Loading loading={loading} />
      <Stat statTitle={"Upcoming Contests"} contestInfo={contestInfo} />
      <Table tableContent={contestInfo} />
      <h1 className="text-5xl mx-5 my-3 font-bold text-accent-focus">
        Running Contests
      </h1>
      <Loading loading={loading} />
      <Stat statTitle={"Running Contests"} contestInfo={runningContests} />
      <Table tableContent={runningContests} />
    </div>
  );
}

export default App;
