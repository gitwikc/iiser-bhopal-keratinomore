import { createStore } from "zustand/vanilla";

export type MousePos = {
  x: number;
  y: number;
};

const mousePosStore = createStore<MousePos>(() => ({
  x: 0,
  y: 0,
}));

window.addEventListener("mousemove", (ev) => {
  mousePosStore.setState({ x: ev.clientX, y: ev.clientY });
});

export default mousePosStore;
