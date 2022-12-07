import { List, Item, Content, ButtonToggleDone, ButtonRemove } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <ButtonToggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </ButtonToggleDone>
        <Content done={task.done}>
          {task.content}
        </Content>
        <ButtonRemove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </ButtonRemove>
      </Item>
    ))}
  </List>
);

export default Tasks;
