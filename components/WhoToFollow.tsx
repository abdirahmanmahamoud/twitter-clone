import db from "@/lib/db";
import UserRow from "./UserRow";

const WhoToFollow = async () => {
  const users = await db.user.findMany({});
  const user = users.slice(0, 3);

  return (
    <div className='mt-3 shadow-3xl shadow-black/20 dark:shadow-white/20 rounded-b-2xl z-0'>
      <div className='w-full py-3 px-2'>
        <h1 className='text-lg font-bold'>Who To Follow</h1>
      </div>
      <div className='w-full mt-2 space-y-2'>
        {user.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </div>
      <div className='w-full rounded-b-2xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer'>
        <span className='text-sm text-blue-700'>Show more</span>
      </div>
    </div>
  );
};

export default WhoToFollow;
