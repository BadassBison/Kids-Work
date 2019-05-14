import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors/errors_reducer';
import ui from './ui/ui_reducer';
import entities from './entities/entities_reducer';

const RootReducer = combineReducers({
    entities,
    session,
    errors,
    ui
});

export default RootReducer;