import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Shreyas Raj & Co. — Chartered Accountants, Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1e3d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Cormorant Garamond, serif",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "3px solid #b8966e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "#b8966e",
            }}
          >
            SR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 52,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                color: "#ffffff",
              }}
            >
              CA Shreyas Raj
            </div>
            <div
              style={{
                fontSize: 22,
                fontWeight: 400,
                color: "#b8966e",
                marginTop: 8,
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Chartered Accountant · Bengaluru, India
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 60,
            paddingTop: 32,
            borderTop: "2px solid rgba(184, 150, 110, 0.3)",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            fontFamily: "DM Sans, sans-serif",
          }}
        >
          Tax · GST · Audit · Compliance
        </div>
      </div>
    ),
    { ...size }
  );
}
