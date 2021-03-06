import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store, { history } from './configureStore';
import { ConnectedRouter } from 'react-router-redux'

ReactDOM.render(
  <Provider store={Store}>
    <ConnectedRouter store={Store} history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root')
);

serviceWorker.unregister();
