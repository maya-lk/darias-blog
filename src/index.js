import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store , persistor } from './redux/store';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/darias/blog">
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>            
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));