import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootreducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig= {
  key:'main-root',
  storage,
}
const persistedReducer= persistReducer(persistConfig,rootReducer);
const store=createStore(persistedReducer,applyMiddleware())

const Persistor=persistStore(store)

export  {Persistor}
export default store