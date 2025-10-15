import { Todo } from "@/types/todos";
import Link from "next/link";

export default async function TodoPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos = await res.json();
  return (
    <ul className="p-5 w-full">
      {todos.map(({ id, title, completed }: Todo) => (
        <li key={id} className="p-5 border-b border-white/40">
          <Link href={`/details/${id}`}>
            <p>App - Todo #{id}</p>
            <p>{title}</p>
            <p>was completed: {completed}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
