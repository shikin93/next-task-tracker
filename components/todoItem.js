import React, { Fragment, useState } from 'react';
import { format } from 'date-fns';
import { MdCheck, MdDelete } from 'react-icons/md';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../states/todos';

const TodoItem = ({ todo }) => {
  const [isShowing, setIsShowing] = useState(false);
  const dispatch = useDispatch();

  setTimeout(() => {
    setIsShowing(true);
  }, '300');

  const handleDelete = () => {
    setIsShowing(false);
    setTimeout(() => {
      dispatch(
        removeTodo(todo.id),
      );
    }, '300');
  };

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
      <div className="bg-cyan-500 rounded-md my-2 p-4 flex items-center justify-between transition-all">
        <div>
          <p className="font-bold text-xl text-slate-50">{todo.title}</p>
          <p className="text-sm text-slate-50">
            {format(new Date(todo.time), 'p,MM/dd/yyyy')}
          </p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={handleDelete} className="bg-slate-50 text-xl p-1 rounded-md hover:bg-red-500">
            <MdDelete />
          </button>
          <button className="bg-slate-50 text-xl p-1 rounded-md hover:bg-green-500">
            <MdCheck />
          </button>
        </div>
      </div>
    </Transition>
  );
};

export default TodoItem;
