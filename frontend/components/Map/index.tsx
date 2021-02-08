import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = ({ setShowModal, setLocation, setAddress }): JSX.Element => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-74.5, 40],
      zoom: 9,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    map.on("click", async (e) => {
      setLocation(e.lngLat);
      const res = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=${process.env.NEXT_PUBLIC_LOCATIONIQ_TOKEN}&lat=${e.lngLat.lat}&lon=${e.lngLat.lng}&format=json`
      );
      const reversedLocation = await res.json();
      setAddress(reversedLocation.address);
      console.log(reversedLocation.address);
      setShowModal((prev) => !prev);
    });
  }, []);

  return (
    <>
      <div id="map" style={{ height: "100%", width: "100%" }} />
    </>
  );
};

export default Map;
