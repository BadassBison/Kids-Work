import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (familyData) => {
    return axios.post('/api/families/signup', familyData);
};

export const loginParent = (userData) => {
    return axios.post('/api/families/parentLogin', userData);
};

export const loginChild = (userData) => {
    return axios.post('/api/families/childLogin', userData);
};

export const demoLoginParent = () => {
    return axios.post('/api/families/parentLogin', {
        firstName: 'Molly',
        familyName: 'Weasley',
        password: 'castaspell'
    });
};

export const demoLoginChild = () => {
    return axios.post('/api/families/childLogin', {
        firstName: 'Ron',
        familyName: 'Weasley',
        password: 'castaspell'
    });
};