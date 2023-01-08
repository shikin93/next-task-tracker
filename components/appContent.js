import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todoItem';

const AppContent = () => {
  const todoList = useSelector((state) => state.todoList.todos);
  const filterStatus = useSelector((state) => state.todoList.status);

  const filteredTodoList = todoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  console.log(todoList);

  return (
    <div className="mt-4">
      {
        filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="bg-slate-100 rounded-md text-center text-slate-500 py-4">
            No Tasks
          </div>
        )
      }
    </div>
  );
};

export default AppContent;
