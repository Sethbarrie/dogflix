export const updateAutoplay = users => {
    return $.ajax({
        method: `PATCH`,
        url: `/api/users/${users.id}`,
        data: {users}
    })
}

export const fetchFavorites = userId => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/favorites/:id`
    })
}

export const addMovieToFavorites = (userId, movieId) => {
    return $.ajax({
        method: `GET`,
        url: `/api/users/${userId}/favorites/${movieId}/edit`
    })
}

export const removeMovieFromFavorites = (userId, movieId) => {
    return $.ajax({
        method: `PUT`,
        url: `/api/users/${userId}/favorites/${movieId}`
    })
}

window.addMovieToFavorites = addMovieToFavorites;
window.removeMovieFromFavorites = removeMovieFromFavorites;
window.fetchFavorites = fetchFavorites;