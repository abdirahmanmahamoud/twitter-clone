import HoverCardProfile from "@/components/HoverCardProfile";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import VerifiedBtn from "@/components/VerifiedBtn";

const Post = () => {
  return (
    <div className='w-full py-2 flex'>
      <div className='w-[20%]'>
        <HoverCardProfile>
          <Avatar className='w-11 h-11 rounded-none cursor-pointer'>
            <AvatarImage src='https://pbs.twimg.com/profile_images/1820125844666245120/xcQUV1BY_400x400.jpg' />
          </Avatar>
        </HoverCardProfile>
      </div>
      <div className='w-[80%] -ml-[5.4rem]'>
        <div className='w-full flex items-center space-x-1'>
          <div>
            <HoverCardProfile>
              <div className='w-full flex items-center space-x-1'>
                <span className='text-base font-bold line-clamp-2 leading-4'>
                  Macruuf tech
                </span>
                <VerifiedBtn verified='business' />
              </div>
            </HoverCardProfile>
          </div>
          <div>
            <HoverCardProfile>
              <span className='text-base font-normal line-clamp-1 leading-4'>
                @macruuftech
              </span>
            </HoverCardProfile>
          </div>
          <span className='text-base font-normal line-clamp-1 leading-4'>
            1h
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
