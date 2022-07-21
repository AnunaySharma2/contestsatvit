import React from "react";

function Navbar(props) {
  const sites = [
    { name: "All", url: "all" },
    { name: "CodeForces", url: "codeforces" },
    { name: "TopCoder", url: "top_coder" },
    { name: "AtCoder", url: "at_coder" },
    { name: "CodeChef", url: "code_chef" },
    { name: "HackerRank", url: "hacker_rank" },
    { name: "HackerEarth", url: "hacker_earth" },
    { name: "LeetCode", url: "leet_code" },
  ];

  return (
    <div className="flex flex-wrap px-5 py-8 text-xl font-medium gap-5 lg:justify-between">
      {sites.map((site) => (
        <p
          key={site.url}
          className="hover:scale-110 hover:text-green-400 transition ease-in-out"
          onClick={() => {
            props.changeEndPoint(site.url);
          }}
        >
          {site.name}
        </p>
      ))}
    </div>
  );
}

export default Navbar;
