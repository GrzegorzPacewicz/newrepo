import "./style.css";

const Tasks = ({ tasks, hideDoneTasks } ) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li
                className={`tasks__container ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}
            >
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__item${task.done ? " tasks__item--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;