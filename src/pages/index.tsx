import { Todo } from "@/types/todos";

export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const projects = await res.json();

  return { props: { projects } };
}

export default function Index({ projects }: { projects: Todo[] }) {
  return (
    <ul className="p-5">
      {projects.map((project) => (
        <li className="border-b border-white/40 p-4" key={project.id}>
          {project.title}
        </li>
      ))}
    </ul>
  );
}
