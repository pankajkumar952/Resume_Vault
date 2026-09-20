"use client";

export default function Watermark() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "12px",
        right: "16px",
        fontSize: "11px",
        fontWeight: "500",
        color: "rgba(5, 150, 105, 0.4)",
        pointerEvents: "none",
        zIndex: 9999,
        letterSpacing: "0.04em",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <span style={{ opacity: 0.6 }}>⬡</span>
      Er. Pankaj Kumar
    </div>
  );
}
