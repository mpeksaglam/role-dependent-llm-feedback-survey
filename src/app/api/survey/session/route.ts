import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const surveyState = await request.json();

  console.log("Received session"); // TODO remove

  console.log(surveyState);

  return NextResponse.json({
    success: true,
  });
}
