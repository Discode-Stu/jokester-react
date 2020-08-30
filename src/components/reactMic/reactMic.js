import React, { Component } from 'react';


import { ReactMic } from 'react-mic';



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


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
            //context: false    
    }

  // this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // this.audioCtx = new AudioContext();
  }


  // componentDidMount() {
  //   var context = new AudioContext();
  //   return context;

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
  }





//   class Audio {
//     static context = new (window.AudioContext || window.webkitAudioContext)()
// }

// export default Audio

  // touchStarted = () => {
  //   getAudioContext().resume();
  // }

  render() {
    const {
      blobURL,
      downloadLinkURL
     // context
      
      //record
    } = this.state
    return (
      <div className="react-mic-container">
        <div className="react-mic-container__wrapper" >
          <ReactMic
            className="react-mic-container__wrapper__sound-wave"
            record={this.state.record}
            onStop={this.onStop}
            onData={this.onData}
            onSave={this.onSave}
            onDownload={this.onDownload}
            //context={this.context}
            strokeColor="#a64ac9"
            backgroundColor="#ffb48f" 
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
