import './App.css';
import Header from './Components/Header';
import './Components/global.css';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import { files } from './Helpers/data';
import React from 'react';
import UploadButton from './Components/UploadButton'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Slider files={files} /> 
      <UploadButton direccion="Upload" texto="Subir nuevo telegrama" />
      <Footer />
    </div>
  );
}

export default App;