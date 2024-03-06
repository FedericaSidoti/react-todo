import { TodoHeader } from "./TodoHeader";
import { Tasks } from "./Tasks";

export function ToDo() {
    return (
        <div className="todo">
            <TodoHeader />
            <div className="todo-list">
                <p>
                    A little gift for you, Harry: click on the wand and you can
                    add or remove tasks from the list, so we can practice on
                    them later. I know you sucks in Charms. Love, Hermione
                </p>
                <Tasks />
            </div>
        </div>
    );
}
