import React, {Component} from 'react';
import './App.css';
import Clarifai from 'clarifai'
import Navbar from '../../components/Navbar/Navbar';
import DetectForm from '../../components/DetectForm/DetectForm';
import Particles from 'reactparticles.js';
import config from './particlesjs-config.json';
import FaceRecognition from '../../components/FaceRecognition/FaceRecognition';
import configAPI from '../../configAPI'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import NavItem from '../../components/NavItem/NavItem'

const app = new Clarifai.App({
  apiKey: configAPI.API_KEY //YOUR API KEY HERE
 });

class App extends Component{
  constructor(){
    super();
    this.state = {
      inputUrl: '',
      imageUrl: '',
      boundingBox: {},
      route: 'signin'
    }
  }

  onInputChange = (event) => {
    this.setState({inputUrl: event.target.value});
  }

  calculateFaceLocation = (boxParams) => {
    const image = document.getElementById("faceImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height, boxParams)
    // this.setState({
    //   boundingBox: {
    //     topRow: boundingBoxAPI.top_row,
    //     rightCol: boundingBoxAPI.right_col,
    //     botRow: boundingBoxAPI.bottom_row,
    //     leftCol: boundingBoxAPI.left_col
    //   }
    // })
    return{
      leftCol: boxParams.left_col * width,
      topRow: boxParams.top_row * height,
      rightCol: width - (boxParams.right_col * width),
      botRow: height - (boxParams.bottom_row * height)
    }
  }

  onSubmit = () => {
    this.setState({imageUrl: this.state.inputUrl})
    app.models
      .predict(
    // HEADS UP! Sometimes the Clarifai Models can be down or not working as they are constantly getting updated.
    // A good way to check if the model you are using is up, is to check them on the clarifai website. For example,
    // for the Face Detect Mode: https://www.clarifai.com/models/face-detection
    // If that isn't working, then that means you will have to wait until their servers are back up. Another solution
    // is to use a different version of their model that works like the ones found here: https://github.com/Clarifai/clarifai-javascript/blob/master/src/index.js
    // so you would change from:
    // .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    // to:
    // .predict('53e1df302c079b3db8a0a36033ed2d15', this.state.input)
        Clarifai.FACE_DETECT_MODEL,
        this.state.inputUrl)
      .then(response => {
        const boundingBoxAPI = response.outputs[0].data.regions[0].region_info.bounding_box
        this.setState({boundingBox: this.calculateFaceLocation(boundingBoxAPI)})        
        console.log(boundingBoxAPI)
      })
  }

  onRouteChange = (route) => {
    this.setState({route: route})
  }

  render() {
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
        <Navbar> 
          {
            this.state.route === 'home' ?
            <NavItem onRouteChange={this.onRouteChange} classes={"flexEnd bgBlack shadow-4 pv2 ph3 ba br3 pointer grow"}/>
            :
            null
          }
        </Navbar>
        <div className="content pt6">
          
          {
            this.state.route === 'home' ?
            <> 
              <p className="f2 white">You are rank #5</p>
              <p className="f4 white">The application will detect the faces on any image. Paste an image below to try.</p>
              <DetectForm inputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
              <FaceRecognition imageUrl={this.state.imageUrl} boundingBoxParams={this.state.boundingBox}/> 
            </>
            : 
            (
              this.state.route === 'signin' ? 
              <SignIn onRouteChange={this.onRouteChange}/> 
              :
              <SignUp onRouteChange={this.onRouteChange}/>
            )
          }
          
        </div>
      </div>
    );
  }
}

export default App;
