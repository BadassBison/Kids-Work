import { combineReducers } from 'redux';
import choresReducer from './chores_reducer';
import familyReducer from './family_reducer';
import childrenReducer from './children_reducer';

const entitiesReducer = combineReducers({
    family: familyReducer,
    children: childrenReducer,
    chores: choresReducer
});

export default entitiesReducer;