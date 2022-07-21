import { useState, useEffect } from "react";

function App() {
  const [contestInfo, setContestInfo] = useState();
  const [runningContests, setRunningContests] = useState();

  useEffect(() => {
    const fetchData = async (endpoint) => {
      const resp = await fetch(endpoint);
      const data = await resp.json();
      setContestInfo(data.filter((contest) => contest.in_24_hours === "Yes"));
      setRunningContests(data.filter((contest) => contest.status === "CODING"));
    };

    fetchData("https://kontests.net/api/v1/all");
    console.log(contestInfo);
    console.log(runningContests);
  }, []);

  return (
    <div className="m-5">
      <h1 className="text-5xl font-bold">Running Contests</h1>
      <table className="table-zebra my-5 mx-auto w-full">
        <thead>
          <tr>
            <th className="p-3 font-bold text-lg">Name</th>
            <th className="p-3 text-lg">Start time</th>
            <th className="p-3 text-lg">Duration</th>
          </tr>
        </thead>
        <tbody>
          {runningContests &&
            runningContests.map((contest, idx) => (
              <tr key={idx}>
                <td className="p-3 font-bold text-lg">
                  <a href={contest.url} target="blank">
                    {contest.name}
                  </a>
                </td>
                <td className="p-3 text-lg">{contest.start_time}</td>
                <td className="p-3 text-lg">{contest.duration}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <h1 className="text-5xl font-bold">Contests in the next 24 hours</h1>
      {contestInfo &&
        contestInfo.map((contest, idx) => (
          <div key={idx}>
            <h1>{contest.name}</h1>
          </div>
        ))}
    </div>
  );
}

export default App;
