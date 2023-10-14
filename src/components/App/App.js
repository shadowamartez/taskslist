import React from "react"
import { GlobalStyles } from "../GlobalStyles";
import { TaskForm } from "../TaskForm/TaskForm";
import {TaskFilter} from "../TaskFilter/TaskFilter";
import { TaskList } from "../TaskList/TaskList";
import { Layout } from "./App.styled";

export function App() {
  return (
    <Layout>
      <h1>Add a task</h1>
      <TaskForm />
      <TaskFilter />
      <TaskList />
      <GlobalStyles></GlobalStyles>
    </Layout>
  );
};
