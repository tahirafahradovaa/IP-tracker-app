import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

function MarkerPoint({ location, data }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(location, 13, {
      animate: true,
    });
  }, [map, location]);

  return (
    <Marker position={location}>
      <Popup>
        {data.country_name}-{data.city}
      </Popup>
    </Marker>
  );
}

export default MarkerPoint;
