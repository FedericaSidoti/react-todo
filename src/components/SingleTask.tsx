import { SingleTaskProps } from "../types";
import RemoveSpellAsTask from "./RemoveSpellAsTask";

export function SingleTask({ task }: SingleTaskProps) {
    return (
        <>
            <p>{task.name}</p>
            <RemoveSpellAsTask taskID={task.id} />
        </>
    );
}
