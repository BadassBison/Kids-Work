import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (familyData) => {
    return axios.post('/api/familes/signup', familyData);
};

export const loginParent = (userData) => {
    return axios.post('/api/families/parentLogin', userData);
};

export const loginChild = (userData) => {
    return axios.post('/api/families/childLogin', userData);
};