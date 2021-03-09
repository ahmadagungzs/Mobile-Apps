import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';

// root reducer : combining multiple reducer in a single unit
export const rootReducer = combineReducers({
    userReducer,
});