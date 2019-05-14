import * as APIUtils from '../util/chore_util';

export const RECEIVE_ALL_CHORES = 'RECEIVE_ALL_CHORES';
export const RECEIVE_CHILD_CHORES = 'RECEIVE_CHILD_CHORES';
export const RECEIVE_CHORE = 'RECEIVE_CHORE';

export const receiveAllChores = (payload) => ({
    type: RECEIVE_ALL_CHORES,
    payload
});

export const receiveChildChores = (payload) => ({
    type: RECEIVE_CHILD_CHORES,
    payload
});

export const receiveChore = (payload) => ({
    type: RECEIVE_CHORE,
    payload
});

export const fetchChores = () => disptach => {
    APIUtils.getAllChores().then(chores => {
        disptach(receiveAllChores(chores));
    });
};

export const fetchChildChores = (childId) => disptach => {
    APIUtils.getAllChores(childId).then(chores => {
        disptach(receiveChildChores(chores));
    });
};

export const createChore = (chore) => disptach => {
    APIUtils.createChore(chore).then(chore => {
        disptach(receiveChore(chore));
    });
};

export const updateChore = (chore) => disptach => {
    APIUtils.updateChore(chore).then(chore => {
        disptach(receiveChore(chore));
    });
};