import React, { useState } from "react";
import "./scss/faqs.scss";
import opener from "./assets/opener.png";
import closer from "./assets/closer.png";
const cbArray = [
  {
    id: 1,
    question: "Q1: What is Real Estate CashBack?",
    answer:
      "Real Estate Cashback is a Real Estate trading which allows customers invest/buy into real estate development for the purpose of generating passive income. The profit in percentage is 28% for a period of 12months and 14% for 6months.",
    list: [],
  },
  {
    id: 2,
    question: "Q2: What company manages Real Estate CashBack?",
    answer:
      "Real Estate Cashback is an initiative of Real Estate CashBack Cooperative Society Limited.",
    list: [],
  },
  {
    id: 3,
    question: "Q3: Is real estate cashback a licensed investment?",
    answer:
      "Yes, Real estate cashback is a product of Real Estate CashBack Cooperative Society Limitedduly licensed by the Lagos State Ministry of Commerce, Industry & Cooperative with registration number LSCS 18176.",
    list: [],
  },
  {
    id: 4,
    question: "Q4: How competent is the team behind Real Estate Cashback?",
    answer:
      "Our team are financial experts and real estate professionals that are drivenby the passion to help limit the societal gap between the rich and the poor by creating various investment opportunities for everyone regardless of their social status.",
    list: [],
  },
  {
    id: 5,
    question: "Q5: What will the funds be used for?",
    answer:
      "The funds is invested in developing commercial and residential properties. We also conduct thorough research on locations prone to quick appreciation and buy properties there. With time,we develop these properties, sell-off, and share the profit with you. We invest only in appreciable and tangible asset.",
    list: [],
  },
  {
    id: 6,
    question: "Q6:  Can I invest online?",
    answer: "Yes you can by doing the following:",
    list: [
      "Get the online form",
      "Fill your details",
      "Attach evidence of payment",
      "I.D card and passport",
      "Click submit.",
    ],
  },
  {
    id: 7,
    question: "Q7: Can I invest offline?",
    answer:
      "Yes, you can invest offline by visiting our Head office located at 168, Awolowo road, Ikoyi, Lagos to pick an investment, make payment and collect receipt.",
    list: [],
  },
  {
    id: 8,
    question: "Q8: What is the minimum & maximum unit of investment?",
    answer:
      "The minimum unit is 6.25 Sqm which is currently valued at N500, 000. There is no maximum limit to the number of unit an individual can acquired, depending on the present estate cash back investment. You can buy multiple unit of investment. ",
    list: [],
  },
  {
    id: 9,
    question: "Q9: : What are the document I need to submit?",
    answer: " Evidence of Payment, Valid I.D card, Passport Photograph",
    list: [],
  },
  {
    id: 10,
    question: "Q10: : What document will I get after investing my funds?",
    answer: " Evidence of Payment, Valid I.D card, Passport Photograph",
    list: [
      "Deed of Agreement",
      "Investment Certificate",
      "A Post-Dated Cheque",
      "Insurance Certificate",
      "Insurance: It covers the exact amount of funds a member invested in case of casualties or the death of the members. The beneficiary will get access to the funds invested irrespective of the situation.",
    ],
  },
  {
    id: 11,
    question: "Q11: How Do I know my investment has matured?",
    answer:
      "You will get a notification from us either through email, SMS or a phone call",
    list: [],
  },
  {
    id: 12,
    question: "Q12: How will my investment maturity be paid?",
    answer:
      "You will get a phone call notification from us before the maturity and we will do a transfer to your account.",
    list: [],
  },
  {
    id: 13,
    question: "Q13: Can I get my interest upfront?",
    answer:
      "Yes, but you will be charge 4% of the total interest, then 50% of it will be paid to you.",
    list: [],
  },
  {
    id: 14,
    question: "Q14: How secure is my investment and data?",
    answer:
      "Your information is secure with our payment partners, while your investment with us is secured, insured and guaranteed, also upon maturity of your investment, the invested amount and the profit is to be made available to the member by the company, and the investment can also be paid in form property that worth the invested sum.",
  },
  {
    id: 15,
    question: "Q15: Can I terminate my investment before maturity date?",
    answer:
      "Your information is secure with our payment partners, while your investment with us is secured, insured and guaranteed, also upon maturity of your investment, the invested amount and the profit is to be made available to the member by the company, and the investment can also be paid in form property that worth the invested sum.",
  },
  {
    id: 16,
    question: "Q16: Can I re-invest my funds after maturity? ",
    answer: "Yes you can.",
  },
  {
    id: 17,
    question: "Q17: Who are your partners on this project?",
    answer:
      "All our receiving banks such as GTB are our receiving banks: Guarantee Trust Bank (GTB) - Real Estate Cash Back - 0696547068",
  },
  {
    id: 18,
    question: "Q18: Is there an incentive for this investment",
    answer: "Yes, there is incentive for every member that invest with us",
  },
  {
    id: 19,
    question: "Q19: How do I contact the company for enquires?",
    answer:
      "Our office is located at 168, Awolowo road, Ikoyi Lagos. Email: Realestatecashbackltd@gmail.com - Phone Number: 08145404342",
  },
];
const pssArray = [
  {
    id: 1,
    question: "Q1: What is Property Saving Scheme?",
    answer:
      "It's a saving product specially designed for low and medium-income earners who are willing to make returns through savings. Members save a minimum of twenty-thousand naira (₦20,000) on a monthly basis for a period of one (1) year towards the acquisition of property at the end of the savings duration.",
    list: [],
  },
  {
    id: 2,
    question: "Q2: Why should I save using Property Saving Scheme?",
    answer: "",
    list: [
      "To generate passive income through real estate savings.",
      "Helps you to accumulate funds towards the acquisition of property.",
    ],
  },
  {
    id: 3,
    question: "Q3: What’s the duration of the saving scheme?",
    answer: "You can save for up to 12 months",
    list: [],
  },
  {
    id: 4,
    question: "Q4: How safe and secure is PSS?",
    answer:
      "Your security is our top priority that is why we work with a PCIDSS-compliant payment processor, Paystack to handle your card details which are very safe.",
    list: [],
  },
  {
    id: 5,
    question:
      "Q5: What is the interest rate and duration for Property Saving Scheme?",
    answer:
      "The interest rate for Property Saving Scheme is 15% interest on annual savings calculated on a pro-rata basis for a duration of 12 months which amounts to one year.",
    list: [],
  },
  {
    id: 6,
    question: "Q6: How do I monitor my savings?",
    answer:
      "You can monitor your savings through our safe and secure portal system. Upon registration as a member of the cooperative scheme, you will be provided with details (Username and Password) which allows you to monitor your savings and dividend every month until maturity. At maturity, both the total contributed and the dividend remains payable to every member. ",
    list: [],
  },
  {
    id: 7,
    question:
      "Q7: What’s the minimum amount a member of the cooperative can save?",
    answer: "The minimum amount a member can save is N20, 000 every month.",
    list: [],
  },
  {
    id: 8,
    question: "Q8: How secure is my savings?",
    answer:
      "All funds committed to the cooperative is safe as they are used for the benefit of the members particularly where financial venture in form of real estate trading is concerned. In this case, the cooperative engage in the acquisition and development of a large expanse of land for building, ownership, and profit maximization. In addition to the above, we partner with CORDRUS CAPITAL, a sec licensed organisation with Fidelity Bond insurance coverage with Axamansard to invest members’ savings and investment with return which would be shared with members as dividend",
    list: [],
  },
  {
    id: 9,
    question:
      "Q9: Can the subscription to the savings scheme be terminated by either of the two parties?",
    answer:
      "Yes, a subscription to the saving scheme can be terminated, but this can only be done after aminimum duration of 3 months, with 2 months notification either by mail or physical letter. NOTE: Termination of subscription attracts a charge of 15% on savings. ",
    list: [],
  },
  {
    id: 10,
    question: "Q10: Can corporate organizations become members?",
    answer: "Yes, corporate organization can become members.",
    list: [],
  },
  {
    id: 11,
    question:
      "Q11: Can I use my saving and interest to acquire property (ies)? ",
    answer: "Yes, you can",
    list: [],
  },
];
function Faqs({ setContent }) {
  const [active, setActive] = useState("CB limited");
  const [show, setShow] = useState(false);
  return (
    <div
      className="faqs"
      onMouseOver={() => {
        setContent("");
      }}
    >
      <div className="faqs-grid">
        <div className="faqs-selector">
          <div className="selector">
            <button
              className={`faqsBtn ${active === "CB limited" && "set"}`}
              onClick={() => {
                setActive("CB limited");
              }}
            >
              Real Estate Cashback Limited
            </button>
            <button
              className={`faqsBtn ${active === "cashback" && "set"}`}
              onClick={() => {
                setActive("cashback");
              }}
            >
              Real Estate Cashback
            </button>
            <button
              className={`faqsBtn ${active === "pss" && "set"}`}
              onClick={() => {
                setActive("pss");
              }}
            >
              Property Saving Scheme
            </button>
            <button
              className={`faqsBtn ${active === "target" && "set"}`}
              onClick={() => {
                setActive("target");
              }}
            >
              Target Savings
            </button>
          </div>
        </div>
        <div className="faqsContent">
          {active === "cashback" && (
            <div className="faqsInner">
              <div className="head">
                <h3>REAL ESTATE CASHBACK FREQUENTLY ASKED QUESTIONS </h3>
              </div>
              {cbArray.map(({ question, answer, list }) => {
                // const [show, setShow] = useState(false);
                return (
                  <Accordion question={question} answer={answer} list={list} />
                );
              })}
            </div>
          )}
          {active === "CB limited" && (
            <div className="faqsInner">
              <div className="head">
                <h3>
                  REAL ESTATE CASHBACK LIMITED FREQUENTLY ASKED QUESTIONS{" "}
                </h3>
              </div>
              {cbArray.map(({ question, answer, list }) => {
                // const [show, setShow] = useState(false);
                return (
                  <Accordion question={question} answer={answer} list={list} />
                );
              })}
            </div>
          )}
          {active === "pss" && (
            <div className="faqsInner">
              <div className="head">
                <h3>PROPERTY SAVINGS SCHEME FREQUENTLY ASKED QUESTIONS </h3>
              </div>
              {pssArray.map(({ question, answer, list }) => {
                // const [show, setShow] = useState(false);
                return (
                  <Accordion question={question} answer={answer} list={list} />
                );
              })}
            </div>
          )}
          {active === "target" && (
            <div className="faqsInner">
              <div className="head">
                <h3>TARGET SAVINGS CASHBACK FREQUENTLY ASKED QUESTIONS </h3>
              </div>
              <div className="accordion">
                <div className="shown" onClick={() => setShow(!show)}>
                  <p>Q1: TARGET SAVINGS?</p>
                  <div>
                    <img src={show ? closer : opener} alt="open/close" />
                  </div>
                </div>
                {show && (
                  <div className="hidden">
                    Target Saving is a product of Real Estate Cashback Housing
                    Cooperative Society Limited. It is an innovative savings
                    product designed to help members of the Real Estate Cashback
                    Housing Cooperative Society LTD save towards a goal. <br />{" "}
                    <br /> Target Savings is a real estate saving product that
                    allows members of the cooperative set a saving goal and
                    saving schedule to meet specific financial target. It offers
                    members the convenience of savings and maximizing their
                    investments, whilst having flexible access to their account
                    at any time. <br /> <br />
                    This saving product allows members choose their preferred
                    saving schedule giving them flexibility over their savings.{" "}
                    <br /> <br /> As a cooperative society, funds saved by
                    members under the Target Saving will be invested in multiple
                    markets including real estate, bonds, Government stock etc
                    to enable members earn 10% return on their annual savings
                    calculated on a pro rata basis. <br /> <br />
                    At maturity, the total savings contributed and the 10%
                    interest is payable. <br /> <br /> As a cooperative, we are
                    registered, licensed and regulated by the Lagos State
                    Ministry of Commerce, Industry and Cooperative (LSCS 18176).{" "}
                    <br /> <br /> <p className="bold">Product Features</p>{" "}
                    <ul>
                      <li>Automated savings.</li>
                      <li>Target Savings.</li>
                      <li>Flexible saving duration.</li>
                      <li>Easy savings top-up.</li>
                      <li>Easy withdrawal and deposit.</li>
                      <li>
                        Benefit is payable at the end of tenure Maturity payment
                        is the total amount contributed plus the return on
                        investment.
                      </li>
                      <li>Maturity payment is payable within 72 hours.</li>
                    </ul>
                    <br />
                    <p className="bold">Requirements</p>
                    <ul>
                      <li>Duly completed form</li>
                      <li>
                        Passport photograph (Not more than six months old)
                      </li>
                      <li>Valid I.D. card</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Accordion = ({ question, answer, list }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion">
      <div className="shown" onClick={() => setIsActive(!isActive)}>
        <p>{question}</p>
        <div>
          <img src={isActive ? closer : opener} alt="open/close" />
        </div>
      </div>
      {isActive && (
        <div className="hidden">
          {answer && <p>{answer}</p>}
          {list && (
            <ul>
              {list.map((item) => {
                return <li key={new Date().getMilliseconds()}>{item}</li>;
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Faqs;

{
  /* <div className="accordion" key={item.id}>
  <div className="shown" onClick={() => setShow(!show)}>
    <p>{item.question}</p>
    <div>
      
    </div>
  </div>
  {show && <div className="hidden">{item.answer}</div>}
</div>; */
}
