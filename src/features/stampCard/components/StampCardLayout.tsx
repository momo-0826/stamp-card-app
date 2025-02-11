import React from "react";
import { StampCard } from "./StampCard";
import Button from "@mui/material/Button";

type Props = {
  stamps: boolean[];
  onToggleStamp: (index: number) => void;
  onReset: () => void;
};

export const StampCardLayout: React.FC<Props> = ({ stamps, onToggleStamp, onReset }) => {
  return (
    <div>
      <h1 style={{ display: "block", margin: "32px", fontSize: "1.2rem", fontWeight: "bold", textAlign: "center" }}>スタンプカード</h1>
      <StampCard stamps={stamps} onToggleStamp={onToggleStamp} />
      <Button variant="contained" onClick={onReset} sx={{ display: "block", margin: "auto" }}>
        Reset
      </Button>
    </div>
  );
};
