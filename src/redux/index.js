import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'rootKeyPersist',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export const reduxProvider = (Component) => (props) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Component {...props} />
    </PersistGate>
  </Provider>
);
