import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from "react";
import { Spell } from "../types";
import axios from "axios";
import { TodoContextValue } from "../types";

interface TodoContextProps {
    children: ReactNode;
}

const TodoContext = createContext<TodoContextValue | undefined>(undefined);

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

    const fetchSpells = async () => {
        try {
            const response = await axios.get(
                "https://hp-api.onrender.com/api/spells"
            );
            const spellsData = response.data; // Array di incantesimi
            setSpells(spellsData);
        } catch (error) {
            console.error("Error fetching spells:", error);
        }
    };

    useEffect(() => {
        fetchSpells();
    }, []);

    // Restituisce il context provider
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
