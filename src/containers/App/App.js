import React, {Component} from 'react';
import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import DetectForm from '../../components/DetectForm/DetectForm'
import Particles from 'reactparticles.js'
import config from './particlesjs-config.json'

class App extends Component{
  render() {
    return (
      <div className="App">
        <Particles
            id="config-1"
            config="./particlesjs-config.json"
            style={{
              width: "100%",
              height: "90vh",
              opacity: "1"
            }}
            className="particles-class-name zNeg"
          />
        <Navbar />
        <div className="content">
          <p className="f2 white">You are rank #5</p>
          <p className="f4 white">The application will detect the faces on any image. Paste an image below to try.</p>
          <DetectForm />
        </div>
      </div>
    );
  }
}

export default App;
