import sessionErrorsReducer from './session_errors_reducer';
import entitiesErrorsReducer from './entities_errors_reducer'
import {combineReducers} from 'redux';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    entitiesErrors: entitiesErrorsReducer
})

export default errorsReducer;