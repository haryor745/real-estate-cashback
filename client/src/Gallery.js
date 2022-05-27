import React, { useState } from "react";
import oba from "./assets/g-oba.png";
import komolafe from "./assets/g-komolafe.png";
import gbenga from "./assets/g-gbenga.png";
import wasiu from "./assets/g-wasiu.png";
import bukola from "./assets/g-bukola.png";
import prosper from "./assets/g-prosper.png";
import ola from "./assets/g-ola.png";
import "./scss/gallery.scss";
const persons = [
  {
    id: 1,
    name: "OBA Akinola Oyetade Akintera",
    img: oba,
    role: "Chairman",
  },
  {
    id: 2,
    name: "Dr Oluwatosin Olatujoye",
    img: ola,
    role: "President",
  },
  {
    id: 3,
    name: "Wasiu Sonekan",
    img: wasiu,
    role: "CEO/President",
  },
  {
    id: 4,
    name: "Mr Olungbega Ojo",
    img: gbenga,
    role: "GMD",
  },
  {
    id: 5,
    name: "Mr Olatujoye Olubukola",
    img: bukola,
    role: "",
  },
  {
    id: 6,
    name: "Mr Komolafe",
    img: komolafe,
    role: "Treasurer",
  },
  {
    id: 7,
    name: "Prosper Emakpor",
    img: prosper,
    role: "Business Development Officer",
  },
];
function Gallery({ setContent }) {
  return (
    <div
      className="gallery"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="glInner">
        <div className="gText">
          <h2>
            We bring a wealth of skills and experience from a wide range of
            background.
          </h2>
        </div>
        <div className="gGrid">
          {persons.map((person) => {
            return (
              <div className={`gCard gCard${person.id}`} key={person.id}>
                <img src={person.img} alt="person" />
                <h4 className="teamName">{person.name}</h4>
                <p>{person.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
