import CreatePost from "./_components/CreatePost";
import FeedPost from "./_components/FeedPost";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className='w-full flex'>
      <div className='w-full lg:w-[65%'>
        <Header />
        <CreatePost />
        <FeedPost />
      </div>
      <div className='hidden lg:block lg:w-[36%] bg-red-400'>7jkry</div>
    </div>
  );
}
