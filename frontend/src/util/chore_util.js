import axios from 'axios';

export const getAllChores = () => {
    return axios.get(`/api/chores`);
};

export const getChildChores = (childId) => {
    return axios.get(`/api/chores/${childId}`);
};

export const createChore = (chore) => {
    return axios.post(`/api/chores`, chore);
};

export const updateChore = (chore) => {
    return axios.patch(`/api/chores/${chore.childId}/${chore.choreId}`, chore);
};