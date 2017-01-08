import { combineReducers } from 'redux'
import user from './user-reducer'
import date from './date-reducer'
import ui from './ui-reducer'
import { routerReducer } from 'react-router-redux'
export default combineReducers({
    user,
    date,
    ui, 
    routing: routerReducer
})