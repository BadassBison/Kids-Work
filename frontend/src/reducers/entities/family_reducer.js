import {
    RECEIVE_ALL_CHORES, RECEIVE_CHILD_CHORES, RECEIVE_CHORE
} from '../../actions/chore_actions';
import { merge } from 'lodash';

const defaultState = {};

const familyReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    let family;

    switch (action.type) {
        case RECEIVE_ALL_CHORES:
            newState = merge({}, state);
            family = action.payload.data;
            newState[family.id] = {
                familyId: family.id,
                familyName: family.familyName,
                firstName: family.firstName
            };
            return newState;
        case RECEIVE_CHILD_CHORES:
            newState = merge({}, state);
            family = action.payload.data;
            newState[family.id] = {
                familyId: family.id,
                familyName: family.familyName,
                firstName: family.firstName
            };
            return newState;
        case RECEIVE_CHORE:
            newState = merge({}, state);
            family = action.payload.data;
            newState[family.id] = {
                familyId: family.id,
                familyName: family.familyName,
                firstName: family.firstName
            };
            return newState;
        default:
            return state;
    }
};

export default familyReducer;