"use client";
import { create } from "zustand";

export default create()((set, get) => ({
  radio: null,
  isRunning: false,
  setIsRunning: (radioState) => {
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
}));
