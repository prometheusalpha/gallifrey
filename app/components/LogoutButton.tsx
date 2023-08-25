import { Group } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconLogout } from "@tabler/icons-react";

export default function LogoutButton() {
  return (
    <div className="p-3">
      <Link to={"/logout"}>
        <Group>
          <IconLogout size="24" stroke={2} />
          Logout
        </Group>
      </Link>
    </div>
  );
}
