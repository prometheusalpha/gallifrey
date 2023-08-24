import { Button } from "@mantine/core";
import { Link } from "@remix-run/react";
import { IconArrowLeft } from "@tabler/icons-react";

export default function BackButton({ link }: { link: string }) {
  return (
    <Button className="my-6" variant="subtle">
      <Link to={link} className="flex items-center gap-4 text-lg">
        <IconArrowLeft size={24} />
        Back
      </Link>
    </Button>
  );
}
