import "./form.css";
import { useState } from "react";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input
        className="input-form"
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button className="button-form" onClick={() => addTodo(todo)}>
        Enviar
      </button>
    </div>
  );
};

export default Form;
