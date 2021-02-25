import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import MainNavigator from './navigation/MainNavigation';
import authReducer from './store/reducers/auth';
import harboursReducer from './store/reducers/harbours';
import userReservationsReducer from './store/reducers/userReservations';
import adminReservationsReducer from './store/reducers/adminReservations';

const rootReducer = combineReducers({
  auth: authReducer,
  harbours: harboursReducer,
  userReservations: userReservationsReducer,
  adminReservations: adminReservationsReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}