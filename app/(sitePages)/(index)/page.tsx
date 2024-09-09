import { getServerSession } from "next-auth";
import CreatePost from "./_components/CreatePost";
import FeedPost from "./_components/FeedPost";
import Header from "./_components/Header";
import { AuthOptions } from "@/AuthOptions";
import { User } from "@prisma/client";
import db from "@/lib/db";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User;

  const userMention = await db.user.findMany({});

  const post = await db.post.findMany({
    select: {
      id: true,
      text: true,
      file: true,
      reply: true,
      repost: true,
      like: true,
      view: true,
      createdAt: true,
      mention: true,
      user: {
        select: {
          name: true,
          image: true,
          username: true,
          accountType: true,
          verifiedBtn: true,
          id: true,
          bio: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const mentionUser = await db.user.findMany({
    where: {
      id: {
        in: post.map((p) => p.mention).filter((id) => id !== null),
      },
    },
  });

  return (
    <div className='w-full flex'>
      <div className='w-full lg:w-[75%]'>
        <Header />
        <div className='mt-16 w-full px-4'>
          <CreatePost user={user} userMention={userMention} />
          <FeedPost posts={post} mentionUser={mentionUser as any} />
        </div>
      </div>
      <div className='hidden lg:block lg:w-[25%]'>7jkry</div>
    </div>
  );
}
