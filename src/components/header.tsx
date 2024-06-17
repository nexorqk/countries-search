import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="h-20  border-b shadow-md dark:shadow-neutral-900">
      <div className="container h-full flex justify-between items-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Where in the world?
        </h3>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
