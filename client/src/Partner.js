import React, { useState, useEffect } from "react";
import "./scss/partner.scss";
import { Link } from "react-router-dom";
import partners from "./assets/partners.png";

function Partner({ setContent }) {
  const [pfName, setPfName] = useState("");
  const [plName, setPlName] = useState("");
  const [company, setCompany] = useState("");
  const [wMail, setWmail] = useState("");
  const [nation, setNation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState(null);
  const partnerSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("pussy");
      fetch("/partner_form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pfName,
          plName,
          wMail,
          company,
          nation,
          city,
        }),
      })
        .then((response) => response.json())
        .then((text) => console.log(text))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
    setPfName("");
    setPlName("");
    setCity("");
    setCompany("");
    setNation("");
    setWmail("");
    alert("Form submitted successfully.");
  };
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountry(data);
      });
  }, []);
  return (
    <div
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="partner">
        <div className="banner">
          <h2>Connect your finances with the most reliable team.</h2>
          <Link to="/partner" className="banner-btn btn">
            Become a Partner
          </Link>
        </div>
        <div className="pGrid">
          <div className="gray"></div>
          <div className="gText">
            <h3>What you will get</h3>
            <div className="sect">
              <h6>Bigger Purchases</h6>
              <p>
                This information is only used to improve your won't share or
                communicate your data to any third party
              </p>
            </div>
            <div className="sect">
              <h6>Instant Money</h6>
              <p>
                This information is only used to improve your won't share or
                communicate your data to any third party
              </p>
            </div>
            <div className="sect">
              <h6>More Clients</h6>
              <p>
                This information is only used to improve your won't share or
                communicate your data to any third party
              </p>
            </div>
            <div className="sect">
              <h6>No integration</h6>
              <p>
                This information is only used to improve your won't share or
                communicate your data to any third party
              </p>
            </div>
          </div>
        </div>
        <div className="fpartners">
          <h2>Trusted by the world's most innovative companies.</h2>
          {/* <img src={partners} alt="partners" /> */}
        </div>
        <div className="pGrid2">
          <div className="grid-img"></div>
          <form className="partner-form" onSubmit={partnerSubmit}>
            <h2>Become a partner</h2>
            <label htmlFor="fname">First Name *</label>
            <input
              type="text"
              name="fname"
              value={pfName}
              onChange={(e) => setPfName(e.target.value)}
              required
            />
            <label htmlFor="lname">Last Name *</label>
            <input
              type="text"
              name="lname"
              value={plName}
              onChange={(e) => setPlName(e.target.value)}
              required
            />
            <label htmlFor="company">Company/Organization*</label>
            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <label htmlFor="partner-email">Work email*</label>
            <input
              type="email"
              name="partner-email"
              value={wMail}
              onChange={(e) => setWmail(e.target.value)}
              required
            />
            <label htmlFor="country">Country *</label>
            <select
              name="country"
              value={nation}
              onChange={(e) => setNation(e.target.value)}
              required
            >
              <option value="undisclosed">Please Select</option>
              {country &&
                country.map((item) => {
                  const cName = item.name;
                  return (
                    <option value={`${cName}`} key={item.name}>
                      {cName}
                    </option>
                  );
                })}
            </select>
            <label htmlFor="city">City*</label>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <button type="submit" className="btn">
              Join us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Partner;
