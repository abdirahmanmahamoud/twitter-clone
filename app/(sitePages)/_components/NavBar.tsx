import { FaUser, FaXTwitter } from "react-icons/fa6";
import NavItem from "./NavItem";
import {
  Bell,
  Bookmark,
  CircleEllipsis,
  HomeIcon,
  Mail,
  Pencil,
  Search,
  Users,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { AuthOptions } from "@/AuthOptions";
import { User } from "@prisma/client";
import { Button } from "@/components/ui/button";
import BtnTweet from "./BtnTweet";
import UserLoginNow from "./UserLoginNow";
import { ModeToggle } from "@/components/DarkModeBtn";

const NavBar = async () => {
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User;
  console.log(user);
  return (
    <div className='w-full h-screen pt-2 pr-12'>
      {/* <div className='fixed'> */}
      <div className='w-12 h-12 rounded-full hover:bg-black/15 dark:hover:bg-white/15 cursor-pointer flex items-center justify-center'>
        <FaXTwitter className='text-3xl cursor-pointer text-black dark:text-white' />
      </div>
      <div className='mt-3 space-y-1'>
        <NavItem title='Home' href='/' icon={<HomeIcon />} type='link' />
        <NavItem title='Explore' href='/' icon={<Search />} type='button' />
        <NavItem title='Notifications' href='/' icon={<Bell />} type='button' />
        <NavItem title='Messages' href='/' icon={<Mail />} type='button' />
        <NavItem title='Bookmarks' href='/' icon={<Bookmark />} type='button' />
        <NavItem title='Communities' href='/' icon={<Users />} type='button' />
        <NavItem
          title='Premium'
          href='/'
          icon={<FaXTwitter className='w-6 h-6' />}
          type='button'
        />
        <NavItem
          title='Profile'
          href={`/${user.username}`}
          icon={<FaUser className='w-5 h-5' />}
          type='link'
        />
        <ModeToggle />
      </div>
      <BtnTweet />
      <UserLoginNow user={user} />
      {/* </div> */}
    </div>
  );
};

export default NavBar;
