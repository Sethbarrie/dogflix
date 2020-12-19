import * as MovieAPIUtil from '../util/movie_api_utils';

export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_ALL_MOVIES = "RECEIVE_ALL_MOVIES";
export const RECEIVE_PREVIEW_MOVIE = 'RECEIVE_PREVIEW_MOVIE';
export const RECEIVE_CURRENT_MOVIE = 'RECEIVE_CURRENT_MOVIE';
export const INITIALIZE_CAROUSEL = 'INITIALIZE_CAROUSEL';
export const ADD_CAROUSEL_ROW = 'ADD_CAROUSEL_ROW';
export const RECEIVE_MOVIE_ERRORS = "RECEIVE_MOVIE_ERRORS";
export const SET_CURRENT_SCREEN = 'SET_CURRENT_SCREEN';

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const receiveAllMovies = movies => {
    return {
    type: RECEIVE_ALL_MOVIES,
    movies
}};

const previewMovie = movie => ({
    type: RECEIVE_PREVIEW_MOVIE,
    movie
});

const currentMovie = movie => ({
    type: RECEIVE_CURRENT_MOVIE,
    movie
});

const initialCarousel = movies => ({
    type: INITIALIZE_CAROUSEL,
    movies
});

const addRow = movies => ({
    type: ADD_CAROUSEL_ROW,
    movies
});

const receiveMovieErrors = errors => ({
    type: RECEIVE_MOVIE_ERRORS,
    errors
});

export const fetchMovie = movieId => dispatch => {
    return MovieAPIUtil.fetchMovie(movieId)
    .then( movie => {
        return MovieAPIUtil.fetchMovie(movie.id)
        .then( movie => dispatch(receiveMovie(movie)))
        // return dispatch(receiveMovie(movie))
    }
    ,( errors => dispatch(receiveMovieErrors(errors))))
};

export const fetchMovies = () => dispatch => {
    return MovieAPIUtil.fetchMovies()
    .then( movies => {
        dispatch(receiveAllMovies(movies))}
    ,( errors => dispatch(receiveMovieErrors(errors))))
};

export const initializeCarousel = () => dispatch => {
    return MovieAPIUtil.fetchMovies()
    .then( movies => {
        dispatch(initialCarousel(movies))
    }, ( errors => console.log(errors))
    )
};

export const initializePreview = () => dispatch => {
    return MovieAPIUtil.fetchMovie(Math.floor(Math.random() * Math.floor(50)))
    .then( movie => 
        dispatch(previewMovie(movie))
    ,( errors => console.log(errors))
    )
}

export const addCarouselRow = () => dispatch => {
    return MovieAPIUtil.fetchMovies()
    .then( movies => {
        dispatch(addRow(movies))
    }, ( errors => console.log(errors))
    )
};

export const setCurrentMovie = movie => dispatch => {
    return dispatch(currentMovie(movie));
}