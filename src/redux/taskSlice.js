import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: { tasks: [], filter: '' },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        deleteAllTasks: (state) => {
            state.tasks = [];
        },
        editTask: (state, action) => {
            const { id, newText } = action.payload;
            const task = state.tasks.find((task) => task.id === id);
            if (task) {
                task.text = newText;
            }
        }
    }
});

export const { addTask, deleteTask, toggleTask, setFilter, deleteAllTasks, editTask } = taskSlice.actions; 
export default taskSlice.reducer; 

