import React from 'react'
import './global.css';
const Card = ({ file }) => {

    return (
        <div className="ml-5 crd">
            <div className="slide ml-5 card" style={{ backgroundColor: `white` }}>
                    <div className="marginTop">
                        <h1 className="personName">{file.name}</h1>
                    </div>
                    <div className="marginTop">
                    {file.labels.map((label) => {
                        return <span className="label">{label} </span>
                    })
                    }
                    </div>
                    <a href={file.url}  rel="external noreferrer" target="_blank">
                        <button className="niceButton">See more</button>
                    </a>
            </div>
        </div>


    );
}
export default Card;