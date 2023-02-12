import React, { useEffect } from "react";

function Information({ data }) {
  return (
    <div className="infoContainer">
      <div>
        <h2>IP ADRESS</h2>
        <h1>{data.ip}</h1>
      </div>
      <div>
        <h2>Location</h2>
        <h1>
          {data.country_name}-{data.city}
        </h1>
      </div>
      <div>
        <h2>TimeZone</h2>
        <h1>
          {data.timezone}
          {data.utc_offset?.slice(0, 3)}:00
        </h1>
      </div>
    </div>
  );
}

export default Information;
