import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialMedia } from "../_components/SocialMedia";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className='text-lg leading-4'>Sign in to X</CardTitle>
        <CardDescription>Sing your account</CardDescription>
      </CardHeader>
      <CardContent>
        <SocialMedia />
        <div className='mt-3 text-center text-lg'>Or</div>
        <div className='pt-2'>
          <form>
            <div className='space-y-4'>
              <div className='space-y-1'>
                <Label className='text-lg'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  className='text-lg'
                  placeholder='example@example.com'
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-lg'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  className='text-lg'
                  placeholder='******'
                />
              </div>
            </div>
            <div className='mt-6'>
              <Button className='w-full bg-blue-700 text-white hover:bg-blue-700/75'>
                Login
              </Button>
            </div>
          </form>
        </div>
      </CardContent>
      <CardFooter className='my-2 flex flex-col items-center justify-center space-y-1 text-lg'>
        <span>
          I dont have account!
          <Link href='/auth/singUp' className='text-blue-600 ml-1'>
            Register
          </Link>
        </span>
        <Link
          href='/auth/ForgetPassword'
          className='text-blue-600 hover:text-blue-600/80'
        >
          Forget Password
        </Link>
      </CardFooter>
    </>
  );
};

export default LoginPage;
