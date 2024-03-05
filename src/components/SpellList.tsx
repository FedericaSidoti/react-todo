import { SpellListProps } from "../types";

export function SpellList({ spells }: SpellListProps) {
    const spellListItems = spells.map((spell, index) => {
        return (
            <li key={index} className="spell">
                <div className="spell-title">
                    <p className="spell-name">{spell.name}</p>
                    <img src="../public/img/wand-gif.gif" />
                </div>

                <p>{spell.description}</p>
            </li>
        );
    });

    return (
        <div className="spellList">
            <ul>{spellListItems}</ul>
        </div>
    );
}
