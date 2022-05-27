import React, { useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Help from "./Help.js";
import Member from "./Member.js";
import Home from "./Home.js";
import Partner from "./Partner.js";
import About from "./About.js";
import Gallery from "./Gallery";
import TargetSavings from "./TargetSavings";
import Faqs from "./Faqs";
import Management from "./Management";
import { Route, Routes } from "react-router-dom";
import "./scss/header.scss";
import RealEstate from "./RealEstate.js";
import PDSS from "./PDSS.js";
function App() {
  const [content, setContent] = useState("");
  return (
    <div className="App">
      <Header content={content} setContent={setContent} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setContent={setContent} />}
        ></Route>
        <Route path="/help" element={<Help setContent={setContent} />}></Route>
        <Route
          path="/member"
          element={<Member setContent={setContent} />}
        ></Route>
        <Route
          path="/partner"
          element={<Partner setContent={setContent} />}
        ></Route>
        <Route
          path="/about"
          element={<About setContent={setContent} />}
        ></Route>
        <Route
          path="/gallery"
          element={<Gallery setContent={setContent} />}
        ></Route>
        <Route
          path="/real-estate"
          element={<RealEstate setContent={setContent} />}
        ></Route>
        <Route path="/pdss" element={<PDSS setContent={setContent} />}></Route>
        <Route
          path="/target-savings"
          element={<TargetSavings setContent={setContent} />}
        ></Route>
        <Route
          path="/management"
          element={<Management setContent={setContent} />}
        ></Route>
        <Route path="/faqs" element={<Faqs setContent={setContent} />}></Route>
      </Routes>
      <Footer setContent={setContent} />
    </div>
  );
}
export default App;
