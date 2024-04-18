import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

export const SocialMedia = () => {
  return (
    <div className='w-full space-y-3'>
      <Button
        className='w-full flex items-center justify-center space-x-2'
        variant='outline'
      >
        <FaGoogle className='w-4 h-4' />
        <span className='text-[1rem]'>Login with google</span>
      </Button>
      <Button
        className='w-full flex items-center justify-center space-x-2'
        variant='outline'
      >
        <FaGithub className='w-4 h-4' />
        <span className='text-[1rem]'>Login with github</span>
      </Button>
    </div>
  );
};
