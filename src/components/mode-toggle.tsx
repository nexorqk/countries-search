import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="relative">
      <div
        className="hover:text-neutral-400 dark:hover:text-gray-400 cursor-pointer transition p-4"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <div className="flex items-center gap-2 ">
            <Sun className="h-[1.2rem] w-[1.2rem]" />
            <p className="hover:red">Light Mode</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Moon />
            <p>Dark Mode</p>
          </div>
        )}
      </div>
    </div>
  );
}
