// src/stores/useTodoStore.js
import {create} from 'zustand';

const useTodoStore = create((set) => ({
  todoList: [
    {
      id: 1,
      title: "laundry",
      priority: 2,
      task: 'Do laundry',
      dueDate: '2024-10-30', // Example due date
    },
    {
      id: 2,
      title: "code",
      priority: 3,
      task: 'Complete React project',
      dueDate: '2024-11-01', // Example due date
    },
    {
      id: 3,
      title: "shopping",
      priority: 1,
      task: 'Grocery shopping',
      dueDate: '2024-10-25', // Example due date
    },
  ],
  addTodo: (newTodo) => set((state) => ({
    todoList: [...state.todoList, newTodo],
  })),
}));

export default useTodoStore;
