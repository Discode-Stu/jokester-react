import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

import { removeProfileJoke } from "../../actions";

const Profile = ({
  profileJokes,
  removeProfileJoke,
  email,
  timeLastLoggedIn,
  timeCreated,
}) => {
  console.log("hello from Profile", profileJokes);

  const handleRemove = (profileJoke) => {
    removeProfileJoke(profileJoke);
  };

  const handleSliceEmail = () => {
    const sliceEmail =
      email.charAt(0).toUpperCase() + email.slice(1).split("@")[0];
    return sliceEmail;
  };
  const handleTimeLastLoggedIn = () => {
    const lastLogged = moment(timeLastLoggedIn, "x").format("llll");
    return lastLogged;
  };
  const handleTimeCreated = () => {
    const memberSince = moment(timeCreated, "x").format("llll");
    return memberSince;
  };

  return (
    <div className="home__jokes profile-wrapper ">
      <div className="home__jokes__data profile-container">
        <div className="cards profile-welcome-card">
          <div className="cards__front profile-welcome-card__front">
            <div className="profile-welcome-card__front__welcome">
              Welcome {handleSliceEmail()}!
            </div>
            <img
              className="cards__front__jester profile-welcome-card__front__jester"
              src={require("./../../../src/images/jesterGirl.png")}
            />
            <div className="cards__front__jokester profile-welcome-card__front__jokester">
              Jokester
            </div>
          </div>
          <div className="cards__back profile-welcome-card__back">
            <div className="profile-welcome-card__back__message">
              <ul>User Name: {handleSliceEmail()}</ul>
              <ul>Member since: {handleTimeCreated()}</ul>
              <ul>
                The last time you logged in:{handleTimeLastLoggedIn()}
                {}
              </ul>
            </div>
          </div>
        </div>
        {profileJokes &&
          profileJokes.map((joke) => (
            <div key={joke.id} className="cards">
              <div className="cards__front">
                <div className="cards__front__title">
                  {joke.profileJoke.title}
                </div>
                <div>
                  <img
                    className="cards__front__jester"
                    src={require("./../../../src/images/jesterGirl.png")}
                  />
                  <div className="cards__front__jokester">Jokester</div>
                </div>
              </div>
              <div className="cards__back">
                <div className="cards__back__content">
                  {joke.profileJoke.content}
                </div>
                <button
                  className="cards__back__button"
                  onClick={() => handleRemove(joke)}
                >
                  Remove Joke
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("profile", state);
  return {
    profileJokes: state.firestore.ordered.profileJokes,
    uid: state.firebase.auth.uid,
    email: state.firebase.auth.email,
    timeCreated: state.firebase.auth.createdAt,
    timeLastLoggedIn: state.firebase.auth.lastLoginAt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProfileJoke: (profileJoke) =>
      dispatch(removeProfileJoke(profileJoke)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "profileJokes",
      where: ["authorId", "==", ownProps.uid],
    },
  ])
)(Profile);
