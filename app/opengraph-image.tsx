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
          background: "#012d1d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Playfair Display, serif",
          color: "#ffffff",
          padding: 80,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              border: "3px solid #d4af37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
              color: "#d4af37",
            }}
          >
            SR
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              Shreyas Raj & Co.
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: "#a5d0b9",
                marginTop: 8,
              }}
            >
              Chartered Accountants | Bengaluru, India
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 60,
            paddingTop: 32,
            borderTop: "2px solid rgba(212, 175, 55, 0.3)",
            fontSize: 20,
            color: "#86af99",
            textAlign: "center",
          }}
        >
          Tax Advisory &bull; Audit &amp; Assurance &bull; GST Compliance &bull;
          MSME Consulting
        </div>
      </div>
    ),
    { ...size }
  );
}
