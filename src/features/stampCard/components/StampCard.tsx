"use client";
import React from "react";
import { Stamp } from "./Stamp";
import Grid from "@mui/material/Grid2";

type Props = {
  stamps: boolean[];
  onToggleStamp: (index: number) => void;
};

export const StampCard: React.FC<Props> = ({ stamps, onToggleStamp }) => {
  return (
    <Grid container spacing={5}>
      {/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "10px",
        padding: "10px",
      }}
    >
      {stamps.map((isStamped, index) => (
        <Stamp key={index} isStamped={isStamped} onToggle={() => onToggleStamp(index)} />
      ))}
    </div> */}
      {stamps.map((isStamped, index) => (
        <Grid key={index} size={{ xs: 2.4 }}>
          <Stamp key={index} isStamped={isStamped} onToggle={() => onToggleStamp(index)} />
        </Grid>
      ))}
    </Grid>
  );
};
