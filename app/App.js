import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigation/MainNavigation';
import { initLocalization } from './translations/Translations';
import authReducer from './store/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  
  initLocalization();

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}