import { NextResponse } from "next/server";

// Restore session
export async function GET(
  request: Request,
  { params }: { params: Promise<{ participantId: string }> },
) {
  try {
    const { participantId } = await params; // dynamic route parameter is an asynchronous promise

    // Call the PHP get handler passing the participant ID parameter
    const phpResponse = await fetch(
      `${process.env.SERVER_API_URL}/load_session.php?participantId=${participantId}`,
      { method: "GET" },
    );

    if (phpResponse.status === 404) {
      return NextResponse.json(null, { status: 404 });
    }

    if (!phpResponse.ok) {
      throw new Error(
        `PHP backend load responded with status: ${phpResponse.status}`,
      );
    }

    const savedSession = await phpResponse.json();
    return NextResponse.json(savedSession);
  } catch (error) {
    console.error("Next.js Proxy Error loading session:", error);
    return NextResponse.json(null, { status: 500 });
  }
}
