import { ImageResponse } from "next/og";

export const alt = "Raj Copy House - Complete Notebook Manufacturing Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const badges = ["40+ Years", "Pan India Delivery", "GST Invoice Included", "Wholesale Only"];

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "#1e293b",
          padding: "64px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "48px" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#0d9488",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            R
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", color: "white", lineHeight: 1.2 }}>
              Raj Copy House
            </span>
            <span style={{ fontSize: "15px", color: "#94a3b8", marginTop: "2px" }}>
              RCH Total Solutions
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "58px",
              fontWeight: "800",
              color: "white",
              lineHeight: 1.1,
              marginBottom: "20px",
              letterSpacing: "-1px",
            }}
          >
            <span>Complete Notebook</span>
            <span>Manufacturing Solutions</span>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {["Binding Wires", "Notebook Covers", "Ledger Sheets", "Shrink Packing"].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: "20px",
                  color: "#2dd4bf",
                  fontWeight: "500",
                }}
              >
                {item} ·
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #334155",
            paddingTop: "28px",
            marginTop: "32px",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            {badges.map((badge) => (
              <div
                key={badge}
                style={{
                  backgroundColor: "rgba(13,148,136,0.15)",
                  border: "1px solid rgba(45,212,191,0.25)",
                  color: "#2dd4bf",
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                {badge}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <span style={{ fontSize: "18px", color: "#64748b" }}>+91 98100 35108</span>
            <span style={{ fontSize: "15px", color: "#64748b" }}>Chawri Bazaar, Delhi</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
