import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Plus } from "lucide-react";
import { todosState } from "../atoms/todoAtoms";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const setTodos = useSetRecoilState(todosState);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        completed: false
      }
    ]);

    setTitle("");
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-title">
        Nova tarefa
      </label>

      <input
        id="todo-title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="O que você precisa fazer?"
        maxLength={120}
      />

      <button className="add-button" type="submit">
        <Plus size={18} />
        <span>Adicionar</span>
      </button>
    </form>
  );
}