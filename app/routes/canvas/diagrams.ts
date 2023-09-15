export const sampleDiagrams = {
  flowchart: [
    {
      description: "Flowchart",
      diagram: `graph TD
            A[Client] -->|tcp_123| B
            B(Load Balancer)
            B -->|tcp_456| C[Server1]
            B -->|tcp_456| D[Server2]`,
    },
  ],
  sequence: [
    {
      description: "Sequence",
      diagram: `sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!`,
    },
  ],
};

export type DiagramType = {
  description: string;
  diagram: string;
}
