import React, { useState } from "react";
import "./scss/help.scss";
import mail from "./assets/email.png";
import phone from "./assets/phone-call.png";
import location from "./assets/location.png";
import facebook from "./assets/facebook 1.png";
import instagram from "./assets/instagram 1.png";
import whatsapp from "./assets/whatsapp.png";
import linkedin from "./assets/linkedin 1.png";
import { BsArrowRight } from "react-icons/bs";
function Contact({ setContent }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [cEmail, setCEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [check, setCheck] = useState("");
  const [check1, setCheck1] = useState(false);
  const contactSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("pussy");
      fetch("/contact_mail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((response) => response.json())
        .then((text) => console.log(text))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
    setName("");
    setEmail("");
    setMessage("");
    alert("Form submitted successfully.");
  };
  const newsletterSubmit = (e) => {
    e.preventDefault();
    try {
      console.log("pussy");
      fetch("/newsletter", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNo,
          cEmail,
        }),
      })
        .then((response) => response.json())
        .then((text) => console.log(text))
        .catch((error) => console.error(error));
    } catch (error) {
      console.log(error);
    }
    setCEmail("");
    setPhoneNo("");
    setCheck1(false);
    alert("Form submitted successfully.");
  };
  return (
    <>
      <div
        className="contactCont"
        onMouseOver={() => {
          setContent("");
        }}
      >
        <div className="contactGrid">
          <div className="cGrid1">
            <div className="cText">
              <h2>Reach out to us</h2>
              <p>We would love to hear from you.</p>
            </div>
            <div className="cInfo">
              <p>
                <span>
                  <img src={mail} alt="email" />
                </span>
                info@realestatecashbackltd.com
              </p>
              <p>
                <span>
                  <img src={location} alt="location" />
                </span>
                168, Awolowo Road, Ikoyi Lagos.
              </p>
              <p>
                <span>
                  <img src={phone} alt="phone" />
                </span>
                +234 90 3332 4444
              </p>
            </div>
          </div>
          <form className="cGrid2" onSubmit={contactSubmit}>
            <div className="input1">
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="input2">
              <input
                type="email"
                placeholder="info@realestatecshbackltd.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input3">
              <textarea
                cols="30"
                rows="10"
                placeholder="Message"
                value={message}
                required
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <button className="contact-btn" type="submit">
              Lets's talk
              <span>
                <BsArrowRight />
              </span>
            </button>
          </form>
        </div>
        <div className="contactSocial">
          <a href="#" className="item1">
            <span>
              <img src={whatsapp} alt="whatsapp" />
            </span>
            Whatsapp
          </a>
          <a href="#" className="item1">
            <span>
              <img src={facebook} alt="fb" />
            </span>
            Facebook
          </a>
          <a href="#" className="item1">
            <span>
              <img src={instagram} alt="ig" />
            </span>
            Instagram
          </a>
          <a href="#" className="item1">
            <span>
              <img src={linkedin} alt="linkedin" />
            </span>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="newsCont">
        <div className="news">
          <div className="nText">
            <h2>
              Receiving daily updates from us actually increases your chances of
              getting topnotch services.
            </h2>
            <p>
              We definitely cannot wait to send you more offers about our
              products.
            </p>
          </div>
          <form className="cInputs" onSubmit={newsletterSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="inputEmail"
              required
              value={cEmail}
              onChange={(e) => {
                setCEmail(e.target.value);
              }}
            />
            <input
              className="inputTel"
              type="tel"
              name="phone"
              placeholder="Phone (Include country code)"
              required
              value={phoneNo}
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
            <div className="kk">
              <input
                type="checkbox"
                name="subscribe"
                id="subcribe"
                value={check}
                checked={check1}
                onChange={(e) => {
                  setCheck(e.target.value);
                  setCheck1(!check1);
                }}
              />
              <label htmlFor="subscribe">
                I agree to recieve other communication from Real Estate Cash
                Back Cooperative.
              </label>
            </div>
            <button type="submit" className="contact-btn">
              Send me mails <BsArrowRight />{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
