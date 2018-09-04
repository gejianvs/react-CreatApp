import { combineReducers } from 'redux'
import reducer from './reducer'
import {TOGGLE_GET, SUCCESS_GET, FAILED_GET} from './action';


function isFetchData(state=false, action) {
    switch (action.type){
        case TOGGLE_GET:
            return !state;
        default:
            return state;
    }
}

function profile(state={}, action) {
    switch (action.type){
        case SUCCESS_GET:
            return action.profile;
        default:
            return state;
    }
}



export default combineReducers({
    reducer,
    isFetchData,
    profile
})
