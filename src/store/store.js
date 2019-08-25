import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { initialState } from './initialState';
import { singleReducer } from './reducers';

const storeFactory = (initial = initialState) => (
    createStore(singleReducer, initial, applyMiddleware(thunk))
);

const store = storeFactory();
window.store = store;

export default store;