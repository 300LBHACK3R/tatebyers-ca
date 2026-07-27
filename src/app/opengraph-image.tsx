import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Tate Byers, founder of L&L Tech Solutions";
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
            "radial-gradient(circle at 50% 0%, rgba(183,15,27,0.55), transparent 42%), linear-gradient(135deg, #050505 0%, #160607 48%, #050505 100%)",
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
            boxShadow: "0 0 85px rgba(183,15,27,0.45)",
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
              color: "#ff6973",
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Calgary, Alberta • Founder • Developer • Creator
          </div>

          <div
            style={{
              fontSize: 92,
              fontWeight: 900,
              letterSpacing: "-0.06em",
              lineHeight: 0.94,
            }}
          >
            Tate Byers
          </div>

          <div
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 36,
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            Founder of L&L Tech Solutions • Creator of Tates TV
          </div>

          <div
            style={{
              alignItems: "center",
              display: "flex",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            {[
              "Owned Brands",
              "Client Website Builds",
              "Canadian Technology Services",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "999px",
                  color: "#b70f1b",
                  fontSize: 22,
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
