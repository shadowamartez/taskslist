import React from "react";
import {LayoutButtons} from "./TaskFilter.styled"
import { useDispatch } from "react-redux";
import { setFilter, deleteAllTasks } from "../../redux/taskSlice";
import { useState } from "react";

export function TaskFilter() {
    const dispatch = useDispatch();
    const [filter, setLocalFilter] = useState('all'); 

    const handleFilterChange = (newFilter) => {
        setLocalFilter(newFilter);
        dispatch(setFilter(newFilter)); 
    };

    const handleDeleteAllTasks = (clearTasks) => {
        dispatch(deleteAllTasks(clearTasks));
    }

    return (
        <div>
            <h2>Your tasks</h2>
            <LayoutButtons>
                <button onClick={() => handleFilterChange("all")}
                    className={filter === "all" ? "active" : " "}>All</button>
                <button onClick={() => handleFilterChange("completed")}
                    className={filter === "completed" ? "active" : " "}>Completed</button>
                <button onClick={() => handleFilterChange("uncompleted")}
                    className={filter === "uncompleted" ? "active" : " "}>Uncompleted</button>
                <button onClick={() => handleDeleteAllTasks()}>Delete all</button>
            </LayoutButtons>
        </div>
    )
};