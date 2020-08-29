import React, { Component } from 'react';
import { ReactMic } from 'react-mic';


class Microphone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            downloadLinkURL: null,
            record: false,
            blobURL: null          
    }
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
    getAudioContext().resume();
    this.setState({ record: true });
  }

  // touchStarted = () => {
  //   getAudioContext().resume();
  // }

  render() {
    const {
      blobURL,
      downloadLinkURL,
      record
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
            strokeColor="#a64ac9"
            backgroundColor="#ffb48f" 
          />

          <div className="react-mic-container__wrapper__buttons"> 

            <button className="react-mic-container__wrapper__buttons__start"   onClick={this.startRecording} type="button" title="Click to Start Recording">
                <i class="fas fa-microphone-alt"></i>
            </button>
            
            <button className="react-mic-container__wrapper__buttons__stop" onClick={this.stopRecording} type="button" title="Click to Stop Recording">
                <i class="fas fa-stop-circle"></i>
            </button>
          
            <a className="react-mic-container__wrapper__buttons__download" href={downloadLinkURL} download="recording.webm">
              <button className="react-mic-container__wrapper__buttons__download__button" title="Click to Download Recording">
                  <i class="fas fa-cloud-download-alt"></i>
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
