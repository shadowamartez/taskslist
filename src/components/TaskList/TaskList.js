import React, { useState } from "react";
import { LayoutTask } from "./TaskList.styled";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from "redux/taskSlice";

export function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);

    const [editableTaskId, setEditableTaskId] = useState(null);
    const [newText, setNewText] = useState('');

    const filteredTasks = tasks.filter(task => {
        if (filter === "completed") {
            return task.completed;
        } else if (filter === "uncompleted") {
            return !task.completed;
        } else {
            return true; 
        }
    });

    const handleEditTask = (taskId, newText) => {
        dispatch(editTask({ id: taskId, newText }));
        setEditableTaskId(null);
        setNewText('');
    };

    const handleToggleTask = (taskId) => {
        dispatch(toggleTask(taskId));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div>
            {filteredTasks.map(task => (
                <div key={task.id}>
                    {editableTaskId === task.id ? (
                        <LayoutTask>
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                            />
                            <b> </b>
                            <button onClick={() => handleEditTask(task.id, newText)}>Save</button>
                        </LayoutTask>
                    ) : (
                        <LayoutTask>
                            <input type="checkbox" checked={task.completed}
                                onChange={() => handleToggleTask(task.id)}
                            />
                            {task.text}
                            <b> </b>
                            <button onClick={() => setEditableTaskId(task.id)}>Edit</button>
                            <b> </b>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </LayoutTask>
                    )}
                </div>
            ))}
        </div>
    );
}