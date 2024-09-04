import { Pencil } from "lucide-react";
import React from "react";

const BtnTweet = () => {
  return (
    <div className='mt-3 w-full flex items-center justify-center  bg-blue-500 py-2 rounded-full cursor-pointer'>
      <Pencil className='w-5 h-5 text-white lg:hidden' />
      <span className='text-white hidden lg:block'>Tweet</span>
    </div>
  );
};

export default BtnTweet;
