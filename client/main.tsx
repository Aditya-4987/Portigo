import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

declare global {
  interface Window {
    __fusion_root?: ReturnType<typeof createRoot>;
  }
}

const container = document.getElementById("root")!;
window.__fusion_root = window.__fusion_root ?? createRoot(container);
window.__fusion_root.render(<App />);

if (import.meta.hot) {
  import.meta.hot.accept();
}
