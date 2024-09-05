import Post from "./Post";

const FeedPost = () => {
  return (
    <div className='w-full px-2 mt-4 space-y-3'>
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default FeedPost;
