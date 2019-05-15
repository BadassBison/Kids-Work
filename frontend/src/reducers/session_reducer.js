import { 
    RECEIVE_FAMILY_LOGOUT, 
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const initialState = {
    isAuthenticated: false,
    family: null
};

export default function(state = initialState, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {
                // ...state,
                isAuthenticated: !!action.userData,
                family: action.userData
            };
        case RECEIVE_FAMILY_LOGOUT:
            return initialState;
        default:
            return state;
    }
}