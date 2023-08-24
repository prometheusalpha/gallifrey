import { Center, Navbar, Stack } from "@mantine/core";
import { Link } from "@remix-run/react";
import { Icon3dCubeSphere } from "@tabler/icons-react";
import MenuItem, { MenuItemProps } from "./MenuItem";
import LogoutButton from "./LogoutButton";
import ToggleDarkMode from "./ToggleDarkMode";

const data: MenuItemProps[] = [
  {
    label: "Products",
    children: [
      {
        label: "ODS",
        link: "/products/ods",
        children: [
          {
            label: "API",
            link: "/products/ods/api",
          },
        ],
      },
      {
        label: "Archive",
        link: "/products/archive",
        children: [
          {
            label: "Demo",
            link: "/products/archive/demo",
          },
        ],
      },
    ],
  },
  {
    label: "Management",
    children: [
      {
        label: "ODS",
        link: "/management/ods",
        children: [
          {
            label: "ODS Monitoring",
            children: [
              { label: "Caches", link: "/management/ods/monitor/cache" },
              { label: "Lost part", link: "/management/ods/monitor/lost" },
              { label: "Dashboard", link: "/management/ods/monitor/dashboard" },
            ],
          },
          {
            label: "ODS Configuration",
            children: [
              { label: "Notify", link: "/management/ods/config/notify" },
            ],
          },
        ],
      },
      {
        label: "Archive",
        link: "/management/archive",
        children: [
          {
            label: "Archive Monitoring",
            children: [
              { label: "Example", link: "/management/archive/monitor/example" },
            ],
          },
          {
            label: "Archive Config",
            children: [
              { label: "View", link: "/management/archive/config/view" },
              { label: "Worker", link: "/management/archive/config/worker" },
            ],
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  const links = data.map((item) => <MenuItem info={item} key={item.label} />);
  return (
    <Navbar
      hidden={true}
      hiddenBreakpoint={"xs"}
      width={{ xs: 200, sm: 250 }}
      p="md"
    >
      <Center>
        <Link to="/">
          <Icon3dCubeSphere size="32" stroke={1.5} />
        </Link>
      </Center>
      <Navbar.Section grow mt={20} className="overflow-y-auto">
        <Stack justify="center" spacing={3}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <ToggleDarkMode />
        <LogoutButton />
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
