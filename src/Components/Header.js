import React from "react";
import './global.css';
import SearchBar from "./SearchBar";

const Header = () => {
    return (    
            <div id="header" className="row colorcito header">
                <div className="contentHeader" >
                    <h1 className="whiteText marginBottom">Find the file you are looking for</h1>
                    <SearchBar />
                </div>
            </div>        
    );
}
export default Header