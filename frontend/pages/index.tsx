import React, { useState } from "react";
import Map from "../components/Map";
import InputModal from "../components/InputModal";

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
      <div
        className="h-screen w-screen"
        style={{
          display: "flex",
          color: "#fff",
        }}
      >
        <div
          className="sm:w-4/5 w-full"
          style={{
            backgroundColor: "palevioletred",
          }}
        >
          <Map
            setShowModal={setShowModal}
            setLocation={setLocation}
            setAddress={setAddress}
          />
        </div>
        <div
          className="sm:flex hidden w-1/5 flex-col break-all"
          style={{
            backgroundColor: "#434343",
          }}
        >
          <div className="text-6xl mx-auto my-20">
            <h1 style={{ fontFamily: "Major Mono Display" }}>Anti</h1>
            <h1 style={{ fontFamily: "Major Mono Display" }}>pAnópico</h1>
          </div>
          <div className="border-solid border-4 border-white" />
          <div className="mx-auto p-8 my-8">
            <p className="text-base my-8">
              <strong>vigilância</strong>, <strong>controle</strong> e{" "}
              <strong>correção</strong>, essa é a santíssima trindade que
              compõem as sociedades modernas e nossas relações para com ela
            </p>
            <p className="text-base my-8">
              o <strong>panóptico</strong> é a “penitenciária ideal”, onde tudo
              é visto por todos de qualquer ponto, analogamente a modernidade
              nos trouxe ubiquidade em comunicação, e com isso... ubiquidade em
              vigilância
            </p>
            <p className="text-base my-8">
              o propósito deste projeto é provocar e questionar a presença da{" "}
              <strong>vigilância</strong> em nossas vidas, e o quanto estamos
              dispostos a sacrificar em nome de uma suposta segurança aqui você
              pode mapear e visualizar câmeras de <strong>segurança</strong> em
              sua cidade, sejam estas de filiação pública ou privada
            </p>
            <div className="w-full">LOGO</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
