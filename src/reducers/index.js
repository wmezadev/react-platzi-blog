import { combineReducers } from 'redux';
import userReducer from './userReducer';
import postsReducer from './postsReducer';
import tasksReducer from './tasksReducer';

export default combineReducers ({
    userReducer, 
    postsReducer,
    tasksReducer
});