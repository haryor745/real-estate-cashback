import React from "react";
import "./scss/pdss.scss";
import pBox from "./assets/a-box.png";
import investBox from "./assets/invest-box.svg";
import returnsBox from "./assets/returns-box.svg";
import fundsBox from "./assets/funds-box.svg";
import salesBox from "./assets/sales-box.svg";
import profitBox from "./assets/profit-box.svg";
import docBox from "./assets/docbox.svg";
import portfolio from "./assets/portfolio.png";
import benefit from "./assets/benefit.png";
import transaction from "./assets/transaction.png";
function PDSS({ setContent }) {
  return (
    <div
      className="PDSS"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="pdBigText">
        <h1>Property Development Saving Scheme</h1>
        <p>
          Capture and build your real estate investment/portfolio with{" "}
          <span>Real Estate Cashback.</span>
        </p>
        <form>
          <input
            type="email"
            name="estate-email"
            placeholder="info@zylusgroup.com"
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
      <div className="pd-video"></div>
      <div className="pdGrid">
        <div className="pdText">
          <div className="pd-bio">
            <h2>More than an investment.</h2>
            <p>
              PDSS is specially designed for low and medium- income earners who
              are willing to make returns through real estate investment and
              want to save towards owning or developing a property.
            </p>
          </div>
          <div className="pd-part">
            <div className="img-guide">
              <img src={investBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Invest</h4>
              <p>
                PDSS allows you toinvest a minimum of N20, 000 within the space
                of 12 months and get both your invested amount and ROI.
              </p>
            </div>
          </div>
          <div className="pd-part">
            <div className="img-guide">
              <img src={returnsBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Returns</h4>
              <p>
                Profit and capital entrusted in properties is payable at the
                trading period. The profit is pegged at 25% for 12months
                duration.
              </p>
            </div>
          </div>
          <div className="pd-part">
            <div className="img-guide">
              <img src={fundsBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Investment Security</h4>
              <p>
                Insurance cover on monthly contribution and funds invested are
                secured generally.
              </p>
            </div>
          </div>
        </div>
        <div className="pdImg1"></div>
      </div>
      <div className="pdGrid">
        <div className="pdImg2"></div>
        <div className="pdText pdText2">
          <div className="pd-bio">
            <h2>Get multiple interest on investment.</h2>
            <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas.
            </p>
          </div>
          <div className="pd-part">
            <div className="img-guide">
              <img src={profitBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Maturity Payment</h4>
              <p>
                Maturity Payment is payable in less than 48hrs, upon
                confirmation that the investment does not want to be rolled
                over.
              </p>
            </div>
          </div>
          <div className="pd-part">
            <div className="img-guide">
              <img src={salesBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Investment Rollover</h4>
              <p>
                Investment proceeds can be rolled over for another year as the
                case may be. There are significant discount given on roll over
                at times too.
              </p>
            </div>
          </div>
          <div className="pd-part">
            <div className="img-guide">
              <img src={docBox} alt="box" />
            </div>
            <div className="lText">
              <h4>Required Documents</h4>
              <p>
                The following are the documents required when applying for PDSS:
                • Fill the form. <br />• Attach passport photograph. <br />•
                Attach valid I.D. card. <br />• Evidence of Payment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pd-trio">
        <div className="pd-trio-text">
          <h2>Get Inspired</h2>
          <p>Here's how Real Estate Cash Back helps you.</p>
        </div>
        <div className="pd-trio-grid">
          <div className="pd-block">
            <img className="block-img" src={transaction} alt="transaction" />
            <h4>Ease of Transaction</h4>
            <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p>
          </div>
          <div className="pd-block">
            <img className="block-img" src={portfolio} alt="portfolio" />
            <h4>Great Investment Portfolio</h4>
            <p>
              Create the way you want with what you want. Paper adapts to the
              way your team captures ideas
            </p>
          </div>
          <div className="pd-block">
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
          placeholder="info@zylusgroup.com"
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

export default PDSS;
