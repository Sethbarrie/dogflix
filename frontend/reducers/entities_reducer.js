import currentMovieReducer from './current_movie_reducer';
import previewMovieReducer from './preview_movie_reducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
    previewMovie: previewMovieReducer,
    currentMovie: currentMovieReducer,
});

export default entitiesReducer;