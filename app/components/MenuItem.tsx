import { Box, Collapse, Stack } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconChevronRight } from "@tabler/icons-react";
import { useState } from "react";

export interface MenuItemProps {
  label: string;
  link?: string;
  children?: MenuItemProps[];
}

export default function MenuItem({ info }: { info: MenuItemProps }) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className="flex items-center p-1 justify-between rounded hover:bg-dark-100 dark:hover:bg-dark-800">
        {info.link ? (
          <Link to={info.link} className="block grow">
            <Box ml="md">{info.label}</Box>
          </Link>
        ) : (
          <Box ml="md">{info.label}</Box>
        )}
        {info.children && (
          <IconChevronRight
            className="transition-transform duration-200 cursor-pointer mx-1"
            size="20"
            stroke={2.5}
            style={{
              transform: opened ? `rotate(90deg)` : "none",
            }}
            onClick={() => setOpened((o) => !o)}
          />
        )}
      </div>
      <Collapse in={opened} className="pl-2">
        <Stack justify="center" spacing={3}>
          {info.children?.map((item) => (
            <MenuItem info={item} key={item.label} />
          ))}
        </Stack>
      </Collapse>
    </>
  );
}
