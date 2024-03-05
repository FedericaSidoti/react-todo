export interface Spell {
    id: string;
    name: string;
    description: string;
}

export type SpellListType = Spell[];

export interface SpellListProps {
    spells: Spell[];
}

export interface TodoContextValue {
    tasks: Spell[];
    addTask: (task: Spell) => void;
    removeTask: (index: string) => void;
    spells: Spell[]; // Assicurati che `spells` sia correttamente inizializzato
}
