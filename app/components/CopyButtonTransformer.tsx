import { CopyButton, Button } from "@mantine/core";

const CopyButtonTransformer = ({ value }: { value: string }) => {
  return (
    <CopyButton value={value}>
      {({ copied, copy }) => (
        <Button
          color={copied ? "teal" : "blue"}
          variant="subtle"
          onClick={copy}
        >
          {copied ? "Done" : "Copy"}
        </Button>
      )}
    </CopyButton>
  );
};

export default CopyButtonTransformer;
