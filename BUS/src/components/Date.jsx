import React, { useState } from "react";

const Date = () => {
  const [Date, setDate] = useState();

  return (
    <div className="flex mt-5 px-16">
      <h6 className="block text-lg font-medium text-slate-700 ml-1">Date OF Dep:</h6>
      <br></br>
      <input
        type="date"
        className="p-3 rounded-lg w-full bg-gray-300 mt-2 focus:border blue-500 focus:bg-gray-600 focus:outline-offset-0"
        onChange={(e) => setDate(e.target.value)}
        value={Date}
      />
    </div>
  );
};

export default Date;
