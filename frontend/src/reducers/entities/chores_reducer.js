import {
    RECEIVE_ALL_CHORES, RECEIVE_CHILD_CHORES, RECEIVE_CHORE
} from '../../actions/chore_actions';
import { merge } from 'lodash';

const defaultState = {};

const choresReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    let children; 

    switch(action.type) {
        case RECEIVE_ALL_CHORES:
            newState = merge({}, state);
            children = action.payload.data.children;
            // TODO: refactor so there is not a nested loop
            children.forEach(child => {
                let chores = child.chores;
                chores.forEach(chore => {
                    newState[chore._id] = chore;
                    // adding in the child id to the chore slice of state for reference
                    newState[chore._id].childId = child._id;
                });
            });
            return newState;
        case RECEIVE_CHILD_CHORES:
            newState = merge({}, state);
            const child = action.payload.data.children[0];
            child.chores.forEach(chore => {
                newState[chore._id] = chore;
                newState[chore._id].childId = child._id;
            });
            return newState; 
        case RECEIVE_CHORE:
            // TODO: change the what the route returns for creating (post) 
            // & updating (patch) a chore
            newState = merge({}, state);
            children = action.payload.data.children;
            children.forEach(child => {
                let chores = child.chores;
                chores.forEach(chore => {
                    newState[chore._id] = chore;
                    newState[chore._id].childId = child._id;
                });
            });
            return newState;
        default:
            return state;
    }
};

export default choresReducer;