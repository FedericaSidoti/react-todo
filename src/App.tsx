import { useEffect, useState } from "react";
import "./App.scss";
import { SpellList } from "./components/SpellList";
import { ToDo } from "./components/ToDo";
import { SpellListType } from "./types";
import { Header } from "./components/Header";
import axios from "axios";

function App() {
    const [spells, setSpells] = useState<SpellListType>([]);

    useEffect(() => {
        const fetchSpells = async () => {
            try {
                const response = await axios.get(
                    "https://hp-api.onrender.com/api/spells"
                );
                setSpells(response.data);
            } catch (error) {
                console.error("Error fetching spells:", error);
            }
        };

        fetchSpells();
    }, []);
    return (
        <>
            <Header />
            <SpellList spells={spells} />
            <ToDo spells={spells} />
        </>
    );
}

export default App;
