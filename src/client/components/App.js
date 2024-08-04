import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import SearchNav from './SearchNav/SearchNav';

const App = (props) => {

    return (
        <>
            <Routes>
                <Route exact path="/" element={<SearchNav/>}>
                    <Route index element={<Home />}/>
                </Route>
            </Routes>
        </>
    );
};


export default App;
