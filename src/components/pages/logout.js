import React from "react";
import fire from "../config/fire";
import history from "../../history";
import { signOut } from "../../actions/authActions";
import { connect } from "react-redux";

class Logout extends React.Component {
  logout = () => {
    const { signOut } = this.props;
    signOut();
    history.push("/sign-in");
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>You Are Logged In</h1>
        <button onClick={this.logout}>Logout</button>
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
