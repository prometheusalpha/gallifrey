import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

export default function useTheme() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return {
    colorScheme,
    toggleColorScheme,
  };
}
