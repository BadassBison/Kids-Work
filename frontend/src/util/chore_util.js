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

export const summerizedChoreData = state => {

    const now = new Date();
    const summerizedChoreData = {};
    Object.values(state.entities.children).forEach(child => {
        summerizedChoreData[child.id] = { name: child.firstName, id: child.id, Balance: child.balance, Completed: 0, Pending: 0, Open: 0, Overdue: 0 };
    });
    Object.values(state.entities.chores).forEach(chore => {
        if (chore.status === "COMPLETED") {
            summerizedChoreData[chore.childId]["Completed"] += 1;
        } else if (chore.status === "PENDING_REVIEW") {
            summerizedChoreData[chore.childId]["Pending"] += 1;
        } else if (chore.status === "ASSIGNED" || chore.status === "CHOSEN") {
            if (chore.deadline && now > chore.deadline) {
                summerizedChoreData[chore.childId]["Overdue"] += 1;
            } else {
                summerizedChoreData[chore.childId]["Open"] += 1;
            }
        }
    });
    return Object.values(summerizedChoreData);
};