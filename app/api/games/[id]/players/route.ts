import { NextResponse } from "next/server";
import { getGameAttendees } from "@/app/lib/db";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const attendees = await getGameAttendees(id);
  return NextResponse.json(attendees, { status: 200 });
}