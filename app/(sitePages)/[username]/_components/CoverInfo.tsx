"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import VerifiedBtn from "@/components/VerifiedBtn";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { CalendarDays, Link, MapPin } from "lucide-react";
import moment from "moment";
import MenuItem from "./MenuItem";
// import Link from "next/link";

interface CoverInfoProps {
  profile: User;
  sessionUser: User;
}

const CoverInfo = ({ profile, sessionUser }: CoverInfoProps) => {
  return (
    <div className='w-full'>
      <div className='w-full h-52'>
        <Avatar className='w-full h-full rounded-none object-cover'>
          <AvatarImage
            src={
              "https://pbs.twimg.com/profile_banners/19583545/1726608654/1500x500"
            }
            className='w-full h-full object-cover'
            alt='cover'
          />
        </Avatar>
      </div>
      <div className='w-full relative'>
        <div className='w-full h-20 absolute bottom-0 left-0'>
          <div className='w-full flex items-center justify-between px-3'>
            <div
              className={cn(
                "w-32 h-32 bg-white dark:bg-slate-900 p-[3px]",
                profile.accountType == "business"
                  ? "rounded-none"
                  : "rounded-full"
              )}
            >
              <Avatar
                className={cn(
                  "w-full h-full",
                  profile.accountType == "business"
                    ? "rounded-none"
                    : "rounded-full"
                )}
              >
                <AvatarImage
                  src={profile.image || "https://i.pravatar.cc/300"}
                  alt={profile.username as string}
                />
              </Avatar>
            </div>
            <div className='mt-20 mr-4'>
              {profile.id == sessionUser.id ? (
                <Button className='rounded-full bg-transparent border border-black dark:bg-white text-black dark:text-white hover:bg-transparent hover:text-black dark:hover:text-white'>
                  Edit Profile
                </Button>
              ) : (
                <Button className='rounded-full'>Follow</Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full px-3 mt-[3.5rem]'>
        <div className='w-full flex items-center'>
          <span className='font-semibold text-xl line-clamp-1 leading-5'>
            {profile.name}
          </span>
          {profile.verifiedBtn && (
            <div className='ml-2'>
              <VerifiedBtn verified={profile.accountType} />
            </div>
          )}
        </div>
        <span className='text-sm line-clamp-1 leading-5'>
          @{profile.username}
        </span>
      </div>
      <div className='w-full px-3 mt-1'>
        <span className='text-base'>{profile.bio}</span>
        <div className='w-full mt-2 flex items-center space-x-3'>
          {profile.location && (
            <div className='flex items-center space-x-2'>
              <MapPin className='w-4 h-4' />
              <span className='line-clamp-1 leading-5 text-sm '>
                {profile.location}
              </span>
            </div>
          )}
          {profile.url && (
            <div className='flex items-center space-x-2'>
              <Link className='w-4 h-4' />
              <span className='line-clamp-1 leading-5 text-sm cursor-pointer text-blue-600 '>
                {profile.url.split("//www.")[1]}
              </span>
            </div>
          )}
          <div className='flex items-center space-x-2'>
            <CalendarDays className='w-4 h-4' />
            <span className='line-clamp-1 leading-5 text-base'>
              {"Joined " + moment(profile.createdAt).format("MMMM YYYY")}
            </span>
          </div>
        </div>
        <div className='w-[45%] flex items-center mt-2'>
          <div className='w-full flex items-center space-x-2'>
            <span className='text-base font-medium'>121</span>
            <span className='text-base'>Following</span>
          </div>
          <div className='w-full flex items-center space-x-2'>
            <span className='text-base font-medium'>9.3k</span>
            <span className='text-base'>Followers</span>
          </div>
        </div>
      </div>
      <div className='w-full px-3 mt-2 flex items-center'>
        <div className='flex items-center'>
          <Avatar className='w-7 h-7 z-50'>
            <AvatarImage src='https://pbs.twimg.com/profile_images/1749506647691603968/9B8bdn3n_400x400.jpg' />
          </Avatar>
          <Avatar className='w-7 h-7 -ml-2 z-40'>
            <AvatarImage src='https://pbs.twimg.com/profile_images/1820125844666245120/xcQUV1BY_400x400.jpg' />
          </Avatar>
          <Avatar className='w-7 h-7 -ml-1 z-30'>
            <AvatarImage src='https://pbs.twimg.com/profile_images/1750126817590087680/7AydU7yH_400x400.jpg' />
          </Avatar>
        </div>
        <span className='ml-2 text-sm font-normal leading-4 line-clamp-2 w-[50%]'>
          abdirahman mohamoud, macruuf tech and Sky mohamed salah
        </span>
      </div>
      <div className='w-full mt-8 grid grid-cols-5 border-b-2'>
        <MenuItem title='Posts' href={`/${profile.username}`} />
        <MenuItem title='Replies' href={`/${profile.username}/replies`} />
        <MenuItem title='Highlights' href={`/${profile.username}/highlights`} />
        <MenuItem title='Media' href={`/${profile.username}/media`} />
        <MenuItem title='Likes' href={`/${profile.username}/likes`} />
      </div>
    </div>
  );
};

export default CoverInfo;
