import React, { useState } from "react";
import { Todo } from "../model";
import { Edit, Delete, Done, CheckCircleOutline } from "@material-ui/icons";
import "./Styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [todoInput, setTodoInput] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleChange = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, todo: todoInput } : item
      )
    );
    setEdit(false);
  };

  return (
    <div className="todos-single">
      {!edit &&
        (todo.isDone ? (
          <s className="todos-single-text">{todo.todo}</s>
        ) : (
          <span className="todos-single-text">{todo.todo}</span>
        ))}

      {edit && (
        <>
          <input
            className="input-single-todo"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <CheckCircleOutline
            className="tick-icon"
            onClick={() => handleChange(todo.id)}
          />
        </>
      )}

      <div>
        <span
          className="icon"
          onClick={() => !edit && !todo.isDone && setEdit(true)}
        >
          <Edit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <Delete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <Done />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
