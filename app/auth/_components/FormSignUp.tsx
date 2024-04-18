import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const FormSignUp = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='w-full bg-blue-700 hover:bg-blue-700/80 text-white rounded-sm'>
          Create account
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[475px]'>
        <DialogHeader>
          <DialogTitle>Create new account</DialogTitle>
        </DialogHeader>
        <form>
          <div className='grid gap-4 py-4'>
            <div className='space-y-1'>
              <Label>Name</Label>
              <Input
                type='text'
                name='name'
                placeholder='your name'
                className='border border-slate-500 dark:border-slate-300'
              />
            </div>
            <div className='space-y-1'>
              <Label>Email</Label>
              <Input
                type='email'
                name='email'
                placeholder='your email'
                className='border border-slate-500 dark:border-slate-300'
              />
            </div>
            <div className='space-y-1'>
              <Label>Username</Label>
              <Input
                type='text'
                name='username'
                placeholder='your username'
                className='border border-slate-500 dark:border-slate-300'
              />
            </div>
            <div className='space-y-1'>
              <Label>Password</Label>
              <Input
                type='password'
                name='password'
                placeholder='******'
                className='border border-slate-500 dark:border-slate-300'
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              className='bg-blue-600 text-white hover:bg-blue-600/65'
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
