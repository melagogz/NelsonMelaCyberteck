import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import AuthReducer from './AuthReducer';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../DataStore/rootReducer';


const store = configureStore({
    reducer: {
        auth: AuthReducer
    },
    middleware: [
        ...getDefaultMiddleware(),
    ]
});


const store = createStore(rootReducer);

export default store