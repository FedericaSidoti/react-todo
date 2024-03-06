import { Spell } from "../types";
import AddSpellAsTask from "./AddSpellAsTask";
import { useTodo } from "./Context";

export function SpellList() {
    const { spells } = useTodo();

    const spellListItems: JSX.Element[] = spells.map(
        (spell: Spell, index: number) => {
            return (
                <li key={index} className="spell">
                    <div className="spell-title">
                        <p className="spell-name">{spell.name}</p>
                        <AddSpellAsTask spell={spell} />
                    </div>

                    <p>{spell.description}</p>
                </li>
            );
        }
    );

    return (
        <div className="spellList">
            <ul>{spellListItems}</ul>
        </div>
    );
}
