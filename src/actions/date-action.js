import * as actions from './actionTypes';
import { getNow, formatDate } from '../services/date-service';

export const updateDate = () => {
    return {
        type: actions.UPDATE_DATE,
        payload: getNow()
    };
}