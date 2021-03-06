import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div
      className="sm:flex hidden w-1/5 flex-col break-all"
      style={{
        backgroundColor: "#434343",
      }}
    >
      <div className="text-6xl mx-auto my-20 p-2">
        <h1 style={{ fontFamily: "Major Mono Display" }}>Anti</h1>
        <h1 style={{ fontFamily: "Major Mono Display" }}>pAnóptico</h1>
      </div>
      <div className="border-solid border-4 border-white" />
      <div className="mx-auto p-8 my-8">
        <div className="navlinks-menu">
          <ul>
            <li>
              <Link href="/">
                <a>home</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>sobre</a>
              </Link>
            </li>
            <li>
              <a href="https://github.com/iacapuca/anti-panoptico">github</a>
            </li>
          </ul>
        </div>
        <p className="text-base my-8">
          <strong>vigilância</strong>, <strong>controle</strong> e{" "}
          <strong>correção</strong>, essa é a santíssima trindade que compõem as
          sociedades modernas e nossas relações para com ela
        </p>
        <p className="text-base my-8">
          o <strong>panóptico</strong> é a “penitenciária ideal”, onde tudo é
          visto por todos de qualquer ponto, analogamente a modernidade nos
          trouxe ubiquidade em comunicação, e com isso... ubiquidade em
          vigilância
        </p>
        <p className="text-base my-8">
          o propósito deste projeto é provocar e questionar a presença da{" "}
          <strong>vigilância</strong> em nossas vidas, e o quanto estamos
          dispostos a sacrificar em nome de uma suposta segurança aqui você pode
          mapear e visualizar câmeras de <strong>segurança</strong> em sua
          cidade, sejam estas de filiação pública ou privada
        </p>
        <Image
          src="/logo.png"
          width={128}
          height={128}
          layout="responsive"
          className="fill-current text-white"
        />
      </div>
    </div>
  );
};

export default Sidebar;
