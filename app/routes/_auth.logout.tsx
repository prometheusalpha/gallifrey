import { LoaderArgs } from "@remix-run/node";

import { authenticator } from "~/services/auth.server";

export let loader = async ({ request }: LoaderArgs) => {
  return authenticator.logout(request, { redirectTo: "/" });
};

export default function Callback() {
  return <>You are not supposed to see this.</>;
}
