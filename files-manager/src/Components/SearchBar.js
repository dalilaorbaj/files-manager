import React from "react";
import { useState } from "react";
import './global.css';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const inputeado = (e) => {
        setInput(e.target.value);
    }
    return (
        <form>
            <div className="search-container">
                <input type="text" name="search" placeholder="Buscar..." className="search-input" value={input} onInput={e => inputeado(e)} />
                <a href={`/search/${input}`} className="search-btn">
                    <i className="fas fa-search"></i>
                </a>
            </div>
        </form>

    )
}
export default SearchBar