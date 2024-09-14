import { AuthOptions } from "@/AuthOptions";
import db from "@/lib/db";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User | null;

  const post = await db.post.findUnique({
    where: {
      id: params.id,
    },
    select: {
      id: true,
      like: true,
      view: true,
      repost: true,
      reply: true,
    },
  });

  const userLike = await db.like.findMany({
    where: {
      postId: params.id,
      userId: user?.id,
    },
  });

  const postLike = userLike[0]?.id ? true : false;

  return NextResponse.json(
    { message: "success", data: post, postLike },
    { status: 200 }
  );
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User;

  const body = await request.json();

  const { postLike } = body;

  if (!user) {
    return NextResponse.json({ message: "user is required" }, { status: 403 });
  }

  if (!params.id) {
    return NextResponse.json({ message: "id is required" }, { status: 403 });
  }

  if (!postLike) {
    return NextResponse.json(
      { message: "postLike is required" },
      { status: 403 }
    );
  }

  if (postLike == "like") {
    const post = await db.post.findUnique({
      where: { id: params.id },
    });

    await db.like.create({
      data: {
        postId: params.id,
        userId: user.id,
      },
    });

    const likeNumber = (post?.like as number) + 1;
    console.log(likeNumber);
    await db.post.update({
      where: { id: params.id },
      data: {
        like: likeNumber,
      },
    });

    return NextResponse.json(
      { message: "liked", like: likeNumber },
      { status: 200 }
    );
  } else {
    const post = await db.post.findUnique({
      where: { id: params.id },
    });

    const likeId = await db.like.findMany({
      where: {
        postId: params.id,
        userId: user.id,
      },
    });

    await db.like.delete({
      where: {
        id: likeId[0].id,
      },
    });

    const likeNumber = post?.like === 0 ? 0 : (post?.like as number) - 1;

    await db.post.update({
      where: { id: params.id },
      data: {
        like: likeNumber,
      },
    });

    return NextResponse.json(
      { message: "unliked", like: likeNumber },
      { status: 200 }
    );
  }
}
