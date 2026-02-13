import { useTheme } from "../contexts/theme-context";

export function ThemedText() {
  const { theme } = useTheme();

  const gradientText =
    theme === "light"
      ? "font-bold bg-linear-to-r from-(--gradient-blue) to-(--gradient-pink) text-transparent bg-clip-text"
      : "text-white";

  return { gradientText };
}