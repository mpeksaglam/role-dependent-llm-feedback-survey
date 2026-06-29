import { NextResponse } from "next/server";

// Persistence to restore sessions upon refresh
export async function POST(request: Request) {
  try {
    const surveyState = await request.json();

    // Forward the session payload directly to PHP backend script
    const phpResponse = await fetch(
      `${process.env.SERVER_API_URL}/save_session.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(surveyState),
      },
    );

    if (!phpResponse.ok) {
      throw new Error(
        `PHP backend responded with status: ${phpResponse.status}`,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Next.js Proxy Error saving session:", error);
    return NextResponse.json(
      { error: "Failed to store state on database node" },
      { status: 500 },
    );
  }
}
