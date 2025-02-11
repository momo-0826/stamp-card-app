"use client";
import React from "react";
import { Stamp } from "./Stamp";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

type Props = {
  stamps: boolean[];
  onToggleStamp: (index: number) => void;
};

export const StampCard: React.FC<Props> = ({ stamps, onToggleStamp }) => {
  return (
    <Box sx={{ width: 800, margin: "auto", flexGrow: 1, p: 2 }}>
      <Grid
        container
        sx={{
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderLeft: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
          },
        }}
      >
        {stamps.map((isStamped, index) => (
          <Grid key={index} size={{ xs: 2.4 }}>
            <Stamp key={index} isStamped={isStamped} onToggle={() => onToggleStamp(index)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
