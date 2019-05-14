import axios from 'axios';

export const getAllChores = () => {
    return axios.get(`/api/chores`);
};

export const getChildChores = (childId) => {
    return axios.get(`/api/chores/${childId}`);
};

export const createUnassignedChore = (chore) => {
    return axios.post(`/api/chores`, chore);
};

// input chore requires childId
export const createAssignedChore = (chore) => {
    return axios.post(`/api/chores/${chore.childId}`, chore);
};

export const updateChore = (chore) => {
    return axios.patch(`/api/chores/${chore.childId}/${chore.choreId}`, chore);
};