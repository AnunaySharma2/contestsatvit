import React from "react";

function Navbar() {
  return (
    <div className="flex flex-wrap px-5 py-8 text-xl font-medium gap-5 lg:justify-between">
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        ALL
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        CodeForces
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        TopCoder
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        AtCoder
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        CodeChef
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        HackerRank
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        HackerEarth
      </p>
      <p className="hover:scale-110 hover:text-green-400 transition ease-in-out">
        LeetCode
      </p>
    </div>
  );
}

export default Navbar;
