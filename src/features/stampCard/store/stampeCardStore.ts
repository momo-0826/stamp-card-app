import { create } from "zustand";

type StampCardState = {
  stamps: boolean[];
  toggleStamp: (index: number) => void;
  resetStamps: () => void;
};

export const useStampCardStore = create<StampCardState>((set) => ({
  stamps: Array(20).fill(false),
  toggleStamp: (index) =>
    set((state) => {
      const newStamps = [...state.stamps];
      newStamps[index] = !newStamps[index];
      return { stamps: newStamps };
    }),
  resetStamps: () => set({ stamps: Array(20).fill(false) }),
}));
