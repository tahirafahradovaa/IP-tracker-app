import axios from "axios";
import React, { useState, useEffect } from "react";
import Information from "./component/Information";
import Map from "./component/Map";
import arrow from "./design/arrow.svg";
const App = () => {
  const [location, setLocation] = useState({ lat: 40.3909, lng: 49.8759 });
  const [ip, setIp] = useState("188.253.229.29");
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`https://ipapi.co/${ip}/json/`)
      .then(
        (res) => (
          setData(res.data),
          setLocation({ lat: res.data.latitude, lng: res.data.longitude })
        )
      );
  }, []);
  const handleClick = (event) => {
    axios
      .get(`https://ipapi.co/${ip}/json/`)
      .then(
        (res) => (
          setLocation({ lat: res.data.latitude, lng: res.data.longitude }),
          setData(res.data)
        )
      );
  };

  return (
    <>
      <div className="inputContainer">
        <h1
          style={{
            color: "white",
          }}
        >
          IP Address Tracker
        </h1>
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            onChange={(event) => setIp(event.target.value)}
            type="text"
            placeholder="enter your ip address"
          />
          <button onClick={handleClick}>
            <img src={arrow} alt="" />{" "}
          </button>
        </div>
      </div>
      {data && <Information data={data} />}
      <Map location={location} />
    </>
  );
};

export default App;
