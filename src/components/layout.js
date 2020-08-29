import React, { Component } from 'react';

import Header from './headernavbar/header';
import Navbar from './headernavbar/navbar';
import SiteDescription from './siteDescription/siteDescription';
import Microphone  from './reactMic/reactMic';
import GetJokes from './jokes/getJokes';


class Layout extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        <Navbar />
        <div className='layout__hero' >
          <div className='layout__hero__site-description-wrapper' >
            <SiteDescription className='layout__hero__site-description-wrapper__card' />
          </div>
          <div className='layout__hero__mic'>
            <Microphone />
          </div>
        </div>
        <div className='layout__jokes'>
          <GetJokes className='layout__jokes__data__card' />
        </div>
      </div>
    );
  }
}
export default Layout;