import { Avatar, AvatarImage } from "@/components/ui/avatar";
import VerifiedBtn from "@/components/VerifiedBtn";
import { cn } from "@/lib/utils";
import UserImg from "@/public/userImage.png";
import { AccountType } from "@prisma/client";

const AccountLogin = () => {
  const users = [
    {
      id: 1,
      name: "Abdirahman mohamoud",
      username: "abdumahamoud",
      image:
        "https://pbs.twimg.com/profile_images/1749506647691603968/9B8bdn3n_400x400.jpg",
      accountType: "profile",
      verifiedBtn: false,
    },
    {
      id: 2,
      name: "macruuf tech",
      username: "macruuftech",
      image:
        "https://pbs.twimg.com/profile_images/1820125844666245120/xcQUV1BY_400x400.jpg",
      accountType: "business",
      verifiedBtn: true,
    },
  ];
  return (
    <div className='space-y-2'>
      {users.map((user) => (
        <div
          className='w-full px-2 py-2 border-b-[0.5px] border-black/10 dark:border-white/10 flex cursor-pointer hover:bg-black/5 dark:hover:bg-white/5'
          key={user.id}
        >
          <div className='w-8 h-8'>
            <Avatar
              className={cn(
                "w-full h-full",
                user.accountType == "business" ? "rounded-lg" : "rounded-full"
              )}
            >
              <AvatarImage
                src={user.image || (UserImg as any)}
                alt={user.username as string}
              />
            </Avatar>
          </div>
          <div className='ml-2 flex flex-col'>
            <div className='w-full flex items-center'>
              <span className='font-bold text-base line-clamp-1 leading-4'>
                {user.name}
              </span>
              {user.verifiedBtn && (
                <div className='ml-1'>
                  <VerifiedBtn verified={user.accountType as AccountType} />
                </div>
              )}
            </div>
            <span className='text-sm line-clamp-1 leading-5 font-normal'>
              @{user.username}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountLogin;
