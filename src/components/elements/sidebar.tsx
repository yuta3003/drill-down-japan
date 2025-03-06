"use client";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <Drawer variant="permanent" sx={{ width: 100 }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/dashboard")}>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => router.push("/settings")}>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
