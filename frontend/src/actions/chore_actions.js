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

export const fetchChores = () => dispatch => {
    APIUtils.getAllChores().then(chores => {
        dispatch(receiveAllChores(chores));
    });
};

export const fetchChildChores = (childId) => dispatch => {
    APIUtils.getChildChores(childId).then(chores => {
        dispatch(receiveChildChores(chores));
    });
};

export const createUnassignedChore = (chore) => dispatch => {
    APIUtils.createUnassignedChore(chore).then(chore => {
        dispatch(receiveChore(chore));
    });
};

export const createAssignedChore = (chore) => dispatch => {
    APIUtils.createAssignedChore(chore).then(chore => {
        dispatch(receiveChore(chore));
    });
};

export const updateChore = (chore) => dispatch => {
    APIUtils.updateChore(chore).then(chore => {
        dispatch(receiveChore(chore));
    });
};