import React, { Component } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GetJokes extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        };
      }

      componentDidMount() {
        axios
        .get("https://cors-anywhere.herokuapp.com/https://dts-jokester-api.herokuapp.com/jokes")
        .then(response => {
          this.setState({
              data: response.data
          })
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
        const { data } = this.state
        const dataList = data.length ? (
            data.map((joke) => {
                return (
                    <div key={joke.id} className='cards'>
                        <div className='cards__front'>
                            <div className='cards__front__title'>
                            {joke.title}
                            </div>
                            <div>
                                <img className='cards__front__jester' src={ require('./../../../src/images/jesterGirl.png') } />
                                <div className='cards__front__jokester'>Jokester</div>
                            </div>
                        </div>
                        <div className='cards__back'>
                            <div className='cards__back__content' >
                                {joke.content}
                            </div>
                            <img className='cards__back__content__jester' src={ require('./../../../src/images/jesterGirl.png') } />
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='loading'>
                <div className="loading__message">Loading...</div>
                <FontAwesomeIcon className='loading__disc' icon="compact-disc" spin />
            </div>
        )

        return (
            <div className='home__jokes__data'>
                 {dataList}
            </div>
        )
    }
}

export default GetJokes;