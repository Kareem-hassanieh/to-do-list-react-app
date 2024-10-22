
import {create} from 'zustand';

const useTodoStore = create((set) => ({
  todoList: [
    {
      id: 1,
      title: "laundry",
      priority: 2,
      task: 'Do laundry',
      dueDate: '2024-10-30', 
    },
    {
      id: 2,
      title: "code",
      priority: 3,
      task: 'Complete React project',
      dueDate: '2024-11-01', 
    },
    {
      id: 3,
      title: "shopping",
      priority: 1,
      task: 'Grocery shopping',
      dueDate: '2024-10-25', 
    },
  ],

  addTodo: (newTodo) => set((state) => ({
    todoList: [...state.todoList, newTodo],
  })),

  deleteToDo:(id) =>set((state) => ({
    todoList: state.todoList.filter((todo) => todo.id!== id),
  })),

  
}));

export default useTodoStore;
