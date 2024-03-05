export interface Spell {
    id: string;
    name: string;
    description: string;
}

export type SpellListType = Spell[];

export interface SpellListProps {
    spells: Spell[];
}
