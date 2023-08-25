import { Button } from "@mantine/core";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="opacity-50 py-6 text-lg">Page not found</p>
      <Button component="a" rel="noopener noreferrer" href="/">
        Go home
      </Button>
    </div>
  );
}
