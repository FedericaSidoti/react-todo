import { useTodo } from "./Context";
import RemoveSpellAsTask from "./RemoveSpellAsTask";

export function Tasks() {
    const { tasks } = useTodo();
    const tasknames = tasks.map((task) => {
        return (
            <li>
                <p>{task.name}</p>
                <RemoveSpellAsTask taskID={task.id} />
            </li>
        );
    });
    return <ul className="spells-todo"> {tasknames} </ul>;
}
