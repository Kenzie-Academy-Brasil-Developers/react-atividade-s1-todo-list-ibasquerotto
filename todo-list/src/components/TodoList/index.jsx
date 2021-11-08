import "./list.css";

const TodoList = ({ List, handleTodo }) => {
  return (
    <ul>
      {List.map((todo) => (
        <li className="input-list" key={todo}>
          {todo}
          <button className="button-list" onClick={() => handleTodo(todo)}>
            Concluir tarefa
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
