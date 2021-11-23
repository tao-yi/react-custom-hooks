import { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const useTodos = (initialId?: number) => {
  const [todo, setTodo] = useState<Todo | null | undefined>();
  const [id, setId] = useState<number | undefined>(initialId);

  useEffect(() => {
    if (!id) return;
    fetch("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((response) => response.json())
      .then((json) => setTodo(json));
  }, [id]);

  return { todo, setId };
};

export default useTodos;
