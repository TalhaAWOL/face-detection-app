import React, {Component} from 'react';
import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import DetectForm from '../../components/DetectForm/DetectForm'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <DetectForm />
      </div>
    </div>
  );
}

export default App;
