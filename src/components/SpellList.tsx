import axios from "axios";
import { useEffect, useState } from "react";
import { SpellListType } from "../types";

export function SpellList() {
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

    const spellListItems = spells.map((spell, index) => {
        return (
            <li key={index} className="spell">
                <p>{spell.name}</p>
                <p>{spell.description}</p>
            </li>
        );
    });

    return (
        <div className="spellList">
            <h1>Spell List</h1>
            <ul>{spellListItems}</ul>
        </div>
    );
}
