import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import dsImg from "../assets/DS.png";
import asImg from "../assets/AS.png";
import rsImg from "../assets/RS.png";
function Header({ content, setContent }) {
  const [center, setCenter] = useState("");
  const [navOpen, setNavOpen] = useState("");
  const [drop1, setDrop1] = useState(false);
  const [drop2, setDrop2] = useState(false);
  // useEffect(() => {
  //   if (window.innerWidth < 1000) {
  //     setMobile(true);
  //   }
  // }, []);
  // function checkSize() {
  //   if (window.innerWidth < 1000) {
  //     setMobile(true);
  //   } else {
  //     setMobile(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", checkSize);
  //   return () => {
  //     window.removeEventListener("resize", checkSize);
  //   };
  // }, [window.innerWidth]);
  return (
    <div
      className="header"
      onMouseOver={(e) => {
        if (!e.target.classList.contains("hk")) {
          setContent("");
        }
      }}
    >
      <div className="headerInner">
        <div className="logo">
          <Link to="/">
            <a>
              <img src={logo} alt="logo" className="logo-img" />
            </a>
          </Link>
        </div>
        <div className="linksCont">
          <ul
            className="headerLinks"
            onMouseOver={(e) => {
              const temp = e.target.getBoundingClientRect();
              const centerCalc = (temp.left + temp.right) / 2;
              setContent(e.target.textContent);
              setCenter(centerCalc);
            }}
          >
            <li className="linkList hk">
              <a className="link hk">Products</a>
              <BsChevronDown />
            </li>
            <li className="linkList hk">
              <a className="link hk">Company</a>
              <BsChevronDown />
            </li>
            <li className="linkList">
              <Link to="/partner" className="link">
                Partner
              </Link>
            </li>
            <li className="linkList">
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
            <li className="linkList">
              <Link to="/member" className="link btn">
                Subscribe
              </Link>
            </li>
          </ul>
        </div>
        {navOpen && (
          <div className="lNav">
            <ul className="mobile-nav">
              <li className="sList dropdown ">
                <div
                  className="opener"
                  onClick={() => {
                    setDrop1(!drop1);
                  }}
                >
                  Products
                </div>
                {drop1 && (
                  <div className="hidden">
                    <div>
                      <Link to="/">XaveNow</Link>
                    </div>
                    <div>
                      <Link to="/pdss">PDSS</Link>
                    </div>
                    <div>
                      <Link to="/real-estate">Real Estate Cash Back</Link>
                    </div>
                  </div>
                )}
              </li>
              <li className="sList dropdown ">
                <div
                  className="opener"
                  onClick={() => {
                    setDrop2(!drop2);
                  }}
                >
                  Company
                </div>
                {drop2 && (
                  <div className="hidden">
                    <div>
                      <Link to="/about">About Us</Link>
                    </div>
                    <div>
                      <Link to="/">Career</Link>
                    </div>
                  </div>
                )}
              </li>
              <li className="sList">
                <Link to="/partner">Partner</Link>
              </li>
              <li className="sList">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
        <div className="navigation">
          <Link to="/member" classname="btn">
            Subscribe
          </Link>
          <span
            className="nav-btn"
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            {navOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </span>
        </div>
      </div>
      {content === "Products" && (
        <aside
          className="menu hk"
          style={{
            left: center,
          }}
        >
          <div className="contBig hk">
            <div className="cont hk">
              <a href="#" className="cta hk">
                <span className="hk">
                  <img src={asImg} alt="img" className="hk" />
                </span>{" "}
                XaveNow
              </a>
              <Link to="/pdss" className="cta hk">
                <span>
                  <img src={dsImg} alt="img" className="hk" />
                </span>{" "}
                PDSS
              </Link>
            </div>
            <Link to="/real-estate" className="cta hk">
              <span>
                <img src={rsImg} alt="img" className="hk" />
              </span>{" "}
              Real Estate Cashback
            </Link>
          </div>
        </aside>
      )}
      {content === "Company" && (
        <aside
          className="menu hk"
          style={{
            left: center,
          }}
          onMouseOver={() => {
            setContent("Company");
          }}
        >
          <div className="contBig2 hk">
            <Link to="/about" className="cta hk">
              About Us
            </Link>
            <a href="#" className="cta hk">
              Career
            </a>
          </div>
        </aside>
      )}
    </div>
  );
}
export default Header;
