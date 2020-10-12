import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

import {
  addProfileJokeToFirestore,
  addProfileJoke,
  addJoke,
} from "../../actions";

class Jokes extends Component {
  handleJokesOnClick = (id) => {
    this.props.addProfileJoke(id);
    console.log("firestore state from onClick", this.props.profileJokes);
    console.log("handleProfileJOkes1111", this.props.profileJokes);
    return id;
  };

  render() {
    const { id, title, content, uid } = this.props;
    return (
      <div key={id} className="cards">
        <div className="cards__front">
          <div className="cards__front__title">{title}</div>
          <div>
            <img
              className="cards__front__jester"
              src={require("./../../../src/images/jesterGirl.png")}
            />
            <div className="cards__front__jokester">Jokester</div>
          </div>
        </div>
        <div className="cards__back">
          <div className="cards__back__content">{content}</div>
          {uid ? (
            <button
              className="cards__back__button"
              onClick={() => this.handleJokesOnClick(id)}
            >
              Add Joke to Profile
            </button>
          ) : (
            <img
              className="cards__back__content__jester"
              src={require("./../../../src/images/jesterGirl.png")}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    jokes: state.jokesReducer.jokes,
    profileJokes: state.firestore.ordered.profileJokes,
    uid: state.firebase.auth.uid,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProfileJokeToFirestore: (profileJoke) =>
      dispatch(addProfileJokeToFirestore(profileJoke)),
    addProfileJoke: (profileJoke) => dispatch(addProfileJoke(profileJoke)),
    addJoke: (jokes) => dispatch(addJoke(jokes)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "profileJokes",
    },
  ])
)(Jokes);
