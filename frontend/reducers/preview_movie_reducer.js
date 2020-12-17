import {
    RECEIVE_PREVIEW_MOVIE
} from '../actions/movie_actions';
import { randomDescriptor, randomPercent} from '../util/helper'

const moviesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch(action.type){
        case RECEIVE_PREVIEW_MOVIE:
            let newMovie = Object.assign( {} , action.movie);
            newMovie.descriptors = [randomDescriptor(), randomDescriptor(), randomDescriptor()];
            newMovie.matchPercent = randomPercent();
            return newMovie;
        default:
            return oldState;
    }

};

export default moviesReducer;