import {combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import repoReducer from '../Slice/repoSlice'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';



const persistConfig = {
    key: 'root',
    storage: storage,
    version: 1
  };
  const persistedReducer = persistReducer(persistConfig, repoReducer)
  
  export const store = configureStore({
    reducer: {
        repo: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })