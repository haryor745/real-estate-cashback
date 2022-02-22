import React, { useState } from "react";
import { BsArrowRight, BsCheckLg } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import HeroImg from "./assets/new-hero.png";
import dsImg from "./assets/DS.png";
import dsImg1 from "./assets/DS 1.png";
import asImg from "./assets/AS.png";
import asImg1 from "./assets/AS 1.png";
import fcImg from "./assets/FC.png";
import fcImg1 from "./assets/FC 1.png";
import rsImg from "./assets/RS.png";
import rsImg1 from "./assets/RS 1.png";
import xaveImg from "./assets/xave-img.png";
import investImg from "./assets/invest-img.png";
import pImg from "./assets/p-img.png";
import cardImg1 from "./assets/XaveNow.png";
import cardImg2 from "./assets/CashBack.png";
import cardImg3 from "./assets/PDSS.png";
import "./scss/main.scss";
import { Link } from "react-router-dom";
const platform = [
  {
    id: 1,
    img: cardImg1,
    title: "XaveNow",
    text: "XaveNow is an innovative savings platform designed to help members of the Zylus Elite Cooperative Multipurpose Society access savings, wealth growth tools and investment opportunities",
    link: "/",
    btnName: "XaveNow",
    color: "one",
  },
  {
    id: 2,
    img: cardImg2,
    title: "Real Estate Cash Back",
    text: "Real Estate Cashback is a Real Estate trading scheme established by Zylus Elite Corporative in 2018 and managed under Zylus Investment Limited.",
    link: "/real-estate",
    btnName: "Cash Back",
    color: "two",
  },
  {
    id: 3,
    img: cardImg3,
    title: "PDSS",
    text: "PDSS is specially designed for low and medium-income earners who are willing to make returns through real estate investment and want to save towards owning or developing a property.",
    link: "/pdss",
    btnName: "PDSS",
    color: "three",
  },
];
const finance1 = [
  {
    id: 1,
    img: asImg,
    img1: asImg1,
    title: "Auto Save",
    text: "This allows users to automate their savings. With autosave, users can choose the frequency of deductions from their account (daily, weekly and monthly) and earn 10% ROI",
    btnText: "XaveNow Auto Save",
  },
  {
    id: 2,
    img: dsImg,
    img1: dsImg1,
    title: "Development Saving",
    text: "Allows every individual invest monthly on installment basis for a period of one (1) year to develop a building project for resale and earn a 25% return.",
    btnText: "PDSS",
  },
  {
    id: 3,
    img: rsImg,
    img1: rsImg1,
    title: "Development Saving",
    text: "It is a Real Estate trading initiative that involves the acquisition and development of a large expanse of land for building, ownership, and profit maximization.",
    btnText: "Cash Back",
  },
  {
    id: 4,
    img: fcImg,
    img1: fcImg1,
    title: "Fixed Commmision",
    text: "TARGET XAVE allows users to save towards a goal while earning 12% ROI on their savings. ",
    btnText: "Target Savings",
  },
];
function SectionA({ setContent }) {
  const [subscribe, setSubscribe] = useState("");
  return (
    <div
      className="creamCont"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <main className="hero">
        <div className="heroImg">
          <img src={HeroImg} alt="hero image" />
        </div>
        <div className="heroText">
          <p className="p1">
            <span>Zylus Elite Cooperative</span>
          </p>
          <h1>
            Infuse in untapped potential with <span>Elite</span> opportunities.
          </h1>
          <p>Launching your new investment opportunities with Zylus Elite.</p>
          <form
            className="heroBtnCont"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <IoIosMail />
            <input
              type="email"
              placeholder="Your mail"
              required
              value={subscribe}
              onChange={(e) => {
                setSubscribe(e.target.value);
              }}
            />
            <button type="submit" className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
function SectionB() {
  return (
    <div className="creamCont2">
      <div className="section sectB">
        <div className="text">
          <h2>One platform, Endless potentials.</h2>
          <p>
            An all-in-one finance management platform that makes planning,
            investment and wealth creation experiences easier than ever.
          </p>
        </div>
        <div className="content">
          {platform.map((item) => {
            return (
              <div className={`card card${item.id}`} key={item.id}>
                <div className="upper">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <img src={item.img} alt="card-img" />
                </div>
                <div className="ctaCont">
                  <Link to={item.link} className="cta">
                    Explore {item.btnName} <BsArrowRight />{" "}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function SectionC() {
  return (
    <div className="ashCont">
      <div className="section sectC">
        <div className="cText">
          <h1>Have full control over your finances and business.</h1>
          <p>Earn 12% - 35% when you take merit of the investment plans.</p>
        </div>
        <div className="cContent1">
          {finance1.map((item) => {
            return (
              <div className="box" key={item.id}>
                <img src={item.img} alt="alt" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#" className="cta">
                  <span>
                    <img src={item.img1} alt="img" />
                  </span>{" "}
                  {item.btnText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function SectionD() {
  return (
    <>
      <div className="section sectD one">
        <div className="dText">
          <h2>
            Gain access to platforms optimized for loans and secure savings.
          </h2>
          <p>
            We have designed series of products capable of solving your savings
            and loans issues. They also guarantee high imvestment rates, quick
            acccess to loans and secured saving platform.
          </p>
          <ul>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Unlimited loans
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Optimized saving platform
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              High interest on savings
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Quick access to loans
            </li>
            <li>
              <span className="btn">Explore Now</span>
            </li>
          </ul>
        </div>
        <div className="dImg">
          <img src={xaveImg} alt="xave-img" />
        </div>
      </div>
      <div className="section sectD two">
        <div className="dImg">
          <img src={investImg} alt="invest-img" />
        </div>
        <div className="dText">
          <h2>
            Business opportunities in real estate investments and mortgage
            opportunities.
          </h2>
          <p>
            Elite corporative also provides business opportunities in real
            estate and real estate investment with carefully designed products
            which makes it easy to invest properly and also thoroughly manage
            your investments.
          </p>
          <ul>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Real estate investment
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Mortgage opportunities
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Property acquisitions
            </li>
            <li>
              {" "}
              <span>
                <BsCheckLg />
              </span>{" "}
              Agro investment
            </li>
            <li>
              <span className="btn">Explore Now</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
function SectionE() {
  return (
    <div className="cont5">
      <div className="section sectE">
        <div className="reviewCont">
          <div className="review1">
            <h4>CASE STUDY</h4>
            <h3>Trusted by the world's most profit centric teams</h3>
            <p>
              The Zylus Elite cooperative helps individuals and businesses scale
              their finances and businesses positively.
            </p>
            <a href="#" className="btn">
              Read More
            </a>
          </div>
          <div className="review2">
            <h5>
              Zylus Cooperative as a business conglomerate manages and controls
              the activities of all member company. It is the mother company of
              Zylus Homes and Properties -a fast-growing real estate firm in
              Nigeria, Zylus Investment.
            </h5>
            <div className="person">
              <div className="pImg">
                <img src={pImg} alt="person-image" />
              </div>
              <div className="pText">
                <h6>Alabi Samuel</h6>
                <p>Digital Marketer and Strategist</p>
              </div>
            </div>
          </div>
        </div>
        <div className="member">
          <h2>
            Join Zylus Cooperative within minutes, improve your finance within
            hours.
          </h2>
          <p>
            Join the Zylus cooperative and have access to special finance tips
            and offers that would help build your business.
          </p>
          <Link to="/member">
            <a className="btn">Subscribe</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Home({ setContent }) {
  return (
    <>
      <SectionA setContent={setContent} />
      <SectionB />
      <SectionC />
      <SectionD />
      <SectionE />
    </>
  );
}

export default Home;
