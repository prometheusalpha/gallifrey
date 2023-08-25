import { Avatar, Group } from "@mantine/core";
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { authenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return user;
}

export default function Index() {
  const user = useLoaderData<typeof loader>();

  return (
    <Layout>
      <Group>
        <Avatar src={user.photos[0].value} alt="it's me" radius="xl" />
        <div>
          <p>{user.displayName}</p>
          <p className="text-xs opacity-70">{user.emails[0].value}</p>
        </div>
      </Group>
    </Layout>
  );
}
