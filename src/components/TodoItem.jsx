import { Check, Trash2 } from "lucide-react";

export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo-item ${todo.completed ? "is-completed" : ""}`}>
      <button
        className="check-button"
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Marcar como pendente" : "Marcar como concluída"}
        aria-pressed={todo.completed}
      >
        {todo.completed && <Check size={15} />}
      </button>

      <span className="todo-title">{todo.title}</span>

      <button
        className="remove-button"
        type="button"
        onClick={() => onRemove(todo.id)}
        aria-label={`Remover tarefa ${todo.title}`}
      >
        <Trash2 size={17} />
      </button>
    </li>
  );
}