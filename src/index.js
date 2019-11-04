import React from 'react'
import ReactDom from 'react-dom'

import App from './App.js'

import store from './store'
// window.store = store;
// console.log(store);
ReactDom.render(
    <App store={store} />,
    document.getElementById('root')    
)