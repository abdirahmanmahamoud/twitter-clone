import { AccountType } from "@prisma/client";
import { HiBadgeCheck } from "react-icons/hi";

const VerifiedBtn = ({ verified }: { verified: AccountType }) => {
  if (verified == "profile") {
    return <HiBadgeCheck className='w-[1.1rem] h-[1.1rem] text-[#1D9BF0]' />;
  }

  if (verified == "business") {
    return <HiBadgeCheck className='w-[1.1rem] h-[1.1rem] text-[#E2B819]' />;
  }

  if (verified == "government") {
    return <HiBadgeCheck className='w-[1.1rem] h-[1.1rem] text-[#829AAB]' />;
  }
};

export default VerifiedBtn;
