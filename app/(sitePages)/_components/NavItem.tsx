"use client";

import Link from "next/link";

interface NavItemProps {
  title: string;
  href?: string;
  icon: React.ReactNode;
  type: "link" | "button";
}

const NavItem = ({ title, href, icon, type }: NavItemProps) => {
  if (type === "link") {
    return (
      <Link
        href={href || "/"}
        className='flex items-center space-x-2 px-2 py-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer w-[85%]'
      >
        <div className='w-6 h-6'>{icon}</div>
        <span className='text-lg hidden lg:block'>{title}</span>
      </Link>
    );
  }

  if (type === "button") {
    return (
      <div className='flex items-center space-x-2 px-2 py-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full cursor-pointer w-[85%]'>
        <div className='w-6 h-6'>{icon}</div>
        <span className='text-lg hidden lg:block'>{title}</span>
      </div>
    );
  }
};

export default NavItem;
