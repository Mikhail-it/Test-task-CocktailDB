import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import store from "./store/store";
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,
  document.getElementById('root')
);