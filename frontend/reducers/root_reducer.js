import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

import {combineReducers} from 'redux';
import carouselReducer from './carousel_reducer';

const rootReducer = combineReducers({
    carousel: carouselReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
    session: sessionReducer,
})

export default rootReducer;
