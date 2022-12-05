import React from "react";
import './global.css';
import files from "../Helpers/data"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/Slider'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
    return (  
    <div className='App'>
        <Header />
        <Slider files={files}/>
        <Footer />
    </div>  
    )
}

export default Home;