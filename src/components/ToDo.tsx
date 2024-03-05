import { useTodo } from "./Context";
import RemoveSpellAsTask from "./RemoveSpellAsTask";

export function ToDo() {
    const { tasks } = useTodo();
    const tasknames = tasks.map((task) => {
        return (
            <li>
                <p>{task.name}</p>
                <RemoveSpellAsTask taskID={task.id} />
            </li>
        );
    });
    return (
        <div className="todo">
            <div className="todo-header">
                <p>Property of: Hogwarts Library</p>
                <p>
                    All the books in Hogwarts Library are protected by the Theft
                    Protection Charm and the Eatslugs Curse will be invoked
                    automatically as a result for damaging this book.
                </p>
            </div>
            <div className="todo-list">
                <p>
                    A little gift for you, Harry: click on the wand and you can
                    add or remove tasks from the list, so we can practice on
                    them later. I know you sucks in Charms. Love, Hermione
                </p>
                <ul className="spells-todo">{tasknames}</ul>
            </div>
        </div>
    );
}
