import Link from "next/link";
import dynamic from "next/dynamic";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/resume.pdf": {
    name: "résumé",
  },
};

const DynamicDarkModeToggle = dynamic(
  () => import("app/components/dark-mode-toggle"),
  {
    ssr: false,
  }
);

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative w-4/5 inline-flex"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="float-right inline-flex mt-1">
          <div className="mr-2">
            <DynamicDarkModeToggle />
          </div>
        </div>
      </div>
    </aside>
  );
}
