import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Loader from './Loader/Loader';

const SearchNav = lazy(() => import('./SearchNav/SearchNav'));
const Home = lazy(() =>  import('../pages/Home'));
const ProductList = lazy(() => import('../pages/ProductList/ProuctList'));
const ProductDetail = lazy(() => import('../pages/ProductDetail/ProductDetail'));

const App = () => {

    return (
        <Suspense fallback={<Loader />}>
            <SearchNav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path='/items' element={<ProductList/>} />
                <Route path='/item/:id' element={<ProductDetail />} />
            </Routes>
        </Suspense>
    );
};


export default App;
