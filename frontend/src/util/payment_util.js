import axios from 'axios';

// must pass in childId with payment
export const createPayment = (payment) => {
    return axios.post(`/api/payments/${payment.childId}`, payment);
};