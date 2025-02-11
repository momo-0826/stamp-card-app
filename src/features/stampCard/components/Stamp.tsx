// スタンプ自体のデザインを保持するコンポーネント
import React from "react";
import Image from "next/image";

type Props = {
  isStamped: boolean;
  // スタンプの状態を変化させる
  onToggle: () => void;
};
export const Stamp: React.FC<Props> = ({ isStamped, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      style={{
        width: "100%",
        height: "80px",
        position: "relative",
        margin: "auto",
      }}
    >
      {isStamped && (
        <Image
          src="/stamp.png"
          alt="スタンプ"
          height={50}
          width={50}
          style={{
            objectFit: "contain",
            display: "block",
            margin: "auto",
            padding: "15px 0",
          }}
        />
      )}
    </div>
  );
};
