import { createSlice, current, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo", // identity of the slice

    // initiat the state object to the given values
    initialState: {
        todos: [],
    },

    // the functions that will change the state
    reducers: {
        // functionName : (prevState, object containing parameters)
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text ,
            };
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            const currentTodoId = action.payload;
            state.todos = state.todos.filter(
                (todo) => todo.id !== currentTodoId
            );
        },
        editTodo: (state, action) => {
            const updatedTodo = action.payload;

            // Find the index of the todo to be updated
            const todoIndex = state.todos.findIndex(
                (todo) => todo.id === updatedTodo.id
            );

            // Check if the todo is found
            if (todoIndex !== -1) {
                // Create a new array with the updated todo
                state.todos = [
                    ...state.todos.slice(0, todoIndex), // Elements before the updated todo
                    { ...state.todos[todoIndex], text: updatedTodo.text }, // Updated todo
                    ...state.todos.slice(todoIndex + 1), // Elements after the updated todo
                ];
            }
        },
    },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
