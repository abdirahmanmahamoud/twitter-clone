import { FaXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <div className='w-full h-screen border-r-1 sm:flex sm:justify-center lg:justify-start pt-2'>
      <div className='w-12 h-12 rounded-full hover:bg-black/15 dark:hover:bg-white/15 cursor-pointer flex items-center justify-center'>
        <FaXTwitter className='text-3xl cursor-pointer text-black dark:text-white' />
      </div>
    </div>
  );
};

export default NavBar;
