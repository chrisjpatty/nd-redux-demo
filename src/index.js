import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './stores/todoStore.js';
import './index.css';

const render = () => {
  ReactDOM.render(
    <App redux={store.getState()}/>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
export default render;
