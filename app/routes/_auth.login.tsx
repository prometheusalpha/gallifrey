import { Group, Paper, PaperProps, Text } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { GoogleButton } from "~/components/GoogleButton";

export async function loader() {
  return null;
}

export default function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Mantine, {type} with
        </Text>

        <Group grow mb="md" mt="md">
          <GoogleButton>Login With Google</GoogleButton>
        </Group>
      </Paper>
    </div>
  );
}
