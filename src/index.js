import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root')); the old way of react rendering elements

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />);