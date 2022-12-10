import './App.css';
import Header from './Components/Header';
import './Components/global.css';
import Slider from './Components/Slider';
import Footer from './Components/Footer';
import { files } from './Helpers/data';
import React from 'react';
import UploadButton from './Components/UploadButton'
import SearchForm from './Components/SearchForm'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      someData: []
    };
  }

  updateParentState = (newData) => {
    this.setState({
      someData: newData
    });
  }

  render(){
  return (
    <div className="App">
      <Header />
      <SearchForm onUpdate={this.updateParentState}/>
      <Slider files={files} /> 
      <UploadButton direccion="Upload" texto="Subir nuevo telegrama" />
      <Footer />
    </div>
  );
}
}

export default App;