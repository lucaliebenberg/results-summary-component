import { useState } from "react";
import "./App.css";

// imports
import Reaction from "../src/assets/images/icon-reaction.svg";
import Memory from "../src/assets/images/icon-memory.svg";
import Verbal from "../src/assets/images/icon-verbal.svg";
import Visual from "../src/assets/images/icon-visual.svg";

const App = () => {
  return (
    <div className="App">
      <div className="card__Leftcontainer">
        <div className="card__leftSide">
          <p className="card__leftSideText">Your Results</p>
          <div className="card__circle">
            <p className="card__result">76</p>
            <p className="card__resultTotal">of 100</p>
          </div>
          <h3 className="card__messageTitle">Great</h3>
          <p className="card__messageSubtitle">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
      <div className="card__rightSide">
        <p className="card__rightTitle">Summary</p>
        <div className="card__rightContainer">
          {/* card summary */}
          <div className="card__summaryWrapper red">
            <div className="card__summaryLeft ">
              <img source={Reaction} alt="" />
              <p>Reaction</p>
            </div>
            <div className="card__summaryRight">
              <p>80 / 100</p>
            </div>
          </div>
          {/* card summary */}
          <div className="card__summaryWrapper yellow">
            <div className="card__summaryLeft ">
              <img source={Memory} alt="" />
              <p>Memory</p>
            </div>
            <div className="card__summaryRight">
              <p>92 / 100</p>
            </div>
          </div>
          {/* card summary */}
          <div className="card__summaryWrapper green">
            <div className="card__summaryLeft">
              <img source={Verbal} alt="" />
              <p>Verbal</p>
            </div>
            <div className="card__summaryRight">
              <p>61 / 100</p>
            </div>
          </div>
          {/* card summary */}
          <div className="card__summaryWrapper blue">
            <div className="card__summaryLeft">
              <img source={Visual} alt="" />
              <p>Visual</p>
            </div>
            <div className="card__summaryRight">
              <p>72 / 100</p>
            </div>
          </div>
          <div className="btn__container">
            <a href="#" className="btn__link">
              <p className="btn__linkText">Continue</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
