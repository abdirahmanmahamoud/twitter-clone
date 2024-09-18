"use client";
import { Button } from "@/components/ui/button";
import VerifiedBtn from "@/components/VerifiedBtn";
import { User } from "@prisma/client";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  profile: User;
  postsCount: number;
  sessionUser: User;
}

const Header = ({ profile, postsCount, sessionUser }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 267.6363525390625) {
        if (profile.id !== sessionUser.id) {
          setIsScrolled(true);
        }
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className='fixed top-0 w-full lg:w-[45%] bg-white/90 dark:bg-black/90 px-1 z-50'>
      <div className='w-full flex items-center justify-between py-2 px-2'>
        <div className='flex items-center space-x-2'>
          <div
            className='w-9 h-9 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer'
            onClick={() => window.history.back()}
          >
            <ArrowLeft className='w-5 h-5' />
          </div>
          <div className='flex flex-col'>
            <div className='w-full flex items-center'>
              <span className='font-bold text-base line-clamp-1 leading-5'>
                {profile.name}
              </span>
              {profile.verifiedBtn && (
                <div className='ml-2'>
                  <VerifiedBtn verified={profile.accountType} />
                </div>
              )}
            </div>
            <span className='text-sm line-clamp-1 leading-5'>
              {postsCount + " posts"}
            </span>
          </div>
        </div>
        {isScrolled && <Button className='rounded-full mr-2'>Follow</Button>}
      </div>
    </div>
  );
};

export default Header;
