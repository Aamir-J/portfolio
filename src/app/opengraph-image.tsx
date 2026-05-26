import { ImageResponse } from "next/og"

// Image metadata
export const alt = "Aamir Jawadwala — Data & Analytics Engineer | Applied AI"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.25), transparent 60%), #0a0a0a",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top row: monospace prompt */}
        <div
          style={{
            fontSize: 28,
            fontFamily: "monospace",
            color: "rgba(255, 255, 255, 0.6)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#a5b4fc", marginRight: 12 }}>{">"}</span>
          aamir.jawadwala / engineer
        </div>

        {/* Middle: main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Building data systems</span>
            <span>
              where engineering meets{" "}
              <span style={{ color: "#a5b4fc" }}>applied AI.</span>
            </span>
          </div>

          <div
            style={{
              fontSize: 32,
              color: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "-0.01em",
            }}
          >
            Aamir Jawadwala · Data &amp; Analytics Engineer
          </div>
        </div>

        {/* Bottom row: status bar */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            fontSize: 22,
            fontFamily: "monospace",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22c55e",
              }}
            />
            Open to full-time roles
          </div>
          <div>Boston, MA</div>
          <div>aamir-jawadwala.vercel.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}