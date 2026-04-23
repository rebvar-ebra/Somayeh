import React from 'react'

import { createRoot } from 'react-dom/client';

import App from './App'
import './index.css'
console.log('index.jsx is running');
const root = createRoot(document.getElementById("root"));
console.log('root element found:', document.getElementById("root"));
root.render(<App />)
console.log('root.render called');