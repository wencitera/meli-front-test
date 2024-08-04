import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';


hydrateRoot(document.getElementById('root'), 
<BrowserRouter>
    <App/>
</BrowserRouter>
);
