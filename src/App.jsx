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
          <h1 className="card__leftSideText">Your Results</h1>
          <div className="card__circle">
            <p className="card__result">76</p>
            <p className="card__resultTotal">of 100</p>
          </div>
          <h3 className="card__messageTitle">Great</h3>
          <p className="card__messageSubtitle">
            You performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </div>
      <div className="card__rightSide">
        <p className="card__rightTitle">Summary</p>
        <div className="card__rightContainer">
          {/* card summary */}
          <div className="card__summaryWrapper red">
            <div className="card__summaryLeft ">
              <img src={Reaction} alt="" className="card__summaryIcon" />
              <p className="card__summaryText red-text">Reaction</p>
            </div>
            <div className="card__summaryRight">
              <p className="card__summaryParaText">
                80 <span className="card__summarySpanText"> / 100</span>
              </p>
            </div>
          </div>
          {/* card summary */}
          <div className="card__summaryWrapper yellow">
            <div className="card__summaryLeft ">
              <img src={Memory} alt="" className="card__summaryIcon" />
              <p className="card__summaryText yellow-text">Memory</p>
            </div>
            <div className="card__summaryRight">
              <p className="card__summaryParaText">
                92 <span className="card__summarySpanText">/ 100</span>
              </p>
            </div>
          </div>
          {/* card summary */}
          <div className="card__summaryWrapper green">
            <div className="card__summaryLeft">
              <img src={Verbal} alt="" className="card__summaryIcon" />
              <p className="card__summaryText green-text">Verbal</p>
            </div>
            <div className="card__summaryRight">
              <p className="card__summaryParaText">
                61 <span className="card__summarySpanText"> / 100</span>
              </p>
            </div>
          </div>
          {/* card summary */}
          <div className="card__summaryWrapper blue">
            <div className="card__summaryLeft">
              <img src={Visual} alt="" className="card__summaryIcon" />
              <p className="card__summaryText blue-text">Visual</p>
            </div>
            <div className="card__summaryRight">
              <p className="card__summaryParaText">
                72 <span className="card__summarySpanText"> / 100</span>
              </p>
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
