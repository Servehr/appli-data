import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {  persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storageSession from 'redux-persist/es/storage/session';
import { authSliceReducer } from './slices/AuthSlice';


// export const store = configureStore({
//    reducer: authSlice
// });

const reducers = combineReducers(
   { 
      authSlice: authSliceReducer 
   }
);

const persistConfig = {
    key: 'root',
    storage: storageSession,
};

const rootReducer = (state, action) => 
{
    if(action.type === 'RESET')
    {
       storage.removeItem('persist:root');
       state = {};
    }
    return reducers(state, action);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
   reducer: persistedReducer,
   middleware: getDefaultMiddleware(
      {
         serializableCheck: false
      }
   ),
 });


export default store;