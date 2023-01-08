import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  status: 'all',
};

const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateFilterStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { addTodo, removeTodo, updateFilterStatus } = todoListSlice.actions;

export default todoListSlice.reducer;
