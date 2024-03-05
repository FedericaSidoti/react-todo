import { Spell, SpellListProps } from "../types";
import { useTodo } from "./Context";

export function SpellList() {
    const { spells } = useTodo();
    const spellListItems: JSX.Element[] = spells.map(
        (spell: Spell, index: number) => {
            return (
                <li key={index} className="spell">
                    <div className="spell-title">
                        <p className="spell-name">{spell.name}</p>
                        <img src="../public/img/wand-gif.gif" />
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
