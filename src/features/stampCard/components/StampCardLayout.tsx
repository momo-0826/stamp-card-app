import React from "react";
import { StampCard } from "./StampCard";

type Props = {
  stamps: boolean[];
  onToggleStamp: (index: number) => void;
  onReset: () => void;
};

export const StampCardLayout: React.FC<Props> = ({ stamps, onToggleStamp, onReset }) => {
  return (
    <div>
      <h1>スタンプカード</h1>
      <StampCard stamps={stamps} onToggleStamp={onToggleStamp} />
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
