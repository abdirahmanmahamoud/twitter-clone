import { getServerSession } from "next-auth";
import CreatePost from "./_components/CreatePost";
import FeedPost from "./_components/FeedPost";
import Header from "./_components/Header";
import { AuthOptions } from "@/AuthOptions";
import { User } from "@prisma/client";
import db from "@/lib/db";
import { Suspense } from "react";

export default async function Home() {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User;

  const userMention = await db.user.findMany({});

  return (
    <div className='w-full flex'>
      <div className='w-full lg:w-[75%]'>
        <Header />
        <div className='mt-16 w-full px-4'>
          <CreatePost user={user} userMention={userMention} />
          <Suspense fallback={<FeedPost.Skeleton />}>
            <FeedPost session={user} />
          </Suspense>
        </div>
      </div>
      <div className='hidden lg:block lg:w-[25%]'>7jkry</div>
    </div>
  );
}
