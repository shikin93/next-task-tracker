import { combineReducers, configureStore } from '@reduxjs/toolkit';
import todoListReducer from './todos';

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
