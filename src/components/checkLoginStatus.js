import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const CheckLoginStatus = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   var lock = new Auth0Lock(
//       'ty82aHR426NOk6mOehBiryz2bRy72jW5',
//       'dev-f2-244jj.us.auth0.com'
//     );


  return (
    
    

    <div>{console.log(isAuthenticated)}</div>
 
    
  );
};

export default CheckLoginStatus;