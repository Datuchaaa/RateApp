import React, { useState } from "react";
import "./Home.scss";
import thenksImage from "../Images/thenksImage.png";

const RateApp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inputValue, setInputValue] = useState(0);
  const [clicked, setClicked] = useState(false);
  const style = clicked ? { backgroundColor: "#7C8798", color: "black" } : {};

  const handleSubmit = () => {
    setIsSubmitted(true);
  };
  const handleClickNumber = (number) => {
    console.log("click", { number });
    setInputValue(number);
    setClicked(!clicked);
  };

  return (
    <div>
      <section className="home-section">
        {!isSubmitted ? (
          <div className="rate-app">
            <div className="star-wrapper">
              <i className="fas fa-star"></i>
            </div>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="numbers" value={inputValue}>
              {[1, 2, 3, 4, 5].map((number) => (
                <div
                  // onChange={({ target }) => setInputValue(target.style)}
                  style={style}
                  className="number"
                  key={number}
                  onClick={() => handleClickNumber(number)}
                >
                  {number}
                </div>
              ))}
            </div>
            <button className="sub-btn" onClick={handleSubmit}>
              S U B M I T
            </button>
          </div>
        ) : (
          <div className="rate-app">
            <div className="thanks-wrapepr">
              <img className="thenks-image" src={thenksImage} alt="" />
              <div className="rate-info">
                <p>{`You selected ${inputValue} out of 5`}</p>
              </div>
              <h2>Thank you!</h2>
              <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default RateApp;
