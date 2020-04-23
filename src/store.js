import {createStore, applyMiddleware } from 'redux';
import imdb from './reducers/index'
import thunk from 'redux-thunk';
const store=createStore(imdb,applyMiddleware(thunk));
export default store;