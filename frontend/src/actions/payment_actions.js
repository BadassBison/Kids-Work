import * as APIUtils from '../util/payment_util';

export const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';

export const receivePayment = (payload) => ({
    type: RECEIVE_PAYMENT,
    payload
});

export const createPayment = (payment) => disptach => {
    APIUtils.createPayment(payment).then(payment => {
        disptach(receivePayment(payment));
    });
};