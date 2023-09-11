import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './services/reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
