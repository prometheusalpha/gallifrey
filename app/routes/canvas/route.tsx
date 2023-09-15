import { Button, Card, Group, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Editor } from "@monaco-editor/react";
import mermaid from "mermaid";
import panzoom from "panzoom";
import { useEffect, useState } from "react";
import useTheme from "~/composables/useTheme";
import { sampleDiagrams } from "./diagrams";

mermaid.initialize({
  startOnLoad: true,
  theme: "dark",
  sequence: {
    useMaxWidth: true,
  },
  flowchart: {
    useMaxWidth: true,
  },
});

export default function Canvas() {
  const { colorScheme } = useTheme();
  const [sampleModalOpened, { open, close }] = useDisclosure(false);
  const [confirmModalOpened, { open: openConfirm, close: closeConfirm }] =
    useDisclosure(false);
  const [overideDiagram, setOverideDiagram] = useState("");

  const [diagram, setDiagram] = useState(`graph TD
            A[Client] -->|tcp_123| B
            B(Load Balancer)
            B -->|tcp_456| C[Server1]
            B -->|tcp_456| D[Server2]`);

  useEffect(() => {
    document.querySelector(".mermaid")?.removeAttribute("data-processed");
    mermaid.init();
    panzoom(document.querySelector(".mermaid") as HTMLElement);
  }, [diagram]);

  return (
    <div className="grow h-screen flex flex-col">
      <h1>Canvas</h1>
      <div className="flex items-center gap-5 p-3 bg-dark-800">
        <Button onClick={open}>Sample</Button>
      </div>

      <div className="flex grow">
        <Modal opened={sampleModalOpened} onClose={close} size={`xl`}>
          <Group>
            {Object.values(sampleDiagrams)
              .flat()
              .map((diagram) => (
                <Card
                  key={diagram.diagram}
                  radius="md"
                  withBorder
                  className="cursor-pointer"
                  onClick={() => {
                    setOverideDiagram(diagram.diagram);
                    close();
                    openConfirm();
                  }}
                >
                  <p>{diagram.description}</p>
                </Card>
              ))}
          </Group>
        </Modal>
        <Modal
          opened={confirmModalOpened}
          onClose={closeConfirm}
          centered
          title="Replace diagram ?"
        >
          <div className="py-4">
            This will replace your current diagram code.
          </div>
          <Button onClick={closeConfirm} variant="subtle">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setDiagram(overideDiagram);
              closeConfirm();
            }}
          >
            Set
          </Button>
        </Modal>
        <Editor
          className="w-full focus:outline-none"
          value={diagram}
          defaultValue={diagram}
          theme={colorScheme === "dark" ? "vs-dark" : "vs-light"}
          language="markdown"
          width="35%"
          options={{ minimap: { enabled: false } }}
          onChange={(str) => {
            setDiagram(str || "");
          }}
        />
        <div className="overflow-hidden grow relative">
          <pre className="mermaid" suppressHydrationWarning={true}>
            {diagram}
          </pre>
          <Button
            onClick={() => {
              panzoom(document.querySelector(".mermaid") as HTMLElement);
            }}
            pos={"absolute"}
            className="bottom-6 right-6"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
