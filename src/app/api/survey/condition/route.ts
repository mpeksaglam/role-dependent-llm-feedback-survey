import { NextResponse } from "next/server";

// Gets condition for user (randomized)
export async function POST(request: Request) {
  try {
    const body = await request.json(); // { participantId }

    const phpResponse = await fetch(
      `${process.env.SERVER_API_URL}/assign_condition.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (!phpResponse.ok) {
      throw new Error(
        `PHP Condition assignment responded with status: ${phpResponse.status}`,
      );
    }

    const result = await phpResponse.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error("Next.js Error assigning condition:", error);
    return NextResponse.json(
      { error: "Could not allocate user condition order matrix" },
      { status: 500 },
    );
  }
}
