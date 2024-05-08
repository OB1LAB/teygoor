"use client";
import { create } from "zustand";

export default create()((set, get) => ({
  radio: null,
  isRunning: false,
  fistClick: false,
  setIsRunning: (radioState) => {
    if (!get().fistClick) return;
    const radioMusic = get().radio;
    if (radioMusic === null) {
      set({ radio: new Audio("audio.mp3") });
      get().setIsRunning(radioState);
    }
    set({ isRunning: radioState });
    if (!radioMusic) return;
    if (get().isRunning) {
      radioMusic.play();
    } else {
      radioMusic.pause();
    }
  },
  firstRun: () => {
    if (!get().fistClick) {
      set({ fistClick: true });
      setTimeout(() => {
        get().setIsRunning(true);
      }, 10);
    }
  },
}));
