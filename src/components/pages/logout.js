import React from "react";
import { connect } from "react-redux";

import history from "../../history";

import { signOut } from "../../actions/authActions";
import PageTitle from "../pageTitle/pageTitle";

class Logout extends React.Component {
  logout = () => {
    const { signOut } = this.props;
    signOut();
    history.push("/sign-in");
  };

  render() {
    return (
      <div className="logout">
        <div className="logout__page-title-wrapper">
          <PageTitle
            className="logout__page-title-wrapper__page-title"
            title="Logout"
          />
        </div>
        <div className="logout__button-wrapper">
          <button
            className="logout__button-wrapper__button"
            onClick={this.logout}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};
const mapDistpatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDistpatchToProps)(Logout);
