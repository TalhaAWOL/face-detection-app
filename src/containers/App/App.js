import React, {Component} from 'react';
import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import DetectForm from '../../components/DetectForm/DetectForm'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <p className="f2 white">You are rank #5</p>
        <p className="f4 white">The application will detect the faces on any image. Paste an image below to try.</p>
        <DetectForm />
      </div>
    </div>
  );
}

export default App;
