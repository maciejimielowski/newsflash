import React, { ReactElement } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from './redux/reducers';
import App from './App';

const middleWares = [thunk];
const reducer = combineReducers(reducers);

const store = createStore(reducer, compose(applyMiddleware(...middleWares)));

const AppProvider = (): ReactElement => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
