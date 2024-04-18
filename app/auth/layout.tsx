import { Card } from "@/components/ui/card";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-slate-200 dark:bg-slate-900'>
      <Card className='w-[95%] md:w-1/3 shadow-2xl'>{children}</Card>
    </div>
  );
};

export default AuthLayout;
