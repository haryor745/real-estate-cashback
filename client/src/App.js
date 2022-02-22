import React, { useState } from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Contact from "./Contact.js";
import Member from "./Member.js";
import Home from "./Home.js";
import Partner from "./Partner.js";
import About from "./About.js";
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
        <Route
          path="/contact"
          element={<Contact setContent={setContent} />}
        ></Route>
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
          path="/real-estate"
          element={<RealEstate setContent={setContent} />}
        ></Route>
        <Route path="/pdss" element={<PDSS setContent={setContent} />}></Route>
      </Routes>
      <Footer setContent={setContent} />
    </div>
  );
}
export default App;
