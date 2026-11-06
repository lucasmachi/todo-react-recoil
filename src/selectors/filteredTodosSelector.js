import { selector } from "recoil";
import { todosState, todoFilterState } from "../atoms/todoAtoms";

export const filteredTodosState = selector({
  key: "filteredTodosState",
  get: ({ get }) => {
    const todos = get(todosState);
    const filter = get(todoFilterState);

    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (filter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  }
});