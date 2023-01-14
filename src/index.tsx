// third party
import { HashRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

// local imports
import './styles/index.scss';
import App from './components/App/index';
import { store, persistor } from "./redux/store";
import Loading from "./components/Loading";


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <PersistGate loading={<Loading/>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
