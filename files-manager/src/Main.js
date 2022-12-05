import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
import Upload from './Pages/Upload';
import Details from './Pages/Detail';

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/upload/:id' element={<Upload />} />
                <Route path='/details/:id' element={<Details />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Main;