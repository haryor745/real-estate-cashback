import React from "react";
import logo from "../assets/footer-logo.png";
import fb from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import "../scss/footer.scss";
import { Link } from "react-router-dom";
function Footer({ setContent }) {
  const year = new Date().getFullYear();
  return (
    <div
      className="contF"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="section sectF">
        <div className="grids">
          <div className="grid grid1">
            <img src={logo} alt="logo" />
          </div>
          <ul className="grid grid2">
            <li>
              <p>Products</p>
            </li>
            <li>
              <Link to="/real-estate">Real Estate Cashback</Link>
            </li>
            <li>
              <Link to="/target-savings">Target Savings</Link>
            </li>
            <li>
              <Link to="/pdss">PSS</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <Link to="/faqs">Plans</Link>
            </li>
          </ul>
          <ul className="grid grid3">
            <li>
              <p>Customer Stories</p>
            </li>
            <li>
              <Link to="/gallery">Testimonials</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
          <ul className="grid grid4">
            <li>
              <p>Company</p>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
          <ul className="grid grid5">
            <li>
              <p>Resources</p>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <footer>
          <div className="copy">
            Copyright @{year} Real Estate Cashback. All Rights Reserved
          </div>
          <div className="socialIcons">
            <a href="#" className="fb">
              <img src={fb} alt="fbImg" />
            </a>
            <a href="#" className="linkedIn">
              <img src={linkedin} alt="linkedinImg" />
            </a>
            <a href="#" className="twitter">
              <img src={twitter} alt="twitterImg" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
export default Footer;
