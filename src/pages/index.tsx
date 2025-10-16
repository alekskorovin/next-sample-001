import Link from "next/link";

type NavigationMenuType = {
  link: string;
  title: string;
};

const navigationMenu: NavigationMenuType[] = [
  { link: "/list", title: "Page route. List" },
  { link: "/todo", title: "App route. Todos" },
];

export default function Index() {
  return (
    <ul className="p-5 w-full">
      {navigationMenu.map(({ link, title }: NavigationMenuType) => (
        <li key={link} className="p-5 border-b border-white/40">
          <Link href={link}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
