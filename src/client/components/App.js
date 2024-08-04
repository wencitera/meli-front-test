import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes>
        </>
    );
};


export default App;
