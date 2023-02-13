import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "../design/icon-location.svg";
import L from "leaflet";

const myIcon = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  popupAnchor: [-0, -0],
  iconSize: [25, 35],
});
function MarkerPoint({ location, data }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(location, 13, {
      animate: true,
    });
  }, [map, location]);

  return (
    <Marker icon={myIcon} position={location}>
      <Popup>
        {data.country_name}-{data.city}
      </Popup>
    </Marker>
  );
}

export default MarkerPoint;
