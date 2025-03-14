'use client'
import { useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Tabs, Tab, Container, Grid, Paper, Typography } from "@mui/material";
import MapJapan from "@/components/elements/MapJapan";
import MapModal from "@/components/elements/MapModal";
import Chart from "@/components/elements/chart";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [value, setValue] = useState(0);
  const [selectedMapIndex, setSelectedMapIndex] = useState<number | null>(null);

  // 地図のデータ
  const mapComponents = [
    { component: <MapJapan />, label: "支援募集情報" },
    { component: <MapJapan />, label: "避難所マップ" },
    { component: <MapJapan />, label: "ライフラインマップ" },
  ];

  const slideChange = (swiper: SwiperClass) => setValue(swiper.activeIndex);

  const tabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (swiper) swiper.slideTo(newValue);
  };

  // 地図をクリックしたときに、対応する情報をモーダルに表示
  const handleMapClick = (index: number) => {
    setSelectedMapIndex(index);
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {/* タブでスライド切り替え */}
          <Box sx={{ width: "100%", bgcolor: "background.paper", mt: 2 }}>
            <Tabs value={value} onChange={tabChange} centered>
              {mapComponents.map((map, index) => (
                <Tab key={index} label={map.label} value={index} />
              ))}
            </Tabs>
          </Box>

          {/* 日本地図のスライダー */}
          <Box sx={{ position: "relative", cursor: "pointer" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={slideChange}
              onSwiper={setSwiper}
            >
              {mapComponents.map((map, index) => (
                <SwiperSlide key={index}>
                  <Box onClick={() => handleMapClick(index)}>{map.component}</Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          {/* データ分析 */}
          <Paper sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6">データ分析</Typography>
            <Chart />
          </Paper>
        </Grid>

        {/* 右側の情報パネル */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">炊き出し情報</Typography>
            <Typography>3月12日 13:00~</Typography>
          </Paper>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">復旧情報</Typography>
            <Typography>岩手県 大船渡市 ガス復旧</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* 日本地図のモーダル */}
      <MapModal open={open} onClose={() => setOpen(false)} selectedMapIndex={selectedMapIndex} />
    </Container>
  );
}
