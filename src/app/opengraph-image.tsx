import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tate Byers Premium Hub";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 50% 0%, rgba(183,15,27,0.52), transparent 42%), linear-gradient(135deg, #050505 0%, #140608 48%, #050505 100%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(255,255,255,0.16)",
            borderRadius: "44px",
            boxShadow: "0 0 80px rgba(183,15,27,0.42)",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            height: "100%",
            justifyContent: "center",
            padding: "58px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#ff6b74",
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Calgary, Alberta • Businesses • Projects • Contact
          </div>

          <div
            style={{
              fontSize: 94,
              fontWeight: 950,
              letterSpacing: "-0.065em",
              lineHeight: 0.92,
              maxWidth: 920,
            }}
          >
            Tate Byers
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.74)",
              fontSize: 34,
              fontWeight: 700,
              lineHeight: 1.28,
              maxWidth: 900,
            }}
          >
            L&L Tech Solutions • Petal & Pulse Massage • Tates TV
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {["Tech Services", "Massage Services", "Creator Project"].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.94)",
                  borderRadius: "999px",
                  color: "#b70f1b",
                  fontSize: 24,
                  fontWeight: 900,
                  padding: "14px 22px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
