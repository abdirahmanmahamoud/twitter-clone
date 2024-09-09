import { User } from "@prisma/client";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import VerifiedBtn from "./VerifiedBtn";
import { cn } from "@/lib/utils";
import UserImg from "@/public/userImage.png";

interface Props {
  children: React.ReactNode;
  user: User;
}

const HoverCardProfile = ({ children, user }: Props) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className='w-80'>
        <div className='w-full flex justify-between'>
          <Avatar
            className={cn(
              "w-11 h-11",
              user.accountType == "business" ? "rounded-lg" : "rounded-full"
            )}
          >
            <AvatarImage src={user.image || (UserImg as any)} />
          </Avatar>
          <Button className='bg-black text-white dark:bg-white dark:text-black rounded-full'>
            Follow
          </Button>
        </div>
        <div className='w-full mt-3'>
          <div className='w-full flex items-center space-x-1'>
            <span className='text-lg font-bold line-clamp-2 leading-4'>
              {user.name}
            </span>
            {user.verifiedBtn && <VerifiedBtn verified={user.accountType} />}
          </div>
          <span className='text-sm font-normal line-clamp-1 leading-4'>
            @{user.username}
          </span>
          <p className='text-base font-normal leading-5 mt-2'>{user.bio}</p>
          <div className='w-full grid grid-cols-2 mt-2'>
            <div className='space-x-1'>
              <span className='text-base font-normal leading-5'>183</span>
              <span className='text-base font-semibold leading-5'>
                Following
              </span>
            </div>
            <div className='space-x-1'>
              <span className='text-base font-normal leading-5'>24.3k</span>
              <span className='text-base font-semibold leading-5'>
                Followers
              </span>
            </div>
          </div>
          <div className='w-full mt-2 flex'>
            <div className='w-full flex items-center'>
              <Avatar className='w-6 h-6 z-50'>
                <AvatarImage src='https://pbs.twimg.com/profile_images/1749506647691603968/9B8bdn3n_400x400.jpg' />
              </Avatar>
              <Avatar className='w-6 h-6 -ml-3 z-50'>
                <AvatarImage src='https://pbs.twimg.com/profile_images/1807797646255620096/OV4eqFJf_400x400.jpg' />
              </Avatar>
              <Avatar className='w-6 h-6 -ml-3 z-50'>
                <AvatarImage src='https://pbs.twimg.com/profile_images/1605131756310614017/05qwHae-_400x400.jpg' />
              </Avatar>
            </div>
            <span className='text-sm font-normal leading-4 line-clamp-2 -ml-16'>
              abdirahman mohamoud, Google for Developers and Sky Sports Premier
              League
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardProfile;
