import React, { Component } from 'react';

  document.addEventListener("click", () =>  {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();

    ctx.resume().then(() => console.log(ctx.state))


  })


import { ReactMic, Audio } from 'react-mic';
     




// import { ReactMic, Audio } from 'react-mic';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import Audio from './audio'


// document.addEventListener("click", () =>  {
//   const ctx = new (window.AudioContext || window.webkitAudioContext)();

//   ctx.resume().then(() => console.log(ctx.state))
   
//  })

// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const osc = ctx.createOscillator();

// osc.connect(ctx.destination);

// console.log(ctx);

// osc.start(0);
// osc.stop(2);


// const btn = document.querySelector("button");

// if(btn) {

// window.onload=function(){
   
  
//   document.addEventListener("click", () =>  {
//     const ctx = new (window.AudioContext || window.webkitAudioContext)();

//     ctx.resume().then(() => console.log(ctx.state))
    
//   })
// }
// }




// var promise = document.querySelector('audio').play();
// if (promise !== undefined) {
//   promise.then(_ => {
//     console.log('Autoplay started!')
//   }).catch(error => {
//     console.log('Autoplay was prevented.');
     
//     // Show a "Play" button so that user can start playback.
//   });
// }

class Microphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadLinkURL: null,
            record: false,
            blobURL: null
            
           // audio: null
            //context: false    
    }
    // document.querySelector({ReactMic}).addEventListener("click", () =>  {
      // const ctx = new (window.AudioContext || window.webkitAudioContext)();
  
      // ctx.resume().then(() => console.log(ctx.state))
  
  
    // })

  // this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // this.audioCtx = new AudioContext();
  }

  // componentWillMount() {
  //   // Initialize an audio context
  //   this.audioContext = new AudioContext();
  // }
  
  // componentWillUnmount() {
  //   // Close context on unmount
  //   this.audioContext.close();
  // }

  // handleAudioCtx = () => {
  //   const ctx = (window.AudioContext || window.webkitAudioContext)();

  //   this.ctx.resume().then(() => console.log(ctx.state))


  //  }

  // componentDidMount() {
  //   document.addEventListener("click", () =>  {
  //     const ctx = new (window.AudioContext || window.webkitAudioContext)();
  
  //     ctx.resume().then(() => console.log(ctx.state))
       
  //    })
  
  // }
  
//   window.addEventListener('click', audioCtx => {
//     const audioCtx = new window.AudioContext();
//     audioCtx.resume();
//   });
// }
//   componentDidMount() {
//     const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   const ctx = new (window.AudioContext || window.webkitAudioContext)();
//   ctx.resume()

// })
//   }

  // componentDidMount() {
  //   var audioCtx = new window.AudioContext();
    
  // //   audioCtx.addEventListener("click", function () {
  // //     //audioCtx.play();
  //       audioCtx.resume();
  // // });

  // }


  // componentDidMount() {
  //   this.audioContext = new (window.AudioContext ||
  //     window.webkitAudioContext)();
  //     this.analyser = this.audioContext.createAnalyser();
  //     //this.source = this.audioContext.createMediaStreamSource(this.props.audio);

  // }
  

  // context = () => {
  //   this.setState({ context: true})
  // }
  
  // componentDidMount() {
  //   // this.context = new window.AudioContext.resume();
  //   this.context = new (window.AudioContext || window.webkitAudioContext)()
  // }

  // AudioContext = window.AudioContext || window.webkitAudioContext;
  // audioCtx = new AudioContext();

  // susresBtn.onclick = function() {
  //   if(audioCtx.state === 'running') {
  //     audioCtx.suspend().then(function() {
  //       susresBtn.textContent = 'Resume context';
  //     });
  //   } else if(audioCtx.state === 'suspended') {
  //     audioCtx.resume().then(function() {
  //       susresBtn.textContent = 'Suspend context';
  //     });
  //   }
  // }


    //   window.onload = function() {
  //   var context = new AudioContext();
    
    
  //   document.querySelector('button').addEventListener('click', function() {
  //     context.resume().then(() => {
  //       console.log('Playback resumed successfully');
  //     });
  //   });

  // }

  // componentDidMount() {
  //   getAudioContext().resume()
  // }

  // document.querySelector('button').addEventListener('click', function() {
  //   var context = new AudioContext();
  // });

  // }


  // window.onload = function() {
  //   var context = new AudioContext();
  //   ...
  // }

  // componentDidMount() {
  //   var audioContext = new AudioContext();
    
  //   //  audioContext.suspend();
  //   return audioContext;

  // }



  

  onData(recordedBlob) {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  onSave = (blobObject) => {
    this.setState({ downloadLinkURL: blobObject.blobURL })
  }
 
  onStop = (blobObject) => {
    this.setState({ blobURL: blobObject.blobURL })
  }

  stopRecording = () => {
    this.setState({ record: false });
  }

  
  
  startRecording = () => {
   // this.setState({ context: true});
    this.setState({ record: true });
   // const context = new AudioContext();
    //return context;

  }





//   class Audio {
//     static context = new (window.AudioContext || window.webkitAudioContext)()
// }

// export default Audio

  // touchStarted = () => {
  //   getAudioContext().resume();
  // }

  render() {
    //const context = new AudioContext;

    // const btn = document.querySelector("button");
    // btn.addEventListener("click", () => {
    //   const ctx = new (window.AudioContext || window.webkitAudioContext)();
    //   ctx.resume()
    // }


    const {
      blobURL,
      downloadLinkURL,
     // context = new AudioContext()
     // context
      
      //record
    } = this.state
    return (
      <div className="react-mic-container">
        <div className="react-mic-container__wrapper" >
          {/* <Audio /> */}
          <ReactMic
           // onClick={this.handleAudioCtx}
            className="react-mic-container__wrapper__sound-wave"
            record={this.state.record}
            onStop={this.onStop}
            onSave={this.onSave}
            onDownload={this.onDownload}
            //context={this.context}
            strokeColor="#a64ac9"
            backgroundColor="#fccd04" 

          />
           
          

          <div className="react-mic-container__wrapper__buttons"> 

            <button className="react-mic-container__wrapper__buttons__start"   onClick={this.startRecording} type="button" title="Click to Start Recording">
              
                <FontAwesomeIcon className='fas' icon="microphone-alt"/>
                
            </button>
            
            <button className="react-mic-container__wrapper__buttons__stop" onClick={this.stopRecording} type="button" title="Click to Stop Recording">
              
                <FontAwesomeIcon className='fas' icon="stop-circle"/>
            </button>
          
            <a className="react-mic-container__wrapper__buttons__download" href={downloadLinkURL} download="recording.webm">
              <button className="react-mic-container__wrapper__buttons__download__button" title="Click to Download Recording">
                  {/* <i class="fas fa-cloud-download-alt"></i> */}
                  <FontAwesomeIcon className='fas' icon="cloud-download-alt"/>

              </button>
            </a>
          </div>
            <audio
              className="react-mic-container__wrapper__audio"
              controls="controls"
              src={blobURL}
              controlsList="nodownload"
              title= "Click the Play Button to Listen To Your Joke!"
            >
            </audio>
        </div>
      </div>
    );
  }
}

export default Microphone;

