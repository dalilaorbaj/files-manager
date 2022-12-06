import React from "react";
import './global.css';
import Card from './Card';

const Slider = ( {files}  ) => {

    return ( 
        <div className="ml-5 sl mb-5hh">
            <h1 className="niceTitle">Uploaded recently</h1>
            <div className="slider mb-4 ml-4 ml-5 mt-3">
                {files.map((card) =>{
                    return (
                        <Card key={card.id} file={card}/>
                    )
                })}
            </div>
        </div>
    );
}
export default Slider;