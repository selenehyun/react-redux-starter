import * as actions from './actionTypes';
import { fetchUsersHttp } from '../services/user-http';
import axios from 'axios';
export const fetchUsers = () => {
    //request here redux-promise way
    // let request = axios.get('/app/data/users.json');
    // return {
    //     type: actions.FETCH_USERS_SUCCESS,
    //     payload: request
    // };

    // return {
    //     type: actions.FETCH_USERS,
    //     payload: new Promise((resolve, reject) => {
    //         setTimeout(function() {
    //             resolve([{name: 'cool!'}])
    //         }, 2000);
    //     })
    // }

    //redux thunk way
    return dispatch => {
        fetchUsersHttp().then(res => {
            dispatch({
                type: actions.FETCH_USERS_FULFILLED,
                payload: res.data
            });
        }).catch(err => {
            dispatch({
                type: actions.FETCH_USERS_FAIL
            });
        })
    }
}


export const setOrderBy = (by) => {
    return {
        type: actions.SET_ORDER_BY,
        payload: by
    }
}