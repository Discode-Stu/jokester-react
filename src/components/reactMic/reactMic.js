import React, { Component } from 'react';
import { ReactMic } from 'react-mic';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Microphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadLinkURL: null,
            record: false,
            blobURL: null
    }
  }

  componentDidMount() {
    document.addEventListener("click", () =>  {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      ctx.resume().then(() => console.log(ctx.state))
    })
  }

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
    this.setState({ record: true });
  }

  render() {
    const {
      blobURL,
      downloadLinkURL,
    } = this.state
    return (
      <div className="react-mic-container">
        <div className="react-mic-container__wrapper" >
          <ReactMic
            className="react-mic-container__wrapper__sound-wave"
            record={this.state.record}
            onStop={this.onStop}
            onSave={this.onSave}
            onDownload={this.onDownload}
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

