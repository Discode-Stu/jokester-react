import React, { Component } from 'react';

class Header extends Component {
    render() {
        const { className } = this.props;
        return(
                <div className={`${className} header`}>
                    <img className='header__image-jester' src={ require('./../../../src/images/jesterGirl.png') } />
                    <div className='header__title'>
                        <div className='header__title__jokester'>
                            Jokester
                        </div>
                        <div className='header__title__desription'>
                            Collect Funny Jokes!
                        </div>
                    </div>
                </div>
        )
    }
}

export default Header;