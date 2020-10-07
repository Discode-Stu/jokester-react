
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import axios from 'axios';
import Profile from "../pages/profile";


class Jokes extends Component {
    constructor(props) {
        super(props)

        this.state = {
             addedJoke: []
        };
        // this.addJokes = this.addJokes.bind(this)
    }

    // componentDidMount() {
    //     this.props.addJoke()
    //   }
  
// const Jokes = props => {
//   const {
//     id,
//     content,
//     title,
//   } = props.jokes;


// addItem(item) {
//     this.setState(state => ({
//       items: [...state.items, item]
//     }));
//   }

    // addJokes = () => {
    //     const {id} = this.props.renderedJoke;
    //     axios
    //     .get(`https://dts-jokester-api.herokuapp.com/joke/${id}`)
    //     .then(response => {
    //         // this.setState({
    //         //     addedJoke: response.data
    //         // })
    //         this.setState(state => ({
    //             addedJoke: [ ...state.addedJoke, response.data ]
    //         }))
            
    //         console.log(response)
    //         // return (<Profile addedJoke={this.state.addedJoke}></Profile>)


    //     })
    //     .catch(error => {
    //         console.log(error); 
    //     });
    // }

    // addJokesToProfile = (data) => {
    //     this.props.addJokeToState(data)
    // }


    // renderJokes = () => {
    //     const jokes = this.props.jokes.map((joke) => {
    //         const {id, title, content} = joke
    //         return (
    //             <div key={id} className='cards'>
    //                 {/* <Profile addedJoke={this.state.addedJoke}></Profile> */}
    //                 <div className='cards__front'>
    //                     <div className='cards__front__title'>
    //                     {title}
    //                     </div>
    //                     <div>
    //                         <img className='cards__front__jester' src={ require('./../../../src/images/jesterGirl.png') } />
    //                         <div className='cards__front__jokester'>Jokester</div>
    //                     </div>
    //                 </div>
    //                 <div className='cards__back'>
    //                     <div className='cards__back__content' >
    //                         {content}
    //                     </div>
    //                     {/* <button className='cards__back__button' onClick={()=>this.addProfileJoke(id)} > Add Joke to profile</button> */}
    //                     {/* <button className='cards__back__button' onClick={()=>console.log(this.state.addedJoke)} > Addstate to profile</button> */}
    //                     {/* <Profile profileJokeId={id} addedJoke={this.state.addedJoke}></Profile> */}

    //                 </div>
    //             </div>
    
    //       )
    //     })
    //     return jokes;
    //   }

    handleJokesOnClick(id) {
        // const {id} = this.props
        this.props.addProfileJoke(id)
        return id
    }

    render() {
        const {id, title, content} = this.props
        return(
            <div key={id} className='cards'>
            {/* <Profile addedJoke={this.state.addedJoke}></Profile> */}
            <div className='cards__front'>
                <div className='cards__front__title'>
                {title}
                </div>
                <div>
                    <img className='cards__front__jester' src={ require('./../../../src/images/jesterGirl.png') } />
                    <div className='cards__front__jokester'>Jokester</div>
                </div>
            </div>
            <div className='cards__back'>
                <div className='cards__back__content' >
                    {content}
                </div>
                <button className='cards__back__button' onClick={ () => this.handleJokesOnClick(id)} > Add Joke to profile</button>
                {/* <button className='cards__back__button' onClick={()=>console.log(this.state.addedJoke)} > Addstate to profile</button> */}
                {/* <Profile profileJokeId={id} addedJoke={this.state.addedJoke}></Profile> */}
            </div>
        </div>
        )
      
    }
};

function mapStateToProps(state) {
    return {
      jokes: state.jokesReducer.jokes
    }
  }
  
  export default connect(mapStateToProps, actions)(Jokes)
  

// export default Jokes;



// import React, { Component } from 'react'

// export default class extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

        // const {id, content, title} = this.props.renderedJoke
        // const {id, content, title} = this.props.jokes
        // const jokes = this.props.jokes
        // const renderJokes = jokes.length ? (
        //     jokes.map((joke) => {
        //         const {id, title, content} = joke
        //         return (
        //             <div key={id} className='cards'>
        //                 {/* <Profile addedJoke={this.state.addedJoke}></Profile> */}
        //                 <div className='cards__front'>
        //                     <div className='cards__front__title'>
        //                     {title}
        //                     </div>
        //                     <div>
        //                         <img className='cards__front__jester' src={ require('./../../../src/images/jesterGirl.png') } />
        //                         <div className='cards__front__jokester'>Jokester</div>
        //                     </div>
        //                 </div>
        //                 <div className='cards__back'>
        //                     <div className='cards__back__content' >
        //                         {content}
        //                     </div>
        //                     {/* <button className='cards__back__button' onClick={()=>this.addJokes()} > Add Joke to profile</button> */}
        //                     {/* <button className='cards__back__button' onClick={()=>console.log(this.state.addedJoke)} > Addstate to profile</button> */}
        //                     {/* <Profile profileJokeId={id} addedJoke={this.state.addedJoke}></Profile> */}
        
        //                 </div>
        //             </div>

        // )})) : (
        //     <div className='loading'>
        //         <div className="loading__message">Loading...</div>
        //         <FontAwesomeIcon className='loading__disc' icon="compact-disc" spin />
        //     </div>
        // )
        //     return (
        //         <div className='home__jokes__data'>
        //              {renderJokes}
        //         </div>
        //     )