import { AuthOptions } from "@/AuthOptions";
import SearchUser from "@/components/SearchUser";
import Trends from "@/components/Trends";
import WhoToFollow from "@/components/WhoToFollow";
import db from "@/lib/db";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "./_components/Header";
import CoverInfo from "./_components/CoverInfo";
interface ProfileLayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}

const ProfileLayout = async ({ children, params }: ProfileLayoutProps) => {
  const profileUser = await db.user.findMany({
    where: { username: params.username },
  });
  const session = await getServerSession(AuthOptions);
  const user = session?.user as User | null;

  if (!profileUser[0]) {
    return redirect("/");
  }

  const postsCount = await db.post.count({
    where: {
      createUser: profileUser[0].id,
    },
  });

  return (
    <div className='w-full flex'>
      <div className='w-full lg:w-[70%]'>
        <Header
          profile={profileUser[0]}
          postsCount={postsCount}
          sessionUser={user as User}
        />
        <div className='mt-16 w-full px-4'>
          <CoverInfo profile={profileUser[0]} sessionUser={user as User} />
          <data className='mt-1'>{children}</data>
        </div>
      </div>
      <div className='hidden lg:block lg:w-[30%]'>
        <SearchUser />
        <div className='mt-16 z-0'>
          <WhoToFollow />
          <Trends />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
