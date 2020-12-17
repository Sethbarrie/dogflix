import * as UserAPIUtils from '../util/user_api_util';

export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';

const updateUserSettings = user => ({
    type: UPDATE_USER_SETTINGS,
    user
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const updateAutoplay = user => dispatch => {
    return UserAPIUtils.updateAutoplay(user)
    .then(user => dispatch(updateUserSettings(user))
    ,(errors => dispatch(receiveErrors(errors))))
};