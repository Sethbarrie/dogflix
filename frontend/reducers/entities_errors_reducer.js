import {
    RECEIVE_ALL_MOVIES,
    RECEIVE_MOVIE,
    RECEIVE_MOVIE_ERRORS,
    INITIALIZE_CAROUSEL,
    ADD_CAROUSEL_ROW,
    RECEIVE_CURRENT_MOVIE
} from '../actions/movie_actions';

const EntitiesErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_MOVIE:
            return [];
        case RECEIVE_ALL_MOVIES:
            return [];
        case INITIALIZE_CAROUSEL:
            return [];
        case ADD_CAROUSEL_ROW:
            return [];
        case RECEIVE_CURRENT_MOVIE:
            return [];
        case RECEIVE_MOVIE_ERRORS:
            return action.errors;
        default:
            return oldState;
    }
};

export default EntitiesErrorsReducer;