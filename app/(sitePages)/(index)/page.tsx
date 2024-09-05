import CreatePost from "./_components/CreatePost";
import FeedPost from "./_components/FeedPost";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className='w-full flex'>
      <div className='w-full lg:w-[75%]'>
        <Header />
        <div className='mt-16 w-full px-4'>
          <CreatePost />
          <FeedPost />
        </div>
      </div>
      <div className='hidden lg:block lg:w-[25%]'>7jkry</div>
    </div>
  );
}
