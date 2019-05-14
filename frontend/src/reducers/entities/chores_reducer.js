import {
    RECEIVE_ALL_CHORES, RECEIVE_CHILD_CHORES, RECEIVE_CHORE
} from '../../actions/chore_actions';
import { merge } from 'lodash';

const defaultState = {};

const choresReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    let children; 
    let chores; 
    let unassignedChores;

    switch(action.type) {
        case RECEIVE_ALL_CHORES:
            newState = merge({}, state);
            children = action.payload.data.children;
            children.forEach(child => {
                chores = child.chores;
                chores.forEach(chore => {
                    newState[chore._id] = chore;
                    newState[chore._id].assigned = child._id;
                });
            });
            unassignedChores = action.payload.data.chores;
            unassignedChores.forEach(unassignedChore => {
                newState[unassignedChore._id] = unassignedChore;
                newState[unassignedChore._id].assigned = null;
            });
            return newState;

        case RECEIVE_CHILD_CHORES:
            newState = merge({}, state);
            const child = action.payload.data;
            child.chores.forEach(chore => {
                newState[chore._id] = chore;
                newState[chore._id].childId = child._id;
            });
            return newState;

        case RECEIVE_CHORE:
            newState = merge({}, state);
            let chore = action.payload.data;
            newState[chore.id] = chore;
            return newState;

        default:
            return state;
    }
};

export default choresReducer;