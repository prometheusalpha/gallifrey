import { AppShell } from "@mantine/core";
import Sidebar from "./Sidebar";

const Layout = ({ children }: any) => {
  return (
    <AppShell padding="xl" className="overflow-y-auto">
      <div className="">{children}</div>
    </AppShell>
  );
};

export default Layout;
