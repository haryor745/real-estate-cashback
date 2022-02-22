import React, { useState } from "react";
import "./scss/about.scss";
import pBg from "./assets/about-bg.png";
import intBox from "./assets/integrity-box.svg";
import transBox from "./assets/trans-box.svg";
import createBox from "./assets/create-box.svg";
import excelBox from "./assets/excel-box.svg";
import compBox from "./assets/comp-box.svg";
import passBox from "./assets/pass-box.svg";
import { BsChevronRight } from "react-icons/bs";
const aboutArray = [
  {
    id: 1,
    img: intBox,
    title: "Integrity",
    text: "We analyze circumstances, strategies and processes to find the optimal solution for our clients.",
  },
  {
    id: 2,
    img: transBox,
    title: "Transparency",
    text: "We communicate ideas and processes clearly and transparently.",
  },
  {
    id: 3,
    img: excelBox,
    title: "Excellent Service Delivery",
    text: "We all love what we do That's our powerful engine.",
  },
  {
    id: 4,
    img: compBox,
    title: "Competency and Dynamism ",
    text: "We analyze circumstances, strategies and processes to find the optimal solution for our clients.",
  },
  {
    id: 5,
    img: createBox,
    title: "Creativity and Innovation.",
    text: "We communicate ideas and processes clearly and transparently.",
  },
  {
    id: 6,
    img: passBox,
    title: "Passion and Professionalism ",
    text: "We all love what we do That's our powerful engine.",
  },
];
function About({ setContent }) {
  const [showBtn, setShowBtn] = useState(true);
  return (
    <div
      className="about"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <img src={pBg} alt="bg-img" className="ab-bg" />
      <div className="abInner">
        <div className="abText">
          <h3>OUR VALUES</h3>
          <h1>The common spirit charterizes us.</h1>
          <p>
            We have a vision to help many other people to be even more
            successful.
          </p>
          <p>This is what we effectively work for everyday.</p>
          <div className="btnAbout">
            {showBtn ? (
              <button className="btn" onClick={() => setShowBtn(false)}>
                Read more <BsChevronRight />{" "}
              </button>
            ) : (
              <p className="knowText">
                Zylus Elites Cooperative limited is founded in 2018 under the
                auspices of Dr. Oluwatosin Olatujoye who is the present Chairman
                and president of the cooperative. The Cooperative through the
                commitment of its members and the desire to proffer solutions to
                the yearnings of the people became a business conglomerate
                saddled with not just the responsibilities of gathering funds
                but, provide shelter, resources to every member of the society
                through clear cut business plan with dividends shared by member
                of the cooperative. <br /> Zylus Cooperative as a business
                conglomerate manages and controls the activities of all member
                company. It is the mother company of Zylus Homes and Properties
                - a fast-growing real estate firm in Nigeria, Zylus Investment.{" "}
                <br /> <br />
                Zylus Elites Cooperative is an internationally recognized
                business Capital organization with interests in Real Estate
                Investment, Property Sales, Human Capital Development,
                Agriculture, Infrastructure and General Construction, Property
                Valuation, Designs and Printing, Media, Transport and Logistics,
                Traveling and Tours, Property Management and many more. <br />{" "}
                <br /> The cooperative’s corporate culture speaks
                Professionalism, Excellence, Integrity, Knowledge, and Service
                to offering top-notch business relationship to all our customers
                across all our operational subsidiaries.
              </p>
            )}
          </div>
        </div>
        <div className="abGrid">
          {aboutArray.map((item) => {
            return (
              <div className="box">
                <img src={item.img} alt="img" key={item.id} />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
