import React from 'react'
import './global.css';
import { Link, useNavigate} from "react-router-dom";

const Card = ({ file }) => {
    let navigate = useNavigate();
    const redirigir = (url) =>{
        navigate(url);
    }
    const redir = `/detail/${file.id}`;

    return (
        <div className="ml-5 crd">
            <div className="multi-button">
                <button className="fas fa-heart"></button>
                <button className="fas fa-share-alt"></button>
            </div>
            <div className="slide ml-5 card" style={{ backgroundColor: `white` }}>
                <div className="descriptions">
                    <h1 className="personName">{file.name}</h1>
                        {file.labels.map((label) => {
                                return <span className="label">{label}</span>
                            }
                            )
                        }
                    <Link to={redir}>
                        <button className="niceButton">
                            Ver más
                        </button>
                    </Link>
                </div>
            </div>
        </div>


    );
}
export default Card;