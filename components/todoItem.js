import React, { Fragment, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { MdCheck, MdDelete } from 'react-icons/md';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { removeTodo, updateTodo } from '../states/todos';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [todo.status]);

  setTimeout(() => {
    setIsShowing(true);
  }, '300');

  const handleDelete = () => {
    setIsShowing(false);
    setTimeout(() => {
      dispatch(
        removeTodo(todo.id),
      );
      toast.success('Todo deleted successfully');
    }, '300');
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
    dispatch(updateTodo({ ...todo, status: isChecked ? 'incomplete' : 'complete' }));
  };

  function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="ease-out"
      enterFrom="opacity-0 scale-75"
      enterTo="opacity-100 scale-100"
      leave="ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-75"
    >
      <div className="bg-slate-800 rounded-md my-2 p-4 shadow-md shadow-slate-500 flex items-center justify-between transition-all">
        <div>
          <p className={cn(
            'font-bold text-xl text-slate-50',
            isChecked
              ? 'line-through text-slate-400'
              : 'no-underline',
          )}>{todo.title}</p>
          <p className="text-sm text-slate-50">
            {format(new Date(todo.time), 'p,MM/dd/yyyy')}
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={handleDelete} className="bg-slate-50 text-xl p-1 rounded-md hover:bg-red-400">
            <MdDelete />
          </button>
          <button type="button" onClick={handleCheck} className={cn(
            'text-xl p-1 rounded-md hover:bg-green-400',
            todo.status === 'complete'
              ? 'bg-green-400'
              : 'bg-slate-50',
          )}
          >
            <MdCheck />
          </button>
        </div>
      </div>
    </Transition >
  );
};

export default TodoItem;
