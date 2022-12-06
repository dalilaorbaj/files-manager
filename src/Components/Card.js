import React, {Button} from 'react'
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
                    <a href={file.url} target="_blank" rel="noreferrer">
                        <Button>My custom button</Button>
                    </a>
            </div>
        </div>


    );
}
export default Card;