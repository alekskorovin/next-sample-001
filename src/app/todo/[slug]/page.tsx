import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types/todos";

export async function generateStaticParams() {
  const todos = await fetch("https://jsonplaceholder.typicode.com/todos/").then(
    (res) => res.json()
  );

  return todos.map((todo: Todo) => ({
    slug: todo.id.toString(),
  }));
}

export default async function TodoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${slug}`);
  const todo = await res.json();

  return <TodoItem todo={todo} />;
}
