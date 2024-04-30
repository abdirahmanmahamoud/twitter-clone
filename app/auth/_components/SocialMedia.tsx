"use client";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export const SocialMedia = () => {
  const handleSingIn = (provider: string) => {
    signIn(provider, {
      callbackUrl: "/",
    });
  };

  return (
    <div className='w-full space-y-3'>
      <Button
        className='w-full flex items-center justify-center space-x-2'
        variant='outline'
        onClick={() => handleSingIn("google")}
      >
        <FaGoogle className='w-4 h-4' />
        <span className='text-[1rem]'>Login with google</span>
      </Button>
      <Button
        className='w-full flex items-center justify-center space-x-2'
        variant='outline'
        onClick={() => handleSingIn("github")}
      >
        <FaGithub className='w-4 h-4' />
        <span className='text-[1rem]'>Login with github</span>
      </Button>
    </div>
  );
};
