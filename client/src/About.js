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
          <h1>The common spirit characterizes us.</h1>
          <p>
            We have a vision to help many other people to be even more
            successful.
          </p>
          <p>This is what we do and why we work everyday.</p>
          <div className="btnAbout">
            {showBtn ? (
              <button className="btn" onClick={() => setShowBtn(false)}>
                Read more <BsChevronRight />{" "}
              </button>
            ) : (
              <p className="knowText">
                Real Estate Cashback Cooperative limited was created in 2018 to
                offer members access to opportunities in multiple markets, where
                members can invest collectively and share dividend . The
                cooperative also provide members with innovative tools to save,
                access loans and build long term wealth.
                <br /> <br />
                As an internationally recognized business Capital organization,
                RECB Cooperative Limited provides members access to
                opportunities in Real Estate Investment, Property Sales,
                Agriculture, Infrastructure and General Construction, Property
                acquisition Property Management and many more. <br /> <br />
                RECB Cooperative limited manages and controls innovative
                products such as Property Savings Scheme, Real Estate Cash Back
                and Target Save.
                <br /> <br />
                The company’s culture speaks Professionalism, Excellence,
                Integrity, Knowledge, and Service to offering top-notch business
                relationship to all members of the cooperative.
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
