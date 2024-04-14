export const NAVIGATION_ROUTES = [
  { label: "nasze pracę", route: "/nasze-prace" },
  { label: "o nas", route: "/o-nas" },
  { label: "usługi", route: "/uslugi" },
  { label: "nowości", route: "/blog" },
];

//TODO: make links
export const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-16">
        {NAVIGATION_ROUTES.map(({ label, route }) => (
          <li className="font-bold cursor-pointer" key={`${label}`}>
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};
