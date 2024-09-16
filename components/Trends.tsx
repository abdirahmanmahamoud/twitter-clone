import { Ellipsis } from "lucide-react";

const Trends = () => {
  return (
    <div className='w-[20%] fixed shadow-3xl shadow-black/20'>
      <div className='w-full py-3 px-2'>
        <h1 className='text-lg font-bold'>Trends For You</h1>
      </div>
      <div className='mt-2 space-y-2'>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Liverpool</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Somalia</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Qaza</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Manchester United</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Canada</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Macruuf tech</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Mogadishu</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Nextjs</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Africa</h2>
        </div>
        <div className='w-full py-2 px-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
          <div className='w-full flex items-center justify-between'>
            <span className='text-sm font-normal'>trends</span>
            <Ellipsis className='w-4 h-4 cursor-pointer' />
          </div>
          <h2 className='text-base font-medium'>Champions league</h2>
        </div>
      </div>
    </div>
  );
};

export default Trends;
