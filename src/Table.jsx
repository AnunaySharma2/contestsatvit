import React from "react";
import moment from "moment";


function Table({tableContent}) {
  return (
    <div>
      <table className="table-zebra my-5 mx-auto w-full">
        <thead>
          <tr>
            <td className="p-3 font-bold text-lg">Name</td>
            <td className="p-3 font-bold text-lg">Start time</td>
            <td className="p-3 font-bold text-lg">End time</td>
          </tr>
        </thead>
        <tbody>
          {tableContent &&
            tableContent.map((contest, idx) => (
              <tr key={idx}>
                <td className="p-3 font-bold text-lg">
                  <a href={contest.url} target="blank">
                    {contest.name}
                  </a>
                </td>
                <td className="p-3 text-lg">
                  {moment(`${contest.start_time}`)
                    .utcOffset(330)
                    .format("MMMM Do YYYY, h:mm a")}
                </td>
                <td className="p-3 text-lg">
                  {moment(`${contest.end_time}`)
                    .utcOffset(330)
                    .format("MMMM Do YYYY, h:mm a")}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
