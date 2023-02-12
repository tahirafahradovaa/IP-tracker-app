import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPoint from "./MarkerPoint";
function Map({ location, data }) {
  return (
    <MapContainer
      style={{
        margin: "0 auto",
        width: "99%",
        height: "600px",
      }}
      center={location}
      zoom={15}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPoint data={data} location={location} />
    </MapContainer>
  );
}

export default Map;
