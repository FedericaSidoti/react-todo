import { SingleTaskProps } from "../types";
import RemoveSpellAsTask from "./RemoveSpellAsTask";

export function SingleTask({ task }: SingleTaskProps) {
    return (
        <>
            <div className="wrap-task">
                <p>{task.name}</p>
                <RemoveSpellAsTask taskID={task.id} />
            </div>
            <p className="task-des">{task.description}</p>
        </>
    );
}
