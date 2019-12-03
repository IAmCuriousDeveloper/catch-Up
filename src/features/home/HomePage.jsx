import React from "react";

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img className="ui image massive" src="./logo.jpg" alt="logo" />
            <div className="content">Catch-Up</div>
          </h1>
          <h2>Create Meetup in seconds</h2>
          <div
            onClick={() => history.push("/events")}
            className="ui huge white inverted button"
          >
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
