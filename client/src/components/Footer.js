import React from "react";
import logo from "../assets/logo.png";
import fb from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import "../scss/footer.scss";
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
              <p>Product</p>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Plans</a>
            </li>
            <li>
              <a href="#">Integrations</a>
            </li>
            <li>
              <a href="#">Plans</a>
            </li>
          </ul>
          <ul className="grid grid3">
            <li>
              <p>Customer Stories</p>
            </li>
            <li>
              <a href="#">XaveNow</a>
            </li>
            <li>
              <a href="#">PDSS</a>
            </li>
            <li>
              <a href="#">Real Estate Cashback</a>
            </li>
            <li>
              <a href="#">PDSS</a>
            </li>
            <li>
              <a href="#">Real Estate Cashback</a>
            </li>
          </ul>
          <ul className="grid grid4">
            <li>
              <p>Company</p>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
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
            Copyright @{year} Zylus Elite. All Rights Reserved
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
