import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import App from './App';
/*import Upload from './Pages/Upload';*/

/*<Route path='/upload/:id' element={<Upload />} />*/ 

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                
            </Routes>
        </BrowserRouter>
    );
}
export default Main;