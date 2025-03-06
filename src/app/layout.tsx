import { ReactNode } from "react";
import Sidebar from "@/components/elements/sidebar"
import Header from "@/components/elements/header"
import { Box } from "@mui/material";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Box sx={{ display: "flex", height: "100vh" }}>
          <Sidebar />
          <Box sx={{ flexGrow: 1 }}>
            <Header title="Dashboard" />
            {children}
          </Box>
        </Box>
      </body>
    </html>
  );
}
