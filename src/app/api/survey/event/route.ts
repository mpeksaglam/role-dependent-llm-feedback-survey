import { NextResponse } from "next/server";

// Logging
export async function POST(request: Request) {
  try {
    const logEventPacket = await request.json();

    // Forward to JSONL appending PHP script
    const phpResponse = await fetch(
      `${process.env.SERVER_API_URL}/log_event.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logEventPacket),
      },
    );

    if (!phpResponse.ok) {
      throw new Error(
        `PHP event backend responded with status: ${phpResponse.status}`,
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Next.js Proxy Error processing event tracking:", error);
    return NextResponse.json(
      { error: "Event logging write failure" },
      { status: 500 },
    );
  }
}
