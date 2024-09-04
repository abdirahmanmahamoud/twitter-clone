import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";
import UserImg from "@/public/userImage.png";
import { Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AccountLogin from "./AccountLogin";
import { cn } from "@/lib/utils";

const UserLoginNow = ({ user }: { user: User }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='mt-20'>
        <div className='w-full flex px-2 py-2  hover:bg-black/10 dark:hover:bg-white/10 rounded-full'>
          <div
            className={cn(
              "w-full h-full",
              user.accountType == "business" ? "rounded-lg" : "rounded-full"
            )}
          >
            <Avatar
              className={cn(
                "w-full h-full",
                user.accountType == "business" ? "rounded-lg" : "rounded-full"
              )}
            >
              <AvatarImage
                src={user.image || (UserImg as any)}
                alt={user.username as string}
              />
            </Avatar>
          </div>
          <div className='ml-2 hidden lg:block'>
            <div className='w-full flex justify-between'>
              <div className='w-[66%]'>
                <span className='font-bold text-base line-clamp-1 leading-5'>
                  {user.name}
                </span>
                <span className='text-sm line-clamp-1 leading-5'>
                  @{user.username}
                </span>
              </div>
              <div className='h-full w[33%] flex items-center justify-start pt-3 '>
                <Ellipsis className='w-5 h-5' />
              </div>
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mb-2 w-60'>
        <DropdownMenuLabel>
          <AccountLogin />
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Aad an existing account</DropdownMenuItem>
        <DropdownMenuItem>Manage accounts</DropdownMenuItem>
        <DropdownMenuItem>Log out @{user.username}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserLoginNow;
2;