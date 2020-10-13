import React from "react";

import SiteDescription from "./siteDescription/siteDescription";
import GetJokes from "./jokes/getJokes";

export default function () {
  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__hero__site-description-wrapper">
          <SiteDescription className="home__hero__site-description-wrapper__card" />
        </div>
      </div>
      <div className="home__jokes">
        <GetJokes className="home__jokes__data__card" />
      </div>
    </div>
  );
}
