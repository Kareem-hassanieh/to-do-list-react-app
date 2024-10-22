
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
  originalTodoList: [
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
  doneList: [],

  addTodo: (newTodo) => set((state) => ({
    todoList: [...state.todoList, newTodo],
    originalTodoList: [...state.originalTodoList, todo],
  })),

  deleteToDo:(id) =>set((state) => ({
    todoList: state.todoList.filter((todo) => todo.id!== id),
  })),

  moveToDone: (id) => set((state) => {
    const itemToMove = state.todoList.find((todo) => todo.id === id);
    return {
      todoList: state.todoList.filter((todo) => todo.id !== id),
      doneList: [...state.doneList, itemToMove],
    };
  }),

   deleteToDoDone:  (id) =>set((state) => ({
    doneList: state.doneList.filter((tododone) => tododone.id!== id),
  })),

 
  sortTodoList: (criteria, order) => set((state) => {
    const sortedList = [...state.todoList];

    if (criteria === 'priority') {
      sortedList.sort((a, b) => order === 'asc' ? a.priority - b.priority : b.priority - a.priority);
    } else if (criteria === 'dueDate') {
      sortedList.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return order === 'asc' ? dateA - dateB : dateB - dateA;
      });
    }
    
    return { todoList: sortedList };
  }),

  resetTodoList: () => set((state) => ({
    todoList: [...state.originalTodoList] 
  }))


  
}));

export default useTodoStore;
