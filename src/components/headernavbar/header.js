import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
                <div className='header'>
                    <img className='header__image-jester' src={ require('./../../../src/images/jesterGirl.png') } />
                    <div className='header__title'>
                        <div className='header__title__jokester'>
                            Jokester
                        </div>
                        <div className='header__title__desription'>
                            Practice Telling Jokes!
                        </div>
                    </div>
                </div>
        )
    }
}

export default Header;