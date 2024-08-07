import React from 'react';
import Home from '../pages/Home';
import { Route, Routes } from 'react-router-dom';
import SearchNav from './SearchNav/SearchNav';
import ItemList from '../pages/ItemList/ItemList';

const App = (props) => {

    return (
        <>
            <SearchNav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/items' element={<ItemList/>} />
            </Routes>
        </>
    );
};


export default App;
