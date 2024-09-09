"use client";
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
import { PostType } from "@/types/Post";
import {
  Bookmark,
  Download,
  Heart,
  MessageCircle,
  Repeat2,
} from "lucide-react";
import Image from "next/image";
import { IoStatsChartSharp } from "react-icons/io5";
import moment from "moment";
import { cn } from "@/lib/utils";
import UserImg from "@/public/userImage.png";
import { User } from "@prisma/client";
import React, { useEffect, useState } from "react";

interface PostProps {
  post: PostType;
  mentionUser: User[] | null;
}

const Post = ({ post, mentionUser }: PostProps) => {
  const [menUser, setMenUser] = useState<User | null>(null);

  // mentionUser.id === post.mention

  // const menUser = mentionUser.findIndex(
  //   (mention) => menUser.id === post.mention
  // );

  useEffect(() => {
    mentionUser?.forEach((mention) => {
      if (mention.id === (post.mention as any)) {
        setMenUser(mention);
      }
    });
  }, [mentionUser, post]);

  const usernamePattern = `@[@${menUser?.username}](${menUser?.username})`;

  const parts = post.text.split(usernamePattern);

  const content = parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && menUser && (
        <HoverCardProfile user={menUser as any}>
          <span className='text-blue-500 cursor-pointer'>
            @{menUser?.username}
          </span>
        </HoverCardProfile>
      )}
    </React.Fragment>
  ));

  return (
    <div className='w-full py-2 flex'>
      <div className='w-[20%]'>
        <HoverCardProfile user={post.user as any}>
          <Avatar
            className={cn(
              "w-11 h-11 cursor-pointer",
              post.user.accountType == "business"
                ? "rounded-lg"
                : "rounded-full"
            )}
          >
            <AvatarImage src={post.user.image || (UserImg as any)} />
          </Avatar>
        </HoverCardProfile>
      </div>
      <div className='w-[80%] -ml-4 lg:-ml-[4.8rem]'>
        <div className='w-full flex items-center space-x-1'>
          <div>
            <HoverCardProfile user={post.user as any}>
              <div className='w-full flex items-center space-x-1'>
                <span className='text-base font-bold line-clamp-2 leading-4'>
                  {post.user.name}
                </span>
                {post.user.verifiedBtn && (
                  <VerifiedBtn verified={post.user.accountType} />
                )}
              </div>
            </HoverCardProfile>
          </div>
          <div>
            <HoverCardProfile user={post.user as any}>
              <span className='text-base font-normal line-clamp-1 leading-4'>
                @{post.user.username}
              </span>
            </HoverCardProfile>
          </div>
          <span className='text-base font-normal line-clamp-1 leading-4'>
            {moment(post.createdAt).fromNow()}
          </span>
        </div>
        <p className='text-base font-normal leading-5 mt-2'>{content}</p>

        {post.file && (
          <div className='w-full mt-4'>
            <Image
              src={postImg}
              alt='image'
              className='w-full h-auto rounded-md'
            />
          </div>
        )}
        <div className='w-full grid grid-cols-5 py-3 px-2'>
          <div className='w-full flex items-center'>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className='flex items-center space-x-1'>
                    <MessageCircle className='w-4 h-4 text-black dark:text-white' />
                    {post.reply > 0 && (
                      <span className='text-sm font-normal line-clamp-1 leading-4'>
                        {post.reply}
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
                    {post.repost > 0 && (
                      <span className='text-sm font-normal line-clamp-1 leading-4'>
                        {post.repost}
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
                  <div className='flex items-center space-x-1'>
                    <Heart className='w-4 h-4 text-black dark:text-white' />
                    {post.like > 0 && (
                      <span className='text-sm font-normal line-clamp-1 leading-4'>
                        {post.like}
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
                    {post.view > 0 && (
                      <span className='text-sm font-normal line-clamp-1 leading-4'>
                        {post.view}
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
      </div>
    </div>
  );
};

export default Post;
