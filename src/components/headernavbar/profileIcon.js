import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileIcon = () => {
  const { isAuthenticated } = useAuth0();


  return (
    isAuthenticated ? (
        <div className="nav-link-wrapper">
          <NavLink  className='nav-link-wrapper__link' exact to="/profile" activeClassName="nav-link-active">
            <FontAwesomeIcon className='fas' title='Profile' icon="address-card"/>
          </NavLink>
        </div>
    ) : (null)

  );
};

export default ProfileIcon;