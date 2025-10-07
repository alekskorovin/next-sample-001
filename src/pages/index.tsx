export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
  const projects = await res.json();

  console.log(projects);
 
  return { props: { projects } }
}

export default function Index({ projects } : { projects: any[] }) {
  return projects.map((project) => <p className="border-b border-black/10 py-4" key={project.id}>{project.title}</p>)
}