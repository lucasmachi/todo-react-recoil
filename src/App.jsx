
import TodoForm from "./components/TodoForm";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <h1>To-do Web</h1>
        <p>
          Organize suas tarefas e mantenha o controle da sua rotina!
        </p>
      </header>

      <section className="workspace" aria-label="Gerenciador de tarefas">
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </section>
    </main>
  );
}