import React from "react"
import { GlobalStyles } from "../GlobalStyles";
import { TaskForm } from "../TaskForm/TaskForm";
import {TaskFilter} from "../TaskFilter/TaskFilter";
import { TaskList } from "../TaskList/TaskList";

export function App() {
  return (
    <div>
      <h1>Add a task</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
      <GlobalStyles></GlobalStyles>
    </div>
  );
};
