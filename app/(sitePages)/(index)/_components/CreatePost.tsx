import { AuthOptions } from "@/AuthOptions";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import UserImg from "@/public/userImage.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Annoyed,
  CalendarCheck,
  Image,
  ListChecks,
  MapPin,
} from "lucide-react";
import { MdOutlineGifBox } from "react-icons/md";
import { Button } from "@/components/ui/button";

const CreatePost = async () => {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User;
  return (
    <div className='w-full px-2 py-3 border-[0.5px] border-black/10 dark:border-white/10'>
      <div className='w-full px-2 flex'>
        <div className='w-11 h-11'>
          <Avatar
            className={cn(
              "w-full h-full",
              user.accountType == "business" ? "rounded-none" : "rounded-full"
            )}
          >
            <AvatarImage
              src={user.image || (UserImg as any)}
              alt={user.username as string}
            />
          </Avatar>
        </div>
        <div className='w-full ml-4'>
          <textarea
            placeholder='What is happening?'
            className='w-full h-10 bg-transparent outline-none text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30'
          />
          <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center space-x-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Image className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Media</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <MdOutlineGifBox className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Gif</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <ListChecks className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Poll</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Annoyed className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Emoji</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CalendarCheck className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Schedule</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <MapPin className='w-5 h-5 text-blue-600/50' />
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className='w-full flex justify-end pr-3'>
              <Button
                className='bg-blue-600 text-white hover:bg-blue-600 hover:text-white rounded-full'
                disabled={true}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
