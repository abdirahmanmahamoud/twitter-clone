import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  //   user search username and name one time

  const user = await db.user.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      image: true,
      accountType: true,
      verifiedBtn: true,
    },
  });

  return NextResponse.json({ message: "success", data: user });
}
