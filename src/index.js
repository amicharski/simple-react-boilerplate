import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/normalize.scss';
import './styles/small.module.scss';
import './styles/medium.scss';
import './styles/large.scss';

ReactDOM.createRoot(document.getElementById('root'))
    .render( <BrowserRouter>
            <App />
        </BrowserRouter>);