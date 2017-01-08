import * as types from '../actions/actionTypes';

const initState = {
    users: [],
    orderBy: 'name',
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case types.FETCH_USERS_FULFILLED:
            return {
                ...state,
                users: action.payload
            }
        case types.SET_ORDER_BY: 
            return {
                ...state,
                orderBy: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;