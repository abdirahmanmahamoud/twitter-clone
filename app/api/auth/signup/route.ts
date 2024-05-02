import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const [name, email, username, password] = body;

  if (!name || !email || !password || !username) {
    return NextResponse.json(
      { message: "request name, email, password,username" },
      { status: 403 }
    );
  }

  const userEmail = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (userEmail) {
    return NextResponse.json(
      { message: "email already in use!" },
      { status: 403 }
    );
  }

  const userUsername = await db.user.findFirst({
    where: {
      username: username,
    },
  });

  if (userUsername) {
    return NextResponse.json(
      { message: "Username already in use!" },
      { status: 403 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: {
      name,
      email,
      username,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "user created successfully" },
    { status: 200 }
  );
}
