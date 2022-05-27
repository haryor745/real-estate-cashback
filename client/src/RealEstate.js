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
        <h1>Real Estate Cashback</h1>
        <p>
          Capture and build your real estate investment/portfolio with{" "}
          <span>Real Estate Cashback.</span>
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
              Cashback allows you to put in the right amount, at the right time,
              to meet your financial goals through generated profit on capital
              put into property holding for the specified duration.
            </p>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={investBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Invest</h4>
              <p>
                Real estate is known to appreciate in value and holding a
                property for duration for the purpose of resale definitely
                guarantees profit.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={returnsBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Returns</h4>
              <p>
                Profit and capital entrusted in land is payable at the trading
                period. The profit is pegged at 32% for 12months duration.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={fundsBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Funds Security</h4>
              <p>
                Partnering with us gives you the assurance that your capital put
                into property trading is secured because we are intentional
                about upholding the ethics of our business; our reputation
                precedes us.
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
              <h4>Profit Maximization.</h4>
              <p>
                It is a Real Estate trading initiative that involves the
                acquisition and development of a large expanse of land for
                building, ownership, and profit maximization.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={salesBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Sales Rollover</h4>
              <p>
                Sales proceeds can be rolled over for another property flipping
                tenure on the same property or used to purchase any other estate
                property for the same duration.
              </p>
            </div>
          </div>
          <div className="part">
            <div className="img-guide">
              <img src={proofBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Proof of Investment</h4>
              <p>
                Upon entrusting us with your funds for property trading, clients
                get: <br />
                • Receipt of payment <br />
                • Deed of Agreement <br />• Portal Access by the client to cash
                out investment
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
            <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p>
          </div>
          <div className="block">
            <img className="block-img" src={portfolio} alt="portfolio" />
            <h4>Great Investment Portfolio</h4>
            <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p>
          </div>
          <div className="block">
            <img className="block-img" src={benefit} alt="benefit" />
            <h4>Mutual Benefits</h4>
            <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p>
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
