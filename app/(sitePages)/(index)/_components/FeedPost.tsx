import { PostType } from "@/types/Post";
import Post from "./Post";
import { User } from "@prisma/client";

interface FeedPostProps {
  posts: PostType[];
  mentionUser: User[] | null;
}

const FeedPost = ({ posts, mentionUser }: FeedPostProps) => {
  return (
    <div className='w-full px-2 mt-4 space-y-3'>
      {posts.map((post) => (
        <Post key={post.id} post={post} mentionUser={mentionUser} />
      ))}
    </div>
  );
};

export default FeedPost;
