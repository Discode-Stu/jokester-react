import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import Jokes from "./jokes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GetJokes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.addJoke();
  }

  render() {
    const jokes = this.props.jokes;
    const renderJokes = jokes.length ? (
      jokes.map((joke) => {
        return <Jokes {...joke} key={joke.id} />;
      })
    ) : (
      <div className="loading">
        <div className="loading__message">Loading...</div>
        <FontAwesomeIcon className="loading__disc" icon="compact-disc" spin />
      </div>
    );

    return <div className="home__jokes__data">{renderJokes}</div>;
  }
}

function mapStateToProps(state) {
  return {
    jokes: state.jokesReducer.jokes,
  };
}

export default connect(mapStateToProps, actions)(GetJokes);
