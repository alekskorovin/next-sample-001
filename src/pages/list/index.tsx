import { Todo } from "@/types/todos";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const list = await res.json();

  return { props: { list } };
}

export default function ListPage({ list }: { list: Todo[] }) {
  return (
    <ul className="p-5 w-full">
      {list.map(({ id, title, completed }: Todo) => (
        <li key={id} className="p-5 border-b border-white/40">
          <Link href={`/list/${id}`}>
            <p>App - Todo #{id}</p>
            <p>{title}</p>
            <p>was completed: {completed}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
