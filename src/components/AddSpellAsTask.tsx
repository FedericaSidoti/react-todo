import { useTodo } from "./Context";
import { Spell } from "../types";

const AddSpellAsTask = ({ spell }: { spell: Spell }) => {
    const { addTask } = useTodo();

    const handleAddTask = () => {
        addTask(spell);
    };

    return (
        <img
            className="btn-add"
            src="/img/wand-gif.gif"
            onClick={handleAddTask}
        />
    );
};

export default AddSpellAsTask;
