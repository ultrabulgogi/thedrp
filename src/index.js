import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {TeaProvider} from "./Teas/TeaProvider";

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <TeaProvider>
            <App />
        </TeaProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
