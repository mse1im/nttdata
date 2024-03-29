import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './main.css';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('nttdata'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);