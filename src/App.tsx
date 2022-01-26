import { useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";
import TodosList from "./components/TodosList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(``);
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo !== ``) {
      setTodos((prevTodo) => [
        ...prevTodo,
        { id: Date.now(), todo, isDone: false },
      ]);
      setTodo(``);
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputFields todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodosList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
