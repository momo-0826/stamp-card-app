import React from "react";
import { useStampCardStore } from "../store/stampeCardStore";
import { StampCardLayout } from "../components/StampCardLayout";

export const StampCardContainer: React.FC = () => {
  const { stamps, toggleStamp, resetStamps } = useStampCardStore();
  return (
    <div>
      <StampCardLayout stamps={stamps} onToggleStamp={toggleStamp} onReset={resetStamps} />
    </div>
  );
};
