// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import fire from '../config/fire'

// const LogoutButton = () => {
//   const { logout } = useAuth0();

//   return (
//     <button onClick={() => logout({ returnTo: "http://127.0.0.1:3000/sign-in" })}>
//       Log Out
//     </button>
//   );
// };

// export default LogoutButton;

import React from 'react';
import fire from '../config/fire';
import history from '../../history';

class Logout extends React.Component {

  logout() {
    fire.auth().signOut();
    history.push('/login')
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}

export default Logout;