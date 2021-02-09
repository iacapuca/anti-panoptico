import React, { useState } from "react";
import Image from "next/image";
import Map from "../components/Map";
import InputModal from "../components/InputModal";
import Sidebar from "../components/Sidebar";

const Home = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  return (
    <>
      <InputModal
        showModal={showModal}
        setShowModal={setShowModal}
        location={location}
        address={address}
      />
      <div className="sm:w-4/5 w-full">
        <Map
          setShowModal={setShowModal}
          setLocation={setLocation}
          setAddress={setAddress}
        />
      </div>
      <Sidebar />
    </>
  );
};

export default Home;
