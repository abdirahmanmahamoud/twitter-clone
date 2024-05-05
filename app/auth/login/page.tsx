"use client";
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
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
    }).then((data) => {
      if (data?.status == 200) {
        router.push("/");
        router.refresh();
      } else {
        toast.error("Invalid credentials!");
        setLoading(false);
        return null;
      }
    });
  };

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='space-y-4'>
              <div className='space-y-1'>
                <Label className='text-lg'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  className='text-lg'
                  placeholder='example@example.com'
                  disabled={loading}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className='space-y-1'>
                <Label className='text-lg'>Password</Label>
                <Input
                  type='password'
                  name='password'
                  className='text-lg'
                  placeholder='******'
                  disabled={loading}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <div className='mt-6'>
              <Button
                className='w-full bg-blue-700 text-white hover:bg-blue-700/75'
                disabled={loading}
              >
                {loading ? "Login...." : "Login"}
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
