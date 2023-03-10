import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addTodo } from '../states/todos';

const TodoModal = ({ open, close }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please input title');
      return;
    }

    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        }),
      );
      setStatus('incomplete');
      setTitle('');
      toast.success('Task added successfully');
    }

    close(false);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" onClose={close} className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="text-xl font-bold text-slate-500">
                  Add Todo
                </Dialog.Title>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="my-4 w-full rounded-md border border-slate-300 p-2"
                  />
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="mb-10 mt-2 w-full rounded-md p-2"
                  >
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                  </select>
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="rounded-md bg-orange-500 px-4 py-1 text-slate-50"
                    >
                      Add Task
                    </button>
                    <button
                      type="button"
                      onClick={close}
                      className="rounded-md bg-slate-300 px-4 py-2 text-slate-500"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TodoModal;
