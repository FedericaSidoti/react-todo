import { SingleSpellProps } from "../types";
import AddSpellAsTask from "./AddSpellAsTask";

export function SingleSpell({ spell }: SingleSpellProps) {
    return (
        <>
            <div className="spell-title">
                <p className="spell-name">{spell.name}</p>
                <AddSpellAsTask spell={spell} />
            </div>
            <p>{spell.description}</p>
        </>
    );
}
