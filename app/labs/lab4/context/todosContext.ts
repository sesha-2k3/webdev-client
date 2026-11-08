import { createContext, createElement, useContext, useState, type ReactNode } from "react";

export type ContextTodo = {
  id: string;
  title: string;
};

type TodosContextValue = {
  todos: ContextTodo[];
  todo: ContextTodo;
  setTodo: (todo: ContextTodo) => void;
  addTodo: (todo: ContextTodo) => void;
  updateTodo: (todo: ContextTodo) => void;
  deleteTodo: (id: string) => void;
};

const emptyTodo: ContextTodo = { id: "-1", title: "Learn React Context" };

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ContextTodo[]>([
    { id: "1", title: "Hit the gym" },
    { id: "2", title: "Meal prep" },
    { id: "3", title: "Stretch" },
  ]);
  const [todo, setTodo] = useState<ContextTodo>(emptyTodo);
  const addTodo = (newTodo: ContextTodo) => {
    setTodos([...todos, { ...newTodo, id: crypto.randomUUID() }]);
    setTodo(emptyTodo);
  };
  const updateTodo = (updated: ContextTodo) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    setTodo(emptyTodo);
  };
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return createElement(
    TodosContext.Provider,
    { value: { todos, todo, setTodo, addTodo, updateTodo, deleteTodo } },
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
