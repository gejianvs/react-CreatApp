let key = 0
export const addTodo = values => ({
    type: 'ADD_TODO',
    key: key++,
    ...values
})

export const deliteTodo = key => ({
    type: 'DEL_TODO',
    key

})


