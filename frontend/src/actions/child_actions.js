import * as APIUtils from '../util/child_util';

export const RECEIVE_CHILD = 'RECEIVE_CHILD';

export const receiveChild = (payload) => ({
    type: RECEIVE_CHILD,
    payload
});

export const createChild = (child) => disptach => {
    APIUtils.createChild(child).then(child => {
        disptach(receiveChild(child));
    });
};