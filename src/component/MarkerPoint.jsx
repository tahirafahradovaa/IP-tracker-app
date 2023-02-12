import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function MarkerPoint({ location }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(location, 13, {
      animate: true,
    });
  }, [map, location]);

  return (
    <Marker position={location}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

export default MarkerPoint;
