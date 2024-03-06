import { Spell } from "../types";
import { useTodo } from "./Context";
import { SingleSpell } from "./SingleSpell";

export function SpellList() {
    const { spells } = useTodo();

    const spellListItems: JSX.Element[] = spells.map(
        (spell: Spell, index: number) => {
            return (
                <li key={index} className="spell">
                    <SingleSpell spell={spell} />
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
