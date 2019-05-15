import {
    RECEIVE_ALL_CHORES, RECEIVE_CHILD_CHORES, RECEIVE_CHORE
} from '../../actions/chore_actions';
import { RECEIVE_CHILD } from '../../actions/child_actions';
import { merge } from 'lodash';

const defaultState = {};

const childrenReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    let children;

    switch (action.type) {
        case RECEIVE_ALL_CHORES || RECEIVE_CHORE:
            newState = merge({}, state);
            children = action.payload.data.children;
            children.forEach(child => {
                newState[child.id] = child;
            });
            return newState;
            
        case RECEIVE_CHILD_CHORES:
            newState = merge({}, state);
            const child = action.payload.data;
            newState[child.id] = child;
            return newState;

        case RECEIVE_CHILD:
            newState = merge({}, state);
            let newChild = action.payload.data;
            newState[newChild.id] = newChild;
            return newState;

        default:
            return state;
    }
};

export default childrenReducer;