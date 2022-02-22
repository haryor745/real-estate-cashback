import React, { useState, useEffect } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FiUpload } from "react-icons/fi";
import mImg from "./assets/member-img.png";
import "./scss/member.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import axios from "axios";
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper";
// use accept for file upload later
// install Swiper modules
SwiperCore.use([Navigation]);

function Member({ setContent }) {
  const [active, setActive] = useState("estate");
  return (
    <div
      className="bam"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="member-grid">
        <div className="side1">
          <div className="selector">
            <button
              className={`activate estate ${active === "estate" && "set"}`}
              onClick={() => {
                setActive("estate");
              }}
            >
              Real Estate Cash Back
            </button>
            <button
              className={`activate pdss ${active === "pdss" && "set"}`}
              onClick={() => {
                setActive("pdss");
              }}
            >
              Property Development Saving Scheme
            </button>
          </div>
          <div className="padded">
            <h2>Become a Zylus Elite Member</h2>
            <ul>
              <li>
                <span>
                  <BsCheckLg />
                  Unlimited access to finance tips
                </span>
              </li>
              <li>
                <span>
                  <BsCheckLg />
                  No credit card fee
                </span>
              </li>
              <li>
                <span>
                  <BsCheckLg />
                  Premium membership at no cost
                </span>
              </li>
              <li>
                <span>
                  <BsCheckLg />
                  Check out all premium features
                </span>
              </li>
            </ul>
            <div className="member-img">
              <img src={mImg} alt="member-image" />
            </div>
          </div>
        </div>
        {active === "estate" ? <EstateForm /> : <PdssForm />}
      </div>
    </div>
  );
}
function EstateForm() {
  const [sent, setSent] = useState(false);
  const [cfName, setCfName] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [cPhone, setCPhone] = useState("");
  const [cDOB, setCDOB] = useState("");
  const [cMS, setCMS] = useState("");
  const [cGender, setCGender] = useState("");
  const [cOrigin, setCOrigin] = useState("");
  const [invested, setInvested] = useState("");
  const [acName, setAcName] = useState("");
  const [duration, setDuration] = useState("");
  const [uorM, setUorM] = useState("");
  const [passport, setPassport] = useState("");
  const [eofP, setEofP] = useState("");
  const [ID, setID] = useState("");
  const [appDate, setAppDate] = useState("");
  const [kFN, setKFN] = useState("");
  const [kMail, setKMail] = useState("");
  const [kAddress, setKAddress] = useState("");
  const [kPhone, setKPhone] = useState("");
  const [rCID, setRCID] = useState("");
  const [rFN, setRFN] = useState("");
  const [rMail, setRMail] = useState("");
  const [rPhone, setRPhone] = useState("");
  const [country, setCountry] = useState(null);
  const estateSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("pussy");
      fetch("/estate_mail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cfName,
          cEmail,
          cPhone,
          cDOB,
          cMS,
          cGender,
          cOrigin,
          invested,
          acName,
          duration,
          uorM,
          passport,
          eofP,
          ID,
          appDate,
          kFN,
          kMail,
          kAddress,
          kPhone,
          rCID,
          rFN,
          rMail,
          rPhone,
        }),
      })
        .then((response) => response.json())
        .then((text) => console.log(text))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
    setCfName("");
    setCEmail("");
    setCPhone("");
    setCDOB("");
    setCMS("");
    setCGender("");
    setCOrigin("");
    setInvested("");
    setAcName("");
    setDuration("");
    setUorM("");
    setPassport("");
    setEofP("");
    setID("");
    setAppDate("");
    setKFN("");
    setKMail("");
    setKAddress("");
    setKPhone("");
    setRCID("");
    setRFN("");
    setRMail("");
    setRPhone("");
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
    <div className="side2">
      <form
        onSubmit={estateSubmit}
        className="member-form"
        encType="multipart/form-data"
      >
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          <SwiperSlide className="part1">
            <div className="form-text">
              <h2>Real Estate Cash Back</h2>
              <p>
                This information is only used to improve your Zylus Elite
                Experience, we won't share or communicate your data to any third
                party.
              </p>
            </div>

            <label htmlFor="name">Client’s Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Snow"
              required
              className="input-1"
              value={cfName}
              onChange={(e) => setCfName(e.target.value)}
            />
            <label htmlFor="member-email">Client’s Email Address *</label>
            <input
              type="email"
              name="member-email"
              placeholder="info@zylusgroup.com"
              required
              className="input-1"
              value={cEmail}
              onChange={(e) => setCEmail(e.target.value)}
            />
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+2348000000000"
              className="input-1"
              value={cPhone}
              onChange={(e) => setCPhone(e.target.value)}
            />
            <label htmlFor="dob">Client’s Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="input-1"
              value={cDOB}
              onChange={(e) => setCDOB(e.target.value)}
            />
            <label htmlFor="m-status">Client’s Marital Status *</label>
            <select
              name="m-status"
              required
              value={cMS}
              onChange={(e) => setCMS(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="undisclosed">Prefer Not To Say</option>
            </select>
            <label htmlFor="gender">Gender *</label>
            <select
              name="gender"
              required
              value={cGender}
              onChange={(e) => setCGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="undisclosed">Prefer Not To Say</option>
            </select>
            <label htmlFor="country">Country *</label>
            <select
              name="country"
              required
              value={cOrigin}
              onChange={(e) => setCOrigin(e.target.value)}
            >
              <option value="undisclosed">Select Your Country</option>
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
            <div className="s-cont">
              <button className="btn sBtn next">Next Step</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="part2">
            <div className="form-text">
              <h2>Real Estate Cash Back</h2>
              <p>
                This information allows us to personalize your zylus elite
                experience and to provide relevant tips and content.
              </p>
            </div>
            <label htmlFor="invested">Amount Invested *</label>
            <input
              type="text"
              name="invested"
              required
              className="input-1"
              value={invested}
              onChange={(e) => setInvested(e.target.value)}
            />
            <label htmlFor="account-name">Account Name *</label>
            <input
              type="text"
              name="account-name"
              required
              className="input-1"
              value={acName}
              onChange={(e) => setAcName(e.target.value)}
            />

            <div className="radio-cont">
              <h5>Duration</h5>
              <label htmlFor="duration">
                <input
                  type="radio"
                  name="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
                12 Months
              </label>
            </div>
            <div className="radio-cont">
              <h5>Upfront or Maturity</h5>
              <label htmlFor="upfront">
                <input
                  type="radio"
                  name="u/m"
                  value={uorM}
                  onChange={(e) => setUorM(e.target.value)}
                />
                Upfront- 50% payable ( 28% for 12 months)
              </label>
              <label htmlFor="maturity">
                <input
                  type="radio"
                  name="u/m"
                  value={uorM}
                  onChange={(e) => setUorM(e.target.value)}
                />
                Maturity ( 32% for 12 months)
              </label>
            </div>
            <div className="uploads">
              <label htmlFor="passport" className="bold">
                Upload a Passport Photograph *
              </label>
              <label htmlFor="passport" className="upload">
                <FiUpload /> Add File
                <input
                  type="file"
                  accept="image/*"
                  name="passport"
                  id="passport"
                  onChange={(e) => setPassport(e.target.files[0])}
                />
              </label>
              <label htmlFor="evidence" className="bold">
                Upload Evidence of payment here
              </label>
              <label htmlFor="payment-evidence" className="upload">
                <FiUpload /> Add File
                <input
                  type="file"
                  name="payment-evidence"
                  id="payment-evidence"
                  accept="image/*"
                  onChange={(e) => setEofP(e.target.files[0])}
                />
              </label>
              <label htmlFor="evidence" className="bold">
                Upload a valid ID card
              </label>
              <label htmlFor="valid-id" className="upload" id="file">
                <FiUpload /> Add File
                <input
                  type="file"
                  accept="image/*"
                  name="valid-id"
                  id="valid-id"
                  onChange={(e) => setID(e.target.files[0])}
                />
              </label>
            </div>
            <label htmlFor="app-date">Application Date *</label>
            <input
              type="date"
              name="app-date"
              className="input-1"
              value={appDate}
              onChange={(e) => setAppDate(e.target.value)}
            />
            {/* <div className="accept">
              <div className="checkbox">
                <label htmlFor="checkbox">
                  <input type="checkbox" name="checkbox" />
                  Pls confirm you have read and understood the FAQ.
                  https://www.zylushomes.com/real-estate-cash-back-faq/) *
                </label>
              </div>
            </div> */}
            <div className="btn-cont">
              <button className="btn prev">Back</button>
              <button className="btn sBtn next">Next Step</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="part3">
            <div className="form-text">
              <h2>Real Estate Cash Back</h2>
              <p>
                This information allows us to personalize your zylus elite
                experience and to provide relevant tips and content.
              </p>
            </div>
            <label htmlFor="kin-name">Next of Kin's Full Name</label>
            <input
              type="text"
              name="kin-name"
              placeholder="John Doe"
              className="input-1"
              value={kFN}
              onChange={(e) => setKFN(e.target.value)}
            />
            <label htmlFor="kin-email">Next of Kin's Email</label>
            <input
              type="email"
              name="kin-email"
              placeholder="info@zylusgroup.com"
              className="input-1"
              value={kMail}
              onChange={(e) => setKMail(e.target.value)}
            />
            <label htmlFor="kin-address">Next of Kin's Address</label>
            <input
              type="text"
              name="kin-address"
              placeholder="21, Agu Amwachi streeet"
              className="input-1"
              value={kAddress}
              onChange={(e) => setKAddress(e.target.value)}
            />
            <label htmlFor="kin-number">Next of Kin's Phone Number</label>
            <input
              type="text"
              name="kin-number"
              placeholder="08012345678"
              className="input-1"
              value={kPhone}
              onChange={(e) => setKPhone(e.target.value)}
            />
            <div className="account-info">
              <h6>Account Details</h6>
              <p>1. ZYLUS homes and property Ltd First bank 2035888116</p>
              2. ZYLUS homes and property Ltd GTBANK 0647588694
            </div>
            <div className="btn-cont">
              <button className="btn prev">Back</button>
              <button className="btn sBtn next">Next Step</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="part4">
            <div className="form-text">
              <h2>Real Estate Cash Back</h2>
              <p>
                This information allows us to personalize your zylus elite
                experience and to provide relevant tips and content.
              </p>
            </div>
            <label htmlFor="realtor-cid">Realtor's CID</label>
            <input
              type="number"
              name="realtor-cid"
              placeholder="1233444"
              className="input-1"
              value={rCID}
              onChange={(e) => setRCID(e.target.value)}
            />
            <label htmlFor="realtor-name">Realtor's Full Name</label>
            <input
              type="text"
              name="realtor-name"
              placeholder="John Doe"
              className="input-1"
              value={rFN}
              onChange={(e) => setRFN(e.target.value)}
            />
            <label htmlFor="realtor-email">Realtor's Email</label>
            <input
              type="email"
              name="realtor-email"
              placeholder="info@zylusgroup.com"
              className="input-1"
              value={rMail}
              onChange={(e) => setRMail(e.target.value)}
            />
            <label htmlFor="realtor-number">Realtor's Phone Number</label>
            <input
              type="text"
              name="realtor-number"
              placeholder="08012345678"
              className="input-1"
              value={rPhone}
              onChange={(e) => setRPhone(e.target.value)}
            />
            <div className="btn-cont">
              <button className="btn prev">Back</button>
              <button type="submit" className="btn sBtn">
                Submit
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </form>
    </div>
  );
}
function PdssForm() {
  const [country, setCountry] = useState(null);
  const [cfName2, setCfName2] = useState("");
  const [cEmail2, setCEmail2] = useState("");
  const [cPhone2, setCPhone2] = useState("");
  const [cDOB2, setCDOB2] = useState("");
  const [cMS2, setCMS2] = useState("");
  const [cGender2, setCGender2] = useState("");
  const [cOrigin2, setCOrigin2] = useState("");
  const [invested2, setInvested2] = useState("");
  const [acName2, setAcName2] = useState("");
  const [duration2, setDuration2] = useState("");
  const [uorM2, setUorM2] = useState("");
  const [passport2, setPassport2] = useState("");
  const [eofP2, setEofP2] = useState("");
  const [narration, setNarration] = useState("");
  const [ID2, setID2] = useState("");
  const [appDate2, setAppDate2] = useState("");
  const [rCID2, setRCID2] = useState("");
  const [rFN2, setRFN2] = useState("");
  const [rMail2, setRMail2] = useState("");
  const [rPhone2, setRPhone2] = useState("");
  const pdssSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("pussy");
      fetch("/pdss_mail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cfName2,
          cEmail2,
          cPhone2,
          cDOB2,
          cMS2,
          cGender2,
          cOrigin2,
          invested2,
          acName2,
          duration2,
          uorM2,
          passport2,
          eofP2,
          narration,
          ID2,
          appDate2,
          rCID2,
          rFN2,
          rMail2,
          rPhone2,
        }),
      })
        .then((response) => response.json())
        .then((text) => console.log(text))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
    setCfName2("");
    setCEmail2("");
    setCPhone2("");
    setCDOB2("");
    setCMS2("");
    setCGender2("");
    setCOrigin2("");
    setInvested2("");
    setAcName2("");
    setDuration2("");
    setUorM2("");
    setPassport2("");
    setEofP2("");
    setNarration("");
    setID2("");
    setAppDate2("");
    setRCID2("");
    setRFN2("");
    setRMail2("");
    setRPhone2("");
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
    <div className="side2">
      <form className="member-form" onSubmit={pdssSubmit}>
        <Swiper
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
        >
          <SwiperSlide className="part1">
            <div className="form-text">
              <h2>Property Development Saving Scheme</h2>
              <p>
                This information is only used to improve your Zylus Elite
                Experience, we won't share or communicate your data to any third
                party.
              </p>
            </div>

            <label htmlFor="name">Client’s Full Name *</label>
            <input
              type="text"
              name="name"
              placeholder="John Snow"
              required
              className="input-1"
              value={cfName2}
              onChange={(e) => setCfName2(e.target.value)}
            />
            <label htmlFor="member-email">Client’s Email Address *</label>
            <input
              type="email"
              name="member-email"
              placeholder="info@zylusgroup.com"
              required
              className="input-1"
              value={cEmail2}
              onChange={(e) => setCEmail2(e.target.value)}
            />
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+2348000000000"
              className="input-1"
              value={cPhone2}
              onChange={(e) => setCPhone2(e.target.value)}
            />
            <label htmlFor="dob">Client’s Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="input-1"
              value={cDOB2}
              onChange={(e) => setCDOB2(e.target.value)}
            />
            <label htmlFor="m-status">Client’s Marital Status *</label>
            <select
              name="m-status"
              required
              value={cMS2}
              onChange={(e) => setCMS2(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="single">Single</option>
              <option value="Married">Married</option>
              <option value="undisclosed">Prefer Not To Say</option>
            </select>
            <label htmlFor="gender">Gender *</label>
            <select
              name="gender"
              required
              value={cGender2}
              onChange={(e) => setCGender2(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="undisclosed">Prefer Not To Say</option>
            </select>
            <label htmlFor="country">Country *</label>
            <select
              name="country"
              required
              value={cOrigin2}
              onChange={(e) => setCOrigin2(e.target.value)}
            >
              <option value="undisclosed">Select Your Country</option>
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
            <div className="s-cont">
              <button className="btn sBtn next">Next Step</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="part2">
            <div className="form-text">
              <h2>Property Development Saving Scheme</h2>
              <p>
                This information allows us to personalize your zylus elite
                experience and to provide relevant tips and content.
              </p>
            </div>
            <label htmlFor="invested">Amount Invested *</label>
            <input
              type="text"
              name="invested"
              required
              className="input-1"
              value={invested2}
              onChange={(e) => setInvested2(e.target.value)}
            />
            <label htmlFor="account-name">Account Name *</label>
            <input
              type="text"
              name="account-name"
              required
              className="input-1"
              value={acName2}
              onChange={(e) => setAcName2(e.target.value)}
            />

            <div className="radio-cont">
              <h5>Duration</h5>
              <label htmlFor="duration">
                <input
                  type="radio"
                  name="duration"
                  value={duration2}
                  onChange={(e) => setDuration2(e.target.value)}
                />
                12 Months
              </label>
            </div>
            <div className="radio-cont">
              <h5>Upfront or Maturity</h5>
              <label htmlFor="upfront">
                <input
                  type="radio"
                  name="u/m"
                  value={uorM2}
                  onChange={(e) => setUorM2(e.target.value)}
                />
                Upfront- 50% payable ( 28% for 12 months)
              </label>
              <label htmlFor="maturity">
                <input
                  type="radio"
                  name="u/m"
                  value={uorM2}
                  onChange={(e) => setUorM2(e.target.value)}
                />{" "}
                Maturity ( 32% for 12 months)
              </label>
            </div>
            <div className="uploads">
              <label htmlFor="passport" className="bold">
                Upload a Passport Photograph *
              </label>
              <label htmlFor="passport" className="upload">
                <FiUpload /> Add File
                <input
                  type="file"
                  name="passport"
                  accept="image/*"
                  id="passport"
                  onChange={(e) => setPassport2(e.target.files[0])}
                />
              </label>
              <label htmlFor="evidence" className="bold">
                Upload Evidence of payment here
              </label>
              <label htmlFor="payment-evidence" className="upload">
                <FiUpload /> Add File
                <input
                  type="file"
                  accept="image/*"
                  name="payment-evidence"
                  id="payment-evidence"
                  onChange={(e) => setEofP2(e.target.files[0])}
                />
              </label>
              <label htmlFor="narration" className="bold">
                Narration ( kindly specify the details of amount paid, i,e name
                of product, name or email address) *
              </label>
              <textarea
                name="narration"
                cols="30"
                rows="1"
                placeholder="Your Answer"
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
              ></textarea>
              <label htmlFor="valid-id" className="bold">
                Upload a valid ID card
              </label>
              <label htmlFor="valid-id" className="upload" id="file">
                <FiUpload /> Add File
                <input
                  type="file"
                  accept="image/*"
                  name="valid-id"
                  id="valid-id"
                  onChange={(e) => setID2(e.target.files[0])}
                />
              </label>
            </div>
            <label htmlFor="app-date">Application Date *</label>
            <input
              type="date"
              name="app-date"
              className="input-1"
              value={appDate2}
              onChange={(e) => setAppDate2(e.target.value)}
            />
            <div className="accept">
              <div className="checkbox">
                <label htmlFor="checkbox">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  Pls confirm you have read and understood the FAQ.
                  https://www.zylushomes.com/real-estate-cash-back-faq/) *
                </label>
              </div>
            </div>
            <div className="btn-cont">
              <button className="btn prev">Back</button>
              <button className="btn sBtn next">Next Step</button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="part3">
            <div className="form-text">
              <h2>Property Development Saving Scheme</h2>
              <p>
                This information allows us to personalize your zylus elite
                experience and to provide relevant tips and content.
              </p>
            </div>
            <label htmlFor="realtor-cid">Realtor's CID</label>
            <input
              type="number"
              name="realtor-cid"
              placeholder="1233444"
              className="input-1"
              value={rCID2}
              onChange={(e) => setRCID2(e.target.value)}
            />
            <label htmlFor="realtor-name">Realtor's Full Name</label>
            <input
              type="text"
              name="realtor-name"
              placeholder="John Doe"
              className="input-1"
              value={rFN2}
              onChange={(e) => setRFN2(e.target.value)}
            />
            <label htmlFor="realtor-email">Realtor's Email</label>
            <input
              type="email"
              name="realtor-email"
              placeholder="info@zylusgroup.com"
              className="input-1"
              value={rMail2}
              onChange={(e) => setRMail2(e.target.value)}
            />
            <label htmlFor="realtor-number">Realtor's Phone Number</label>
            <input
              type="text"
              name="realtor-number"
              placeholder="08012345678"
              className="input-1"
              value={rPhone2}
              onChange={(e) => setRPhone2(e.target.value)}
            />
            <div className="btn-cont">
              <button className="btn prev">Back</button>
              <button type="submit" className="btn sBtn">
                Submit
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </form>
    </div>
  );
}
export default Member;
