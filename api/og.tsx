import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

// Required for Vercel Edge
export const config = {
  runtime: "edge",
};

export default function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const score = searchParams.get("score") || "0";
  const level = searchParams.get("level") || "Principiante";

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#fffbe6",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 42,
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          color: "#333",
          padding: "40px",
          backgroundImage:
            "url(https://jpier34.github.io/food-education-quiz/assets/bg-pattern.png)",
        }}
      >
        <div>🍽️ Food Education Quiz</div>
        <div style={{ fontSize: 60, marginTop: "30px" }}>
          Ho totalizzato {score}/10!
        </div>
        <div style={{ fontSize: 38, marginTop: "10px" }}>Livello: {level}</div>
        <div style={{ fontSize: 28, marginTop: "40px", color: "#888" }}>
          Riuscirai a fare meglio?
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
