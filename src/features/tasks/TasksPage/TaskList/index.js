import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import { List, Item, Content, ButtonToggleDone, ButtonRemove } from "./styled";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ButtonToggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </ButtonToggleDone>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content} </Link>
          </Content>
          <ButtonRemove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </ButtonRemove>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;