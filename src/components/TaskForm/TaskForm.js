import React from "react";
import { Layout } from "./TaskForm.styled";
import { Form, Formik, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addTask } from "../../redux/taskSlice";

export function TaskForm() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    const handleAddTask = (values, { resetForm }) => {
        const { text } = values;

        if (tasks.some(task => task.text === text)) {
            alert(`${text} is already in tasks!`);
            return;
        }

        const newTask = {
            id: nanoid(),
            text,
        };

        dispatch(addTask(newTask));
        resetForm();
    };

    return (
        <Layout> 
            <Formik
                initialValues={{text: ''}}
                onSubmit={handleAddTask}>
                    <Form>
                        <label htmlFor="text">Please type your task here</label>
                        <b> </b>
                        <Field type="text" id="text" name="text" required />
                        <b> </b>
                        <button type="submit">Add task</button>
                    </Form>
            </Formik>
        </Layout>
    );
}