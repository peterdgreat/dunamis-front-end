import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configurestore';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Promisetracker from './Promisetracker';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Promisetracker /> */}
  </Provider>,
  document.getElementById('root'),
);
