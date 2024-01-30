import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './state/store';

import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

let persistor = persistStore(store);

const wrapper = document.getElementById('root');
const root = createRoot(wrapper);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
