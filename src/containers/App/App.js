import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai'
import Navbar from '../../components/Navbar/Navbar';
import DetectForm from '../../components/DetectForm/DetectForm';
import Particles from 'reactparticles.js';
import config from './particlesjs-config.json';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
// import dotenv from 'dotenv'

// const app = new Clarifai.App({
//   apiKey: '44bf0c6e6c724a0fb2ad4fcaf5682174'
//  });

class App extends Component{
  constructor(){
    super();
    this.state = {
      inputUrl: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({inputUrl: event.target.value});
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.inputUrl})
    // app.models
    //   .predict(
    // // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    // // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    // // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    // // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
    // // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
    // // so you would change from:
    // // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    // // to:
    // // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
    //     Clarifai.FACE_DETECT_MODEL,
    //     this.state.input)
    //   .then(response => {
    //     console.log('hi', response)
    //   })
  }

  render() {
    console.log(this.state.inputUrl)
    return (
      <div className="App">
        <Particles
            id="config-1"
            config={config}
            style={{
              width: "100%",
              height: "99vh",
              opacity: "1"
            }}
            className="particles-class-name zNeg"
          />
        <Navbar />
        <div className="content pv6">
          <p className="f2 white">You are rank #5</p>
          <p className="f4 white">The application will detect the faces on any image. Paste an image below to try.</p>
          <DetectForm inputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
          <FaceRecognition imageUrl={this.state.imageUrl}/>
        </div>
      </div>
    );
  }
}

export default App;
