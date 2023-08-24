import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ToggleDarkMode() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-3 cursor-pointer" onClick={toggleColorScheme}>
      {colorScheme === "dark" ? (
        <IconSun size="24" stroke={1.5} />
      ) : (
        <IconMoon size="24" stroke={1.5} />
      )}
    </div>
  );
}
