import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types/todos";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();

  const paths = todos.map((todo: Todo) => ({
    params: { id: todo.id.toString() },
  }));

  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo = await res.json();
  return { props: { todo } };
};

export default function Page({ todo }: { todo: Todo }) {
  return <TodoItem todo={todo} />;
}
