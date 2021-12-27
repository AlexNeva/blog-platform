import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";
import { store } from './store';

import 'normalize.css';
import "antd/dist/antd.css";
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>


    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
