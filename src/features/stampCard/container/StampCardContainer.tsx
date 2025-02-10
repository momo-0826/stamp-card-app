import React from "react";
import { useStampCardStore } from "../store/stampeCardStore";
import { StampCard } from "../components/StampCard";

export const StampCardContainer: React.FC = () => {
  const { stamps, toggleStamp } = useStampCardStore();
  return (
    <div>
      <StampCard stamps={stamps} onToggleStamp={toggleStamp} />
    </div>
  );
};
