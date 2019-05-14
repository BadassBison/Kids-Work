import {
    RECEIVE_ALL_CHORES, RECEIVE_CHILD_CHORES, RECEIVE_CHORE
} from '../../actions/chore_actions';
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
                newState[child._id] = {
                    id: child._id,
                    firstName: child.firstName
                };
            });
            return newState;
        case RECEIVE_CHILD_CHORES:
            newState = merge({}, state);
            const child = action.payload.data.children[0];
            newState[child._id] = {
                id: child._id,
                firstName: child.firstName
            };
            return newState;
        case RECEIVE_CHORE:
            newState = merge({}, state);
            children = action.payload.data.children;
            children.forEach(child => {
                newState[child._id] = {
                    id: child._id,
                    firstName: child.firstName
                };
            });
            return newState;
        default:
            return state;
    }
};

export default childrenReducer;