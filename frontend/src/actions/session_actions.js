import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_FAMILY_LOGOUT = "RECEIVE_FAMILY_LOGOUT";

export const logoutFamily = () => ({
    type: RECEIVE_FAMILY_LOGOUT
});

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutFamily());
};