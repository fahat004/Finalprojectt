import React from 'react';
import ReactDOM from 'react-dom';
import './asset/style/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);