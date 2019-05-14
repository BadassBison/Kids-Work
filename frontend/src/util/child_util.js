import axios from 'axios';

export const createChild = (child) => {
    return axios.post(`/api/children/`, child);
};