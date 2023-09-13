import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";
import useTheme from "~/composables/useTheme";

export default function ToggleDarkMode() {
  const { colorScheme, toggleColorScheme } = useTheme();

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
