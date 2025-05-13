import { ImageResponse } from "@vercel/og";
import type { NextRequest } from "next/server";
import React from "react";

// ⚙️ Indica che questa funzione va eseguita su Edge (obbligatorio per @vercel/og)
export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const score = searchParams.get("score") || "0";
  const level = searchParams.get("level") || "Principiante";

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          fontFamily: "sans-serif",
          fontSize: 48,
          backgroundColor: "#ffffff",
          color: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px",
          textAlign: "center",
        },
      },
      React.createElement("p", null, "🎉 Ho totalizzato"),
      React.createElement(
        "h1",
        { style: { fontSize: 80, margin: 0 } },
        score + " punti"
      ),
      React.createElement(
        "p",
        { style: { fontSize: 36 } },
        "Livello: ",
        React.createElement("strong", null, level)
      ),
      React.createElement(
        "p",
        { style: { fontSize: 28 } },
        "Scopri quanto ne sai tu sul cibo sostenibile!"
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
