import * as UserAPIUtils from '../util/user_api_util';

export const UPDATE_USER_SETTINGS = 'UPDATE_USER_SETTINGS';
export const UPDATE_FAVORITES = 'UPDATE_FAVORITES';

const updateUserSettings = user => ({
    type: UPDATE_USER_SETTINGS,
    user
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

const updateFavoritesList = userList => ({
    type: UPDATE_FAVORITES,
    userList
})

export const updateAutoplay = user => dispatch => {
    return UserAPIUtils.updateAutoplay(user)
    .then(user => dispatch(updateUserSettings(user))
    ,(errors => dispatch(receiveErrors(errors))))
};

export const fetchFavorites = (userId) => dispatch => {
    return UserAPIUtils.fetchFavorites(userId)
    .then(userList => {
        dispatch(updateFavoritesList(userList.movies))}
    , (errors => console.log(errors)))
}

export const addMovieToFavorites = (userId, movieId) => dispatch => {
    return UserAPIUtils.addMovieToFavorites(userId, movieId)
    .then(userList => {
        dispatch(updateFavoritesList(userList))}
    ,(errors => console.log(errors)))
}

export const removeMovieFromFavorites = (userId, movieId) => dispatch => {
    return UserAPIUtils.removeMovieFromFavorites(userId, movieId)
    .then(userList => {
        dispatch(updateFavoritesList(userList))}
    ,(errors => console.log(errors)))
}