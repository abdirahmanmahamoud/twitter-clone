"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Header = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");
  //   console.log(searchParams.get("tab"));
  return (
    <div className='relative top-0 w-full grid grid-cols-2 bg-white/10 dark:bg-black/10 px-1'>
      <Link
        href='/'
        className='w-full py-3 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'
      >
        <span
          className={cn(
            "font-bold",
            tab == null && "underline decoration-blue-500"
          )}
        >
          For you
        </span>
      </Link>
      <Link
        href='/?tab=following'
        className='w-full py-3 flex items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'
      >
        <span
          className={cn(
            "font-bold",
            tab == "following" && "underline decoration-blue-500"
          )}
        >
          Following
        </span>
      </Link>
    </div>
  );
};

export default Header;
