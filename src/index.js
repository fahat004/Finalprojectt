import React from 'react';
import ReactDOM from 'react-dom';
import './asset/style/index.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.tsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './chakraTheme.ts';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import config from './config/config.ts';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet>
            <meta property="og:image" content={`${config.HOST}/logo512.png`} />
          </Helmet>

          <Router>
            <App />
          </Router>
          <ToastContainer />
        </HelmetProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);