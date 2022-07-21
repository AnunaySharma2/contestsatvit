import { useState, useEffect } from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Stat from "./Stat";
import Table from "./Table";

function App() {
  const [contestInfo, setContestInfo] = useState();
  const [runningContests, setRunningContests] = useState();
  const [loading, setLoading] = useState(false);
  const [siteEndPoint, setSiteEndPoint] = useState("all");

  const changeEndPoint = (endPoint) => {
    setSiteEndPoint(endPoint);
  };

  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);
      const resp = await fetch(url);
      const data = await resp.json();
      setContestInfo(data.filter((contest) => contest.in_24_hours === "Yes"));
      setRunningContests(
        data.filter((contest) => contest.status === "CODING").reverse()
      );
      setLoading(false);
    };

    fetchData(`https://kontests.net/api/v1/${siteEndPoint}`);
  }, [siteEndPoint]);

  return (
    <div className="m-5">
      <Navbar changeEndPoint={changeEndPoint} />
      <h1 className="text-5xl mx-5 my-3 font-bold text-accent-focus">
        Upcoming Contests
      </h1>
      <Stat statTitle={"Upcoming Contests"} contestInfo={contestInfo} />
      <Loading loading={loading} />
      <Table tableContent={contestInfo} />
      <h1 className="text-5xl mx-5 my-3 font-bold text-accent-focus">
        Running Contests
      </h1>
      <Stat statTitle={"Running Contests"} contestInfo={runningContests} />
      <Loading loading  ={loading} />
      <Table tableContent={runningContests} />
    </div>
  );
}

export default App;
