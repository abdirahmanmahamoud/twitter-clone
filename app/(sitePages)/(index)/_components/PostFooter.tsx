"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import axios from "axios";
import {
  Bookmark,
  Download,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { IoStatsChartSharp } from "react-icons/io5";

const PostFooter = ({ id }: { id: string }) => {
  const [data, setData] = useState({
    like: 0,
    view: 0,
    repost: 0,
    reply: 0,
  });

  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    // get post data by id
    axios.get(`/api/post/${id}/count`).then((res) => {
      setData({
        like: res.data.data.like,
        view: res.data.data.view,
        repost: res.data.data.repost,
        reply: res.data.data.reply,
      });
      setLike(res.data.data.postLike);
    });
  }, [id]);

  const handleClickLike = () => {
    if (like == false) {
      setLike(true);
      setData({ ...data, like: data.like + 1 });
    } else {
      setLike(false);
      setData({ ...data, like: data.like - 1 });
    }

    axios
      .post(`/api/post/${id}/count`, { postLike: like ? "liked" : "like" })
      .then((res) => {
        setLike(res.data.message == "liked" ? true : false);
        setData({ ...data, like: res.data.like });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='w-full grid grid-cols-5 py-3 px-2'>
      <div className='w-full flex items-center'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className='flex items-center space-x-1'>
                <MessageCircle className='w-4 h-4 text-black dark:text-white' />
                {data.reply > 0 && (
                  <span className='text-sm font-normal line-clamp-1 leading-4'>
                    {data.reply}
                  </span>
                )}
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
                {data.repost > 0 && (
                  <span className='text-sm font-normal line-clamp-1 leading-4'>
                    {data.repost}
                  </span>
                )}
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
              <div
                className='flex items-center space-x-1'
                onClick={handleClickLike}
              >
                <Heart
                  className={cn(
                    "w-4 h-4",
                    like ? "text-red-500" : "text-black dark:text-white"
                  )}
                />
                {data.like > 0 && (
                  <span className='text-sm font-normal line-clamp-1 leading-4'>
                    {data.like}
                  </span>
                )}
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
                {data.view > 0 && (
                  <span className='text-sm font-normal line-clamp-1 leading-4'>
                    {data.view}
                  </span>
                )}
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
  );
};

export default PostFooter;
