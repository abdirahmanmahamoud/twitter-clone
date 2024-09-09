import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/AuthOptions";
import { User } from "@prisma/client";

export async function POST(request: NextRequest) {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User;

  const body = await request.json();
  const { value, mentionUser, hashTag, file } = body;

  if (!user) {
    return NextResponse.json({ message: "user is required" }, { status: 403 });
  }

  if (!value) {
    return NextResponse.json({ message: "value is required" }, { status: 403 });
  }

  const post = await db.post.create({
    data: {
      text: value,
      mention: mentionUser,
      hash: hashTag,
      file,
      createUser: user.id,
    },
  });

  return NextResponse.json(
    { message: "created successfully post" },
    { status: 200 }
  );
}
