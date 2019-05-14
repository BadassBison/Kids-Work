import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_FAMILY_LOGOUT = "RECEIVE_FAMILY_LOGOUT";

export const receiveUserLogin = (userData) => ({
    type: RECEIVE_CURRENT_USER,
    userData
});

export const logoutFamily = () => ({
    type: RECEIVE_FAMILY_LOGOUT
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = (familyData) => dispatch => {
    APIUtil.signup(familyData).then(parent => (
        dispatch(receiveUserLogin(parent))
    ), err => (
        dispatch(receiveErrors(err.response.data))
    ));
};

export const loginParent = (userData) => dispatch => {
    APIUtil.loginParent(userData).then(userData => {
        const { token } = userData.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decodedUser = jwt_decode(token);
        dispatch(receiveUserLogin(decodedUser));
    })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        });
};

export const loginChild = (userData) => dispatch => {
    APIUtil.loginChild(userData).then(userData => {
        const { token } = userData.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decodedUser = jwt_decode(token);
        dispatch(receiveUserLogin(decodedUser));
    })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        });
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutFamily());
};