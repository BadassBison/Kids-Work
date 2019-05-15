import { UPDATE_FILTER, CLEAR_FILTER } from '../../actions/filter_actions';
import {merge} from 'lodash';

const noFilters = {child: null, chore_status: null};
const filterReducer = (state = noFilters, action) => {
    Object.freeze(state);

    switch (action.type) {
        case UPDATE_FILTER:
            const newState = merge({}, state);
            newState[action.filter.field] = action.filter.value;
            return newState;
        case CLEAR_FILTER:
            return noFilters;
        default:
            return state;
    }
};

export default filterReducer;