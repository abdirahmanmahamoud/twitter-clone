import { Search, XIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import VerifiedBtn from "./VerifiedBtn";
import { AccountType } from "@prisma/client";

const SearchUser = () => {
  const dataUser = [
    {
      id: 1,
      name: "Premier League",
      username: "premierleague",
      image:
        "https://pbs.twimg.com/profile_images/1742837199005954048/YGI6Kw7P_400x400.jpg",
      verifiedBtn: true,
      accountType: "business",
    },
    {
      id: 2,
      name: "Abdirahman mohamoud",
      username: "abdumahamoud",
      image:
        "https://pbs.twimg.com/profile_images/1749506647691603968/9B8bdn3n_400x400.jpg",
      verifiedBtn: true,
      accountType: "profile",
    },
    {
      id: 3,
      name: "Chelsea Fc",
      username: "chelseafc",
      image:
        "https://pbs.twimg.com/profile_images/1815865972546232320/-QRROdbI_400x400.jpg",
      verifiedBtn: true,
      accountType: "business",
    },
  ];
  return (
    <div>
      <div className='w-[20%] fixed'>
        <div className='flex items-center space-x-2 mt-1 rounded-2xl shadow-md bg-slate-200 dark:bg-slate-700 py-2 px-3'>
          <Search className='w-4 h-4' />
          <input
            type='search'
            placeholder='Search'
            className='w-full bg-transparent border-none outline-none text-lg'
          />
        </div>
        <div className='w-full absolute mt-1 bg-white dark:bg-black h-[32rem] overflow-auto shadow-md py-2 px-2 hidden'>
          <div className='w-full flex items-center justify-between'>
            <h2 className='text-lg font-bold'>Recent</h2>
            <h2 className='text-base font-medium text-blue-700'>Clear</h2>
          </div>
          <div className='w-full mt-2 space-y-2'>
            {dataUser.map((user) => (
              <div className='w-full flex items-center space-x-3 hover:bg-slate-300 dark:hover:bg-slate-600'>
                <div className='w-10 h-10'>
                  <Avatar
                    className={cn(
                      "w-full h-full",
                      user.accountType == "business"
                        ? "rounded-none"
                        : "rounded-full"
                    )}
                  >
                    <AvatarImage
                      src={user.image}
                      alt={user.username as string}
                      className={cn(
                        "w-full h-full",
                        user.accountType == "business"
                          ? "rounded-none"
                          : "rounded-full"
                      )}
                    />
                  </Avatar>
                </div>
                <div className='w-[77%] flex flex-col'>
                  <div className='w-full flex items-center'>
                    <span className='font-bold text-base line-clamp-1 leading-4'>
                      {user.name}
                    </span>
                    {user.verifiedBtn && (
                      <div className='ml-1'>
                        <VerifiedBtn
                          verified={user.accountType as AccountType}
                        />
                      </div>
                    )}
                  </div>
                  <span className='text-sm line-clamp-1 leading-5 font-normal'>
                    @{user.username}
                  </span>
                </div>
                <div className='w-[12%] h-full flex items-center justify-center'>
                  <XIcon className='w-5 h-5 cursor-pointer text-blue-800' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
