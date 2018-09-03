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
        default:
            return state
    }
}

export default todos
