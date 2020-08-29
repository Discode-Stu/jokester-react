import React from 'react';

export default function SiteDescription() {
    return (
        <div className='site-description'>
            <div className='site-description__front'>
                <div className='site-description__front__welcome'>
                    Welcome to Jokester!
                </div>
                <div className='site-description__front__view-directions'>
                    View Directions Under Here!
                </div>
                <img className='site-description__front__jester' src={ require('./../../../src/images/jesterGirl.png') } />
            </div>
            <div className='site-description__back'>
                <p className='site-description__back__text'>
                    Welcome to Jokester, where you get to practice your joke telling skills!
                    Choose one of the many jokes on the back of the cards below. Click the microphone icon to record, and joke away!
                    Click the stop icon to end the recording. Then, play back your joke using the audio player! If you like it, click on the 
                    download cloud to save the recording to your computer! Enjoy! 
                </p>
                <img className='site-description__back__jester' src={ require('./../../../src/images/jesterGirl.png') } />
            </div>
        </div>
    );
}

