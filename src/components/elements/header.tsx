import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header({ title }: { title: string }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBar>
  );
}
