import { useTodo } from "./Context";
import { Spell } from "../types";

const RemoveSpellAsTask = ({ taskID }: { taskID: string }) => {
    const { removeTask } = useTodo();

    const handleRemoveTask = () => {
        removeTask(taskID);
    };

    return (
        <img
            className="btn-add"
            src="../public/img/wand-gif.gif"
            onClick={handleRemoveTask}
        />
    );
};

export default RemoveSpellAsTask;
