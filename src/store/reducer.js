import {combineReducers} from 'redux';
import {TOGGLE_GET, SUCCESS_GET, FAILED_GET} from './action';


const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':

            return [
                ...state,
                {
                    key: action.key,
                    name: action.name,
                    email: action.email,
                }
            ]
        case 'DEL_TODO':
            return state.filter(todo=>{
                return todo.key!=action.key
            })
        default:
            return state
    }
}

export default todos

