import React, { createContext, useContext, useState, useEffect } from "react";

import { Spell, TodoContextProps, TodoContextValue } from "../types";

import axios from "axios";

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

export const TodoProvider: React.FC<TodoContextProps> = ({ children }) => {
    const [tasks, setTasks] = useState<Spell[]>([]);
    const [spells, setSpells] = useState<Spell[]>([]);

    const addTask = (task: Spell) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (taskID: string) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskID);
        setTasks(updatedTasks);
    };

    const fetchSpells = async () => {
        try {
            const response = await axios.get(
                "https://hp-api.onrender.com/api/spells"
            );
            const spellsData = response.data;
            setSpells(spellsData);
        } catch (error) {
            console.error("Error fetching spells:", error);
        }
    };

    useEffect(() => {
        fetchSpells();
    }, []);

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
