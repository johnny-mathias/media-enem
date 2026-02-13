import type { RefObject } from "react";
import { Link } from "react-router-dom";

interface DropdownMenuProps {
    open: boolean;
    menuRef: RefObject<HTMLDivElement | null>;
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export function DropdownMenu({ open, menuRef, theme, toggleTheme }: DropdownMenuProps) {
    if (!open) return null;

    return (
        <div
            ref={menuRef}
            className="
        absolute right-4 mt-2 w-44
        bg-(--bg) text-(--text)
        border border-(--border-2)
        shadow-lg rounded-2xl
        py-2
        transition-colors
      "
        >
            <Link to={"/usuario"} className="block w-full rounded-t-2xl text-left px-4 py-2 hover:bg-(--select)">
                Perfil
            </Link>

            <button
                onClick={toggleTheme}
                className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-(--select) transition hover:cursor-pointer"
            >
                <span>Tema:</span>

                {theme === "light" ? (
                    <>
                        <span>Escuro</span>
                        <span className="material-symbols-outlined">dark_mode</span>
                    </>
                ) : (
                    <>
                        <span>Claro</span>
                        <span className="material-symbols-outlined">light_mode</span>
                    </>
                )}
            </button>


            <button className="block w-full rounded-b-2xl text-left px-4 py-2 hover:bg-(--select)">
                Logout
            </button>
        </div>
    );
}