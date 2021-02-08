import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const Map = ({ setShowModal, setLocation, setAddress }): JSX.Element => {
  const [error, setError] = useState<string>();
  const [mapLocation, setMapLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({ latitude: 0, longitude: 0 });

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setMapLocation({
        latitude,
        longitude,
      });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [mapLocation.longitude, mapLocation.latitude],
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

Map.propTypes = {
  setShowModal: PropTypes.func,
  setLocation: PropTypes.func,
  setAddress: PropTypes.func,
};

export default Map;
