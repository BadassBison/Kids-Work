import { combineReducers } from 'redux';
import choresReducer from './chores_reducer';

const entitiesReducer = combineReducers({
    chores: choresReducer
});

export default entitiesReducer;