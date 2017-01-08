import * as types from '../actions/actionTypes';

const initState = {
    sidebarOn: false
};

const uiReducer = (state = initState, action) => {
    switch (action.type) {
        case types.UI.SIDEBAR_ON_OFF:
            return {
                ...state,
                sidebarOn: !state.sidebarOn
            }
        default:
            return state;
    }
}

export default uiReducer;