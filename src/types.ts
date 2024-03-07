import { ReactNode } from "react";

export interface Spell {
    id: string;
    name: string;
    description: string;
}

export type SpellListType = Spell[];

export interface SpellListProps {
    spells: SpellListType;
}

export interface TodoContextValue {
    tasks: Spell[];
    addTask: (task: Spell) => void;
    removeTask: (index: string) => void;
    spells: SpellListType; // Assicurati che `spells` sia correttamente inizializzato
}

export interface TodoContextProps {
    children: ReactNode;
}

export interface SingleSpellProps {
    spell: Spell;
}

export interface SingleTaskProps {
    task: Spell;
}
