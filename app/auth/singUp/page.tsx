import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SocialMedia } from "../_components/SocialMedia";
import { FormSignUp } from "../_components/FormSignUp";
import Link from "next/link";

const singUpPage = () => {
  return (
    <>
      <CardHeader>
        <CardTitle className='text-lg leading-4'>Sign up to X</CardTitle>
        <CardDescription>create new account</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        <SocialMedia />
        <div className='py-1 text-center text-lg'>Or</div>
        <FormSignUp />
      </CardContent>
      <CardFooter className='my-2 flex flex-col items-center justify-center space-y-1 text-lg'>
        <span>
          Already Registred?
          <Link href='/auth/login' className='text-blue-600 ml-1'>
            Login
          </Link>
        </span>
      </CardFooter>
    </>
  );
};

export default singUpPage;
