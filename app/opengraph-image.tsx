import { ImageResponse } from "next/og";

export const alt = "Shreyas Raj & Co. ,  Chartered Accountants, Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#131313",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#ffffff",
            }}
          >
            Shreyas Raj & Co.
          </div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 400,
              color: "#a3a3a3",
              fontFamily: "Segoe UI, -apple-system, sans-serif",
            }}
          >
            Chartered Accountants · Bengaluru, India
          </div>
        </div>
        <div
          style={{
            marginTop: 60,
            paddingTop: 32,
            borderTop: "2px solid rgba(255, 255, 255, 0.15)",
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            fontFamily: "Segoe UI, sans-serif",
          }}
        >
          Tax · GST · Audit · Compliance
        </div>
      </div>
    ),
    { ...size }
  );
}
