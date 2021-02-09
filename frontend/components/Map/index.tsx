import React, { useEffect } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = ({ setShowModal, setLocation, setAddress }): JSX.Element => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-46.62529, -23.533773],
      zoom: 9,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      placeholder: "Buscar",
    });
    map.addControl(geocoder);

    map.addControl(new MapboxLanguage());

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

Map.propTypes = {
  setShowModal: PropTypes.func,
  setLocation: PropTypes.func,
  setAddress: PropTypes.func,
};

export default Map;
