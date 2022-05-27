import React, { useState } from "react";
import ObaImg from "./assets/Oba.jpg";
import PressyImg from "./assets/Pressy.jpg";
import Pressy2Img from "./assets/Pressy 2.jpg";
import wasiu from "./assets/wasiu.jpg";
import gbenga from "./assets/Gbenga.png";
import "./scss/management.scss";
const persons = [
  {
    id: 1,
    name: "OBA Akinola Oyetade Akintera",
    img: ObaImg,
    role: "Chairman, Real Estate Cash Back Cooperative",
  },
  {
    id: 2,
    name: "Dr Oluwatosin Olatujoye",
    img: PressyImg,
    role: "President",
  },
  {
    id: 3,
    name: "Wasiu Sonekan",
    img: wasiu,
    role: "CEO/MD, Real Estate Cash Back Cooperative",
  },
  {
    id: 4,
    name: "Mr Gbenga Ojo",
    img: gbenga,
    role: "GMD",
  },
  // {
  //   id: 5,
  //   name: "Dr Oluwatosin Olatujoye",
  //   img: PressyImg,
  //   role: "Cooperative President",
  // },
  // {
  //   id: 6,
  //   name: "OBA Akinola Oyetade Akintera",
  //   img: Pressy2Img,
  //   role: "Chairman Real Estate Cash Back",
  // },
];
function Management({ setContent }) {
  return (
    <div
      className="management"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="glInner">
        <div className="glText">
          <h2>
            We bring a wealth of skills and experience from a wide range of
            background.
          </h2>
        </div>
        <div className="glGrid">
          {persons.map((person) => {
            return (
              <div className={`pCard pCard${person.id}`} key={person.id}>
                <img src={person.img} alt="person" />
                <h4 className="adminName">{person.name}</h4>
                <p>{person.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Management;
