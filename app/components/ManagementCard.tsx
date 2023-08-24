import { Card, Title } from "@mantine/core";
import { Link } from "@remix-run/react";

const ManagementCard = ({
  title,
  link,
  enable,
}: {
  title: string;
  link: string;
  enable: boolean;
}) => (
  <>
    {enable && (
      <Link to={link}>
        <Card shadow="sm" padding="lg" radius="lg" withBorder>
          <Title order={2} weight={500}>
            {title}
          </Title>
        </Card>
      </Link>
    )}
  </>
);

export default ManagementCard;
