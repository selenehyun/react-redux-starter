import * as types from '../actions/actionTypes';
import { formatDate } from '../services/date-service';

const initState = {
    now: formatDate(new Date())
};

const dateReducer = (state = initState, action) => {
    switch (action.type) {
        case types.UPDATE_DATE:
            return {
                ...state,
                now: action.payload
            }
        default:
            return state;
    }
}

export default dateReducer;