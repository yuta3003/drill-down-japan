"use client";
import { Dialog, DialogContent, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MapIshikawa from "@/components/elements/MapIshikawa";
import DemandSupplyChart from "@/components/elements/DemandSupplyCharts";

interface MapModalProps {
  open: boolean;
  onClose: () => void;
}

export default function MapModal({ open, onClose }: MapModalProps) {
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
          gap: 4, // 画像とグラフの間隔
        }}
      >
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <MapIshikawa />
        </Box>

        <Box sx={{ flex: 1 }}>
          <DemandSupplyChart />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
