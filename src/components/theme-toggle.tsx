"use client";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="rounded-full border border-amber-50 px-0.5 py-0.75 dark:bg-[#36429b] bg-[#545151] shadow-lg "
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <FaSun className="h-4 w-4 transition-all duration-500 ease-in-out rotate-0 opacity-100 scale-100 dark:-rotate-90 dark:opacity-0 dark:scale-0" />
      <FaMoon className="h-4 w-4 transition-all duration-500 ease-in-out rotate-90 opacity-0 scale-0 dark:rotate-0 dark:opacity-100 dark:scale-100" />
    </button>
  );
}
