import React from "react";
import { useState } from "react";
import './global.css';
import files from "../Helpers/data"

/*let names = files.map(item => item.name);*/

const SearchBar = () => {
    const [input, setInput] = useState('');
    const inputeado = (e) => {
        setInput(e.target.value);
    }
    return (
        <form className="centrado">
            <div className="search-container centrado">
                <input type="text" name="search" placeholder="Buscar..." className="search-input centrado" value={input} onInput={e => inputeado(e)} />
                <a href={`/search/${input}`} className="search-btn">
                    <i className="fas fa-search"></i>
                </a>
            </div>
        </form>

    )
}
export default SearchBar;