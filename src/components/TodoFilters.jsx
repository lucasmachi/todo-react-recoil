import { useRecoilState, useRecoilValue } from "recoil";
import { todoFilterState, todosState } from "../atoms/todoAtoms";

const filters = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendentes" },
  { value: "completed", label: "Concluídas" }
];

export default function TodoFilters() {
  const [activeFilter, setActiveFilter] = useRecoilState(todoFilterState);
  const todos = useRecoilValue(todosState);

  const counts = {
    all: todos.length,
    pending: todos.filter((todo) => !todo.completed).length,
    completed: todos.filter((todo) => todo.completed).length
  };

  return (
    <div className="filters" aria-label="Filtrar tarefas">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`filter-button ${activeFilter === filter.value ? "is-active" : ""}`}
          onClick={() => setActiveFilter(filter.value)}
          aria-pressed={activeFilter === filter.value}
        >
          {filter.label}
          <span className="filter-count">
            {counts[filter.value]}
          </span>
        </button>
      ))}
    </div>
  );
}