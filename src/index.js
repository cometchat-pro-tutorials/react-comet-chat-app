import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import chat from './lib/chat';

chat.init();

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root'));