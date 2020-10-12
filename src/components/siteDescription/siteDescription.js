import React from "react";

export default function SiteDescription() {
  return (
    <div className="site-description">
      <div className="site-description__front">
        <div className="site-description__front__welcome">
          Welcome to Jokester!
        </div>
        <div className="site-description__front__view-directions">
          View Directions Under Here!
        </div>
        <img
          className="site-description__front__jester"
          src={require("./../../../src/images/jesterGirl.png")}
        />
      </div>
      <div className="site-description__back">
        <p className="site-description__back__text">
          Welcome to Jokester! Hover over the joke cards below to reveal a joke!
          Click on the "Add Joke to Profile" button to add your favorite jokes
          to your profile!
        </p>
        <img
          className="site-description__back__jester"
          src={require("./../../../src/images/jesterGirl.png")}
        />
      </div>
    </div>
  );
}
