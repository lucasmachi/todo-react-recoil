
import { useRecoilState, useRecoilValue } from "recoil";
import { ListTodo } from "lucide-react";
import { todosState } from "../atoms/todoAtoms";
import { filteredTodosState } from "../selectors/filteredTodosSelector";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  function handleToggle(id) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function handleRemove(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">
          <ListTodo size={25} />
        </span>

        <p>
          {todos.length === 0
            ? "Sua lista está vazia"
            : "Nenhuma tarefa encontrada"}
        </p>

        <span>
          {todos.length === 0
            ? "Adicione uma tarefa para começar."
            : "Experimente selecionar outro filtro."}
        </span>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      ))}
    </ul>
  );
}
