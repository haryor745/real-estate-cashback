import React from "react";
import { Link } from "react-router-dom";
import "./scss/realestate.scss";
import investBox from "./assets/invest-box.svg";
import returnsBox from "./assets/returns-box.svg";
import fundsBox from "./assets/funds-box.svg";
import salesBox from "./assets/sales-box.svg";
import profitBox from "./assets/profit-box.svg";
import proofBox from "./assets/proof-box.svg";
import portfolio from "./assets/portfolio.png";
import benefit from "./assets/benefit.png";
import transaction from "./assets/transaction.png";
function RealEstate({ setContent }) {
  return (
    <div
      className="rEstate"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="eText">
        <h1>Target Savings</h1>
        <p>
          Capture and build your savings portfolio with Target Savings with{" "}
          <span>Real Estate Cashback Cooperative.</span>
        </p>
        <form>
          {/* <input
            type="email"
            name="estate-email"
            placeholder="info@realestatecashbackltd.com"
            required
            onSubmit={(e) => {
              e.preventDefault();
            }}
          /> */}
          <Link to="/member" className="btn">
            Become a Member
          </Link>
        </form>
      </div>
      <div className="rsGrid">
        <div className="rsText">
          <div className="bio">
            <h2>More than an investment.</h2>
            <p>
              Target Savings is an innovative savings platform designed to help
              members of the Real Estate Cashback Housing Cooperative Society
              LTD access savings, wealth growth tools and investment
              opportunities.
            </p>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={investBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Financial Stability</h4>
              <p>
                Target Savings helps you control your impulse spending and
                provides a platform for you to invest in your future for
                financial stability.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={returnsBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Flexible Saving Options</h4>
              <p>
                Choose your preferred savings option; automate your savings,
                save towards a goal and lock your savings for a fixed time.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={fundsBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Investment Security</h4>
              <p>
                All your data is encrypted via SSL and completely safe from
                fraud. All in-app transactions are protected using OTPs to
                prevent hacking and identity theft.
              </p>
            </div>
          </div>
        </div>
        <div className="rsImg1"></div>
      </div>
      <div className="rsGrid">
        <div className="rsImg2"></div>
        <div className="rsText rsText2">
          <div className="bio">
            <h2>Get multiple interest on investment.</h2>
            <p>
              Build your finances with ease with our secured and seamless
              products.
            </p>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={profitBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Maturity Payment</h4>
              <p>
                Target Savings allows you to automate your savings. with
                autosave, you can choose how often you want to save. You can
                also choose the frequency of deductions from your account
                (daily, weekly and monthly).
              </p>
            </div>
          </div>
          {/* <div className="part">
            <div className="img-guide">
              <img src={salesBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Fixed Xave</h4>
              <p>
                With Target Savings you can lock your savings for a fixed
                period. It is designed to restrict your access until maturity.
              </p>
            </div>
          </div> */}
          <div className="part">
            <div className="img-guide">
              <img src={proofBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Save to a Goal</h4>
              <p>
                Target Savings allows you to save towards a goal. Choose
                multiple goals and save towards them daily, weekly and monthly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="trio">
        <div className="trio-text">
          <h2>Get Inspired</h2>
          <p>Here's how Real Estate Cashback helps you.</p>
        </div>
        <div className="trio-grid">
          <div className="block">
            <img className="block-img" src={transaction} alt="transaction" />
            <h4>Ease of Transaction</h4>
            {/* <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p> */}
          </div>
          <div className="block">
            <img className="block-img" src={portfolio} alt="portfolio" />
            <h4>Great Investment Portfolio</h4>
            {/* <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p> */}
          </div>
          <div className="block">
            <img className="block-img" src={benefit} alt="benefit" />
            <h4>Mutual Benefits</h4>
            {/* <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p> */}
          </div>
        </div>
      </div>
      <form className="bottom-form">
        <input
          type="email"
          name="estate-email"
          placeholder="info@realestatecashbackltd.com"
          required
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
        <button type="submit" className="btn">
          Get Started
        </button>
      </form>
    </div>
  );
}

export default RealEstate;
