import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoModal from './todoModal';
import { updateFilterStatus } from '../states/todos';

const AppHeader = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todoList.status);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="rounded-md bg-orange-500 px-6 py-2 text-slate-50"
      >
        Add Task
      </button>
      <select
        className="rounded-md bg-slate-200 px-4 py-2"
        id="status"
        onChange={(e) => updateFilter(e)}
        value={filterStatus}
      >
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </select>
      <TodoModal open={modalOpen} close={() => setModalOpen(false)} />
    </div>
  );
};

export default AppHeader;
