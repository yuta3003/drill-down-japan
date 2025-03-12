"use client";
import { Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Box } from "@mui/system";

export default function Sidebar() {
  const router = useRouter();

  return (
    <Drawer variant="permanent" sx={{ width: 100, display: "flex", flexDirection: "column" }}>
      {/* 人型アイコン（クリックでマイページへ遷移） */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 2 }}>
        <IconButton onClick={() => router.push("/mypage")} sx={{ color: "inherit" }}>
          <AccountCircle fontSize="large" />
        </IconButton>
      </Box>

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
