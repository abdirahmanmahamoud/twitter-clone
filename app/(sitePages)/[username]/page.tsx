import db from "@/lib/db";
import Post from "../(index)/_components/Post";
import { PostType } from "@/types/Post";

const ProfileUser = async ({ params }: { params: { username: string } }) => {
  const posts = await db.post.findMany({
    where: {
      user: {
        username: params.username,
      },
    },
    select: {
      id: true,
      createdAt: true,
      file: true,
      text: true,
      mention: true,
      reply: true,
      repost: true,
      like: true,
      view: true,
      user: {
        select: {
          name: true,
          id: true,
          username: true,
          image: true,
          bio: true,
          accountType: true,
          verifiedBtn: true,
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });
  const mentionUser = await db.user.findMany({});
  return (
    <div
      className='w-full space-y-2 mt-2
    '
    >
      {posts.map((post) => (
        <Post key={post.id} post={post as PostType} mentionUser={mentionUser} />
      ))}
    </div>
  );
};

export default ProfileUser;
