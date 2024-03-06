import { useTodo } from "./Context";
import { SingleTask } from "./SingleTask";

export function Tasks() {
    const { tasks } = useTodo();
    const tasknames = tasks.map((task) => {
        return (
            <li>
                <SingleTask task={task} />
            </li>
        );
    });
    return <ul className="spells-todo"> {tasknames} </ul>;
}
