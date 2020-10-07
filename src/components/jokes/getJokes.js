import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../../actions';


import Jokes from './jokes'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class GetJokes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allJokes: []
        };
        // this.addedJokeToState = this.addedJokeToState.bind(this);
      }

      
    // componentDidMount() {
    //     axios
    //     .get("https://dts-jokester-api.herokuapp.com/jokes")
    //     .then(response => {
    //         this.setState({
    //             allJokes: response.data
        
    //         })

    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
    // }

    // componentWillUnmount() {
    //     this.setState({
    //         data: this.state.data
    //     })
    // }


    // addedJokeToState = (data) => {
    //     this.setState(({
    //         addedJokeToState: [data]

    //     }))

    // }
    // addJokeToState = () => {
    //     const {id} = this.state.allJokes;
    //     axios
    //     .get(`https://dts-jokester-api.herokuapp.com/joke/${id}`)
    //     .then(response => {
    //         // this.setState({
    //         //     addedJoke: response.data
    //         // })
    //         this.setState(state => ({
    //             addedJokeToState: [ ...state.addedJoke, response.data ]
    //         }))
            
    //         console.log('response',response)
    //         console.log('state', this.state.addedJokeToState)
    //         // return (<Profile addedJoke={this.state.addedJoke}></Profile>)
    
    
    //     })
    //     .catch(error => {
    //         console.log(error); 
    //     });
    // }

    componentDidMount() {
        this.props.addJoke()
      }

    renderReduxJokes = () => {
        const jokes = this.props.jokes.map((joke, index) => {
          return (
            <div>
              <li key={index}>{joke.title}</li>
              <li key={index}>{joke.content}</li>
            </div>
    
          )
        })
        return jokes;
      }

    render() {
        const jokes = this.props.jokes
        const renderJokes = jokes.length ? (
        // const { allJokes } = this.state
        // const renderJokes = allJokes.length ? (
            jokes.map((joke) => {
                return (
                    <Jokes {...joke} key={joke.id} /*renderedJoke={joke} /*addedJokeToState={this.addedJokeToState()} */ />
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
                 {renderJokes}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jokes: state.jokesReducer.jokes
    }
}

export default connect(mapStateToProps, actions)(GetJokes);