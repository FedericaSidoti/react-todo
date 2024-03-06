import { useTodo } from "./Context";

const RemoveSpellAsTask = ({ taskID }: { taskID: string }) => {
    const { removeTask } = useTodo();

    const handleRemoveTask = () => {
        removeTask(taskID);
    };

    return (
        <img
            className="btn-add"
            src="/img/wand-gif.gif"
            onClick={handleRemoveTask}
        />
    );
};

export default RemoveSpellAsTask;
