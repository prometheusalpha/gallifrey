import Layout from "~/components/Layout";
import mermaid from "mermaid";
import { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useLocalStorage } from "@mantine/hooks";
import { ColorScheme } from "@mantine/core";
import useTheme from "~/composables/useTheme";

mermaid.initialize({
  startOnLoad: true,
});

export default function Canvas() {
  const { colorScheme } = useTheme();

  const [diagram, setDiagram] = useState(`graph TD
            A[Client] -->|tcp_123| B
            B(Load Balancer)
            B -->|tcp_456| C[Server1]
            B -->|tcp_456| D[Server2]`);

  useEffect(() => {
    document.querySelector(".mermaid")?.removeAttribute("data-processed");
    mermaid.init();
  }, [diagram]);

  return (
    <Layout>
      <h1>Canvas</h1>
      <div className="flex">
        <Editor
          className="w-full h-96 focus:outline-none p-4"
          value={diagram}
          defaultValue={diagram}
          theme={colorScheme === "dark" ? "vs-dark" : "vs-light"}
          language="mermaid"
          onChange={(str) => {
            setDiagram(str || "");
          }}
        />
        <pre className="mermaid grow">{diagram}</pre>
      </div>
    </Layout>
  );
}
