import { RECEIVE_FAMILY_LOGOUT } from '../actions/session_actions';

const initialState = {};

export default function(state = initialState, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FAMILY_LOGOUT:
            return {
                isAuthenticated: false,
                family: undefined
            };
        default:
            return state;
    }
}