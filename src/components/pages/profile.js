import React, { Component } from 'react';
import { connect } from 'react-redux'
import Jokes from '../jokes/jokes'
import GetJokes from '../jokes/getJokes'
import axios from 'axios';
import * as actions from '../../actions'

// import React from "react";
// import axios from 'axios';
// import React, { Component } from 'react'

// export default class extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }
// const Profile = props => {
//   const {
//     id,
//     content,
//     title,
//   } = props.joke;


// const addJokes = () => {
//     axios
//     .get(`https://dts-jokester-api.herokuapp.com/joke/${id}`)
//     .then(response => {
//         // this.setState({
//         //     data: response.data
//         // })
//         console.log(response)

//     })
//     .catch(error => {
//         console.log(error);
//     });
// }



//   return (
//     <div key={id} className='cards'>
//         <div className='cards__front'>
//             <div className='cards__front__title'>
//             {title}
//             </div>
//             <div>
//                 <img className='cards__front__jester' src={ require('./../../../src/images/jesterGirl.png') } />
//                 <div className='cards__front__jokester'>Jokester</div>
//             </div>
//         </div>
//         <div className='cards__back'>
//             <div className='cards__back__content' >
//                 {content}
//             </div>
//             <button className='cards__back__button' onClick={()=>addJokes()} > Add Joke to profile</button>
//         </div>
//     </div>
//   );
// };

// export default Profile;


class Profile extends Component {
  constructor(props) {
    super(props)

    this.state= {
      // profileJokes: [this.props.addedJoke],
      addedJoke: []
    }

    // this.getProfileJokes = this.getProfileJokes.bind(this)
    this.addJokes = this.addJokes.bind(this)
  }

  // getProfileJokes = () => {
  //   const { addedJoke } = this.props
  //   const { profileJokes } = this.state
  //   this.setState({ profileJokes: addedJoke })
  //   console.log("addedJoke", addedJoke)
  //   console.log("profileJokes", profileJokes)
  // }

  // componentDidMount() {
  //   this.getProfileJokes()
  // }
  addJokes = () => {
    const {profileJokeId} = this.props;
    axios
    .get(`https://dts-jokester-api.herokuapp.com/joke/${profileJokeId}`)
    .then(response => {
        // this.setState({
        //     addedJoke: response.data
        // })
        this.setState(state => ({
            addedJoke: [ ...state.addedJoke, response.data ]
        }))
        // this.props.addJokesToProfile(response.data)
        
        console.log('response',response)
        console.log('state', this.state.addedJoke)
        // return (<Profile addedJoke={this.state.addedJoke}></Profile>)


    })
    .catch(error => {
        console.log(error); 
    });
  }

  componentDidMount() {
    this.props.addJoke()
  }

  renderJokes = () => {
    // const jokes = this.props.jokes.map((joke, index) => {
    const profileJokes = this.props.profileJokes.map((joke, index) => {
      return (
        <div>

          <li key={joke.id}>
          <div>
          {joke.title}
          </div>
          <div>
          {joke.content}
            </div>
          </li>

        </div>

      )
    })
    return profileJokes;
  }


  render() {
    const {profileJokes} = this.state
    return (
      <div>
        {/* {profileJokes} Hwllo */}
        {/* <button style={{height: "25px"}}> helllo </button> */}
        {/* <button onClick={()=>{this.getProfileJokes()}}>getProfileJokes</button> */}
        <button onClick={()=>{this.addJokes()}}>addedJoke</button>
        {this.renderJokes()}
      </div>
      


    );
  }
}

function mapStateToProps(state) {
  return {
    profileJokes: state.jokesReducer.profileJokes
  }
}

export default connect(mapStateToProps, actions)(Profile)

