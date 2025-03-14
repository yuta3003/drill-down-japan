"use client";
import { Dialog, DialogContent, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SupportIshikawa from "@/components/elements/SupportIshikawa";
import ShelterIshikawa from "@/components/elements/ShelterIshikawa";
import DemandSupplyChart from "@/components/elements/DemandSupplyCharts";

interface MapModalProps {
  open: boolean;
  onClose: () => void;
  selectedMapIndex: number | null;
}

export default function MapModal({ open, onClose, selectedMapIndex }: MapModalProps) {
  // モーダルに表示するコンテンツを `selectedMapIndex` に応じて決定
  const modalContents = [
    { map: <SupportIshikawa />, chart: <DemandSupplyChart /> }, // 支援募集情報
    { map: <ShelterIshikawa />, chart: <DemandSupplyChart /> }, // 避難所マップ
    { map: <ShelterIshikawa />, chart: <DemandSupplyChart /> }, // ライフラインマップ
  ];

  const isValidIndex = selectedMapIndex !== null && selectedMapIndex >= 0 && selectedMapIndex < modalContents.length;
  console.log("MapModal - isValidIndex:", isValidIndex); // デバッグ用
  console.log("MapModal - Index:", selectedMapIndex); // デバッグ用

  return (
    <Dialog open={open} onClose={onClose} maxWidth="lg" fullWidth>
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 8, top: 8, color: "gray" }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        }}
      >
        {isValidIndex ? (
          <>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              {modalContents[selectedMapIndex].map}
            </Box>

            <Box sx={{ flex: 1 }}>
              {modalContents[selectedMapIndex].chart}
            </Box>
          </>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
            データが見つかりません
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
