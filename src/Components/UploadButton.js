import React from 'react'
import './global.css';
import { Link, useNavigate} from "react-router-dom";

const UploadButton = ({direccion, texto }) => {
    let navigate = useNavigate();
    /*const redirigir = (url) =>{
        navigate(url);
    }*/
    const redir = `/${direccion}`;

return (
    <>
        <Link to={redir}>
            <button className="niceButton marginTop">
                {texto}
            </button>
        </Link>
    </>
)
}

export default UploadButton;