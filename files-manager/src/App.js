import './App.css';
import Header from './Components/Header';
import './Components/global.css';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import { files } from './Helpers/data';
import React from 'react';


function App() {

  return (
    <div className="App">
      <Header />
      <Slider title="Uploaded recently" files={files} /> 
      <Footer />
    </div>
  );
}

export default App;