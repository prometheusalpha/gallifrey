import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/Layout";
import { authenticator } from "~/services/auth.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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
      <div>{user.name}</div>
    </Layout>
  );
}
