import React, { createContext, useContext, ReactNode, useState } from "react";
import { Spell } from "../types";

interface TodoContextProps {
    children: ReactNode;
}

const TodoContext = createContext(undefined);

export const TodoProvider: React.FC<TodoContextProps> = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [spells, setSpells] = useState<Spell[]>([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskId: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
    };

    return (
        <TodoContext.Provider value={{ tasks, addTask, removeTask, spells }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return context;
};
