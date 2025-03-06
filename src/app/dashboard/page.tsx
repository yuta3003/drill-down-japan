"use client";
import { useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import Chart from "@/components/elements/chart";
import MapJapan from "@/components/elements/MapJapan";
import MapModal from "@/components/elements/MapModal";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
            <MapJapan />
          </Box>

          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">データ分析</Typography>
            <Chart />
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">サマリー</Typography>
            <Typography>重要な情報をここに表示</Typography>
          </Paper>
        </Grid>
      </Grid>

      <MapModal open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}
