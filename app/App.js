import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigation/MainNavigation';

// const rootReducer = combineReducers({

// });

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
      <MainNavigator />
  );
}