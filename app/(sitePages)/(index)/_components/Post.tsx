import HoverCardProfile from "@/components/HoverCardProfile";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import VerifiedBtn from "@/components/VerifiedBtn";
import postImg from "@/public/post.jpeg";
import {
  Bookmark,
  Download,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import Image from "next/image";
import { IoStatsChartSharp } from "react-icons/io5";

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
      <div className='w-[80%] -ml-4 lg:-ml-[4.8rem]'>
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
        <p className='text-base font-normal leading-5 mt-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vitae
          aperiam perspiciatis.
        </p>
        <Image src={postImg} alt='post' className='w-full mt-2 rounded-lg' />
        <div className='w-full grid grid-cols-5 py-3 px-2'>
          <div className='w-full flex items-center'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className='flex items-center space-x-1'>
                    <MessageCircle className='w-4 h-4 text-black dark:text-white' />
                    <span className='text-sm font-normal line-clamp-1 leading-4'>
                      10
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                  <p>Reply</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className='w-full flex items-center'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className='flex items-center space-x-1'>
                    <Repeat2 className='w-4 h-4 text-black dark:text-white' />
                    <span className='text-sm font-normal line-clamp-1 leading-4'>
                      3
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                  <p>Repost</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className='w-full flex items-center'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className='flex items-center space-x-1'>
                    <Heart className='w-4 h-4 text-black dark:text-white' />
                    <span className='text-sm font-normal line-clamp-1 leading-4'>
                      23
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                  <p>Like</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className='w-full flex items-center'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className='flex items-center space-x-1'>
                    <IoStatsChartSharp className='w-4 h-4 text-black dark:text-white' />
                    <span className='text-sm font-normal line-clamp-1 leading-4'>
                      112
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                  <p>Views</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className='w-full flex justify-end items-center space-x-3'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Bookmark className='w-4 h-4 text-black dark:text-white' />
                </TooltipTrigger>
                <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                  <p>Book marks</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Download className='w-4 h-4 text-black dark:text-white' />
                </TooltipTrigger>
                <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                  <p>Share</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
