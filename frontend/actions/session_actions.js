import * as APIUtils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const signoutCurrentUser = () => ({
    type: SIGNOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const postUser = user => dispatch => {
    return APIUtils.postUser(user).then(curUser => dispatch(receiveCurrentUser(curUser))
    ,( error => dispatch(receiveErrors(error.responseJSON))))
}

export const deleteUser = userId => dispatch => {
    return APIUtils.deleteUser(userId).then(() => dispatch(signoutCurrentUser()))
}

export const postSession = user => dispatch => {
    // if(window.localStorage.getItem('favoritesList')){
    //     dispatch(receiveCurrentUser(JSON.parse(window.localStorage.getItem('favoritesList'))));
    // }
    // else {
        return APIUtils.postSession(user)
    .then(curUser => {
        window.localStorage.setItem('favoritesList',JSON.stringify(curUser));
        dispatch(receiveCurrentUser(curUser));
    })
    ,(error => {
        dispatch(receiveErrors(error.responseJSON))
    })  
    // }

}

export const deleteSession = () => dispatch => {
    window.localStorage.removeItem('favoritesList');
    return APIUtils.deleteSession().then(() => dispatch(signoutCurrentUser()))
}