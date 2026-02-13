import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../contexts/theme-context";
import { ThemedText } from "../types/themed-text";
import { Icon } from "./icon";
import { useEffect, useRef, useState } from "react";
import { DropdownMenu } from "./dropdown-menu";

export function Layout() {
    const { theme, toggleTheme } = useTheme();
    const { gradientText } = ThemedText();
    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Fechar ao clicar fora
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="bg-(--bg) text-(--text) min-h-screen transition-colors">

            <nav className="flex flex-row items-center bg-(--bg-2) border-(--border) border-b text-(--text) px-4 h-14">

                {/* --- MENU DESKTOP --- */}
                <div className="hidden md:flex ml-8 flex-1 gap-4">
                    <Link to="/" className="flex">
                        <span className={`font-bold ${gradientText}`}>
                            Connectia
                        </span>
                        <Icon name="network_intel_node" size={24} />
                    </Link>
                </div>

                {/* --- MOBILE: LOGO + HAMBURGUER --- */}
                <div className="flex md:hidden flex-1">
                    <button onClick={() => setHamburgerOpen(true)}>
                        <MenuIcon className="text-(--text)" sx={{ fontSize: 32 }} />
                    </button>

                    <Link to="/" className="flex ml-4 items-center">
                        <span className={`font-bold ${gradientText}`}>
                            Connectia
                        </span>
                        <Icon name="network_intel_node" size={24} />
                    </Link>
                </div>

                {/* --- Botão Conta (Desktop e Mobile) --- */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMenuOpen(prev => !prev)}
                        className="flex items-center gap-1 hover:opacity-80 hover:cursor-pointer"
                    >
                        Conta <AccountCircleIcon sx={{ fontSize: 32 }} className="text-(--icon)" />
                    </button>
                </div>
            </nav>

            {/* ---- MENU CONTA ---- */}
            <DropdownMenu
                open={menuOpen}
                menuRef={menuRef}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            {/* ---- MENU MOBILE LATERAL ---- */}
            {hamburgerOpen && (
                <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setHamburgerOpen(false)}>
                    <div
                        className="absolute left-0 top-0 h-full w-64 bg-(--bg-2) text-(--text) p-6 shadow-xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg font-bold">Menu</span>
                        </div>

                        <nav className="flex flex-col gap-4 text-lg">
                            <Link to="/" onClick={() => setHamburgerOpen(false)}>Home</Link>
                        </nav>
                    </div>
                </div>
            )}

            <main className="mt-4">
                <Outlet />
            </main>
        </div>
    );
}