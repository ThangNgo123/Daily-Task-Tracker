import { Toast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  deadline: string;
}

export interface Tasks {
  tasks: Task[];
}
export enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export const TasksList: Task[] = [
  {
    id: "6a93c6a2-ef18-4373-b35e-8b18e9c56d4b",
    title: "Learn NestJS",
    description:
      "NestJS is a framework for building server-side applications with Node.js, leveraging TypeScript. It helps developers create applications with a modular architecture that is scalable and maintainable.",
    priority: Priority.LOW,
    deadline: "12-03-2024",
  },
  {
    id: "9ce5cb10-a9df-47dd-9fac-42859ea0b09e",
    title: "Learn ExpressJS",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It’s one of the most popular frameworks for Node.js",
    priority: Priority.MEDIUM,
    deadline: "12-03-2024",
  },
  {
    id: "84786e8d-1723-4810-bfb2-895f5c1a0102",
    title: "Learn Langchain",
    description:
      "LangChain is an open-source framework designed for building applications that use large language models (LLMs). It provides tools, components, and abstractions that simplify the process of integrating language models with other data sources",
    priority: Priority.HIGH,
    deadline: "12-03-2024",
  },
];

export const storeTasksList = async () => {
  try {
    const jsonValue = JSON.stringify(TasksList);
    await AsyncStorage.setItem("tasks", jsonValue);
  } catch (error) {
    console.log(error);
    Toast.show("Something went wrong for store tasks", { type: "error" });
  }
};
export const getAllTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("tasks");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
    Toast.show("Something went wrong for get tasks", { type: "error" });
  }
};

export const getTaskById = async (id: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem("tasks");
    const tasks = jsonValue != null ? JSON.parse(jsonValue) : null;
    return tasks.find((task: Task) => task.id === id);
  } catch (error) {
    console.log(error);
    Toast.show("Something went wrong for get tasks", { type: "error" });
  }
};
export const addTask = async (newTask: Task) => {
  try {
    const tasks = await getAllTasks();
    const updatedTasks = tasks ? [...tasks, newTask] : [];
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    Toast.show("Task added successfully", { type: "success" });
  } catch (error) {
    console.log(error);
    Toast.show("Something went wrong for add task", { type: "error" });
  }
};
export const updatedTasks = async (updatedTask: Task) => {
  try {
    const tasks = await getAllTasks();
    const updatedTasks = tasks.map((task: Task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    Toast.show("Task updated successfully", { type: "success" });
  } catch (error) {
    console.log(error);
    Toast.show("Something went wrong for update task", { type: "error" });
  }
};

export const deleteTask = async (id: string) => {
  try {
    const tasks = await getAllTasks();
    const updatedTasks = tasks.filter((task: Task) => task.id !== id);
    await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    Toast.show("Task deleted successfully", { type: "success" });
  } catch (error) {
    console.log(error);
    Toast.show("Something went wrong for delete task", { type: "error" });
  }
};
