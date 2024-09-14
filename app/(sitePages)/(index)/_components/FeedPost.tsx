import { PostType } from "@/types/Post";
import Post from "./Post";
import { User } from "@prisma/client";
import db from "@/lib/db";

interface FeedPostProps {
  session: User;
}

const FeedPost = async ({ session }: FeedPostProps) => {
  const posts = await db.post.findMany({
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
        in: posts.map((p) => p.mention).filter((id) => id !== null),
      },
    },
  });

  return (
    <div className='w-full px-2 mt-4 space-y-3'>
      {posts.map((post) => (
        <Post key={post.id} post={post as PostType} mentionUser={mentionUser} />
      ))}
    </div>
  );
};

export default FeedPost;

FeedPost.Skeleton = () => {
  return (
    <div className='w-full space-y-2 mt-3'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <div
          key={i}
          className='w-[95%] h-[35rem] animate-pulse rounded-md bg-slate-300'
        />
      ))}
    </div>
  );
};
