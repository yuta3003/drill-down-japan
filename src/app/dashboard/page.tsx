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
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">炊き出し情報</Typography>
            <Typography>3月12日 13:00~</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">復旧情報</Typography>
            <Typography>岩手県 大船渡市 ガス復旧</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">支援物資受付状況</Typography>
            <Typography>送付先: 〒123-4567 東京都新宿区西新宿1-1-1 被災支援センター</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">避難所情報</Typography>
            <Typography>送付先: 〒123-4567 埼玉県川越市2-1-1 避難センター</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">行方不明者情報</Typography>
            <Typography>山田 太郎 30歳</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">行方不明者情報</Typography>
            <Typography>山田 花子 30歳</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">ボランティア募集情報</Typography>
            <Typography>人数: 30人</Typography>
            <Typography>期間: 2月1日~3月1日</Typography>
            <Typography>スキル: 重機(瓦礫撤去のため)</Typography>
          </Paper>
        </Grid>
      </Grid>

      <MapModal open={open} onClose={() => setOpen(false)} />
    </Container>
  );
}
