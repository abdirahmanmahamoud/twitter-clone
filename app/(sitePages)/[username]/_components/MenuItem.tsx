"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  href?: string;
}

const MenuItem = ({ title, href }: MenuItemProps) => {
  // get url from router
  const url = window.location.pathname;
  return (
    <Link
      href={href as string}
      className='w-full p-2 flex flex-col items-center justify-center hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer'
    >
      <span className='text-base font-medium'>{title}</span>
      <div
        className={cn(
          "w-[35%] h-[3px]",
          href === url ? "bg-blue-500" : "bg-transparent"
        )}
      ></div>
    </Link>
  );
};

export default MenuItem;
