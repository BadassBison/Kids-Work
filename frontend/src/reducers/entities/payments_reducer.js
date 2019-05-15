import {
    RECEIVE_ALL_CHORES, RECEIVE_CHILD_CHORES, RECEIVE_CHORE
} from '../../actions/chore_actions';
import { RECEIVE_PAYMENT } from '../../actions/payment_actions';
import { merge } from 'lodash';

const defaultState = {};

const familyReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState;
    let children;
    let payments;

    switch (action.type) {
        case RECEIVE_ALL_CHORES:
            newState = merge({}, state);
            children = action.payload.data.children;
            children.forEach(child => {
                child.payments.forEach(payment => {
                    newState[payment._id] = payment;
                    newState[payment._id].childId = child.id;
                });
            });
            return newState;

        case RECEIVE_CHILD_CHORES:
            newState = merge({}, state);
            payments = action.payload.data.payments;
            payments.forEach(payment => {
                newState[payment._id] = payment;
                newState[payment._id].childId = action.payload.data.id;
            });
            return newState;

        case RECEIVE_PAYMENT:
            newState = merge({}, state);
            let payment = action.payload.data;
            newState[payment.id] = payment;
            return newState;

        default:
            return state;
    }
};

export default familyReducer;