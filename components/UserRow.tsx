import { AccountType, User } from "@prisma/client";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import HoverCardProfile from "./HoverCardProfile";
import Link from "next/link";
import VerifiedBtn from "./VerifiedBtn";
import { Button } from "./ui/button";

const UserRow = ({ user }: { user: User }) => {
  return (
    <div className='w-full px-2 py-2 flex items-center hover:bg-slate-100 dark:hover:bg-slate-800'>
      <Link
        href={`/${user.username}`}
        className='w-[75%] flex items-center space-x-2'
      >
        <div className='w-[25%] h-11'>
          <HoverCardProfile user={user}>
            <Avatar
              className={cn(
                "w-full h-full",
                user.accountType == "business"
                  ? "rounded-none"
                  : "rounded-full object-cover"
              )}
            >
              <AvatarImage
                src={user.image || ""}
                alt={user.username as string}
              />
            </Avatar>
          </HoverCardProfile>
        </div>
        <div className='w-[75%] flex flex-col mr-2'>
          <HoverCardProfile user={user}>
            <div className='w-full flex items-center'>
              <span className='font-bold text-base line-clamp-1 leading-4'>
                {user.name}
              </span>
              {user.verifiedBtn && (
                <div className='ml-1'>
                  <VerifiedBtn verified={user.accountType as AccountType} />
                </div>
              )}
            </div>
          </HoverCardProfile>
          <HoverCardProfile user={user}>
            <span className='text-sm line-clamp-1 leading-5 font-normal'>
              @{user.username}
            </span>
          </HoverCardProfile>
        </div>
      </Link>
      <div className='w-[24%] ml-2 flex items-center justify-center'>
        <Button className='rounded-full'>Follow</Button>
      </div>
    </div>
  );
};

export default UserRow;
