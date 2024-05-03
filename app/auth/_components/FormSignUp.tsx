"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export const FormSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password.length <= 5) {
      toast.error("password must be at least 6 characters");
      setLoading(false);
      return null;
    }

    axios
      .post("/api/auth/signup", formData)
      .then((data) => {
        toast.success(data.data.message);
        router.push("/auth/login");
        setLoading(false);
      })
      .catch((error) => {
        if (error?.response?.data?.message == null) {
          toast.error(error.message);
        } else {
          toast.error(error.response.data.message);
        }
        setLoading(false);
      });
  };

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
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='grid gap-4 py-4'>
            <div className='space-y-1'>
              <Label>Name</Label>
              <Input
                type='text'
                name='name'
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                disabled={loading}
                placeholder='your name'
                className='border border-slate-500 dark:border-slate-300'
                required
              />
            </div>
            <div className='space-y-1'>
              <Label>Email</Label>
              <Input
                type='email'
                name='email'
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                disabled={loading}
                placeholder='your email'
                className='border border-slate-500 dark:border-slate-300'
                required
              />
            </div>
            <div className='space-y-1'>
              <Label>Username</Label>
              <Input
                type='text'
                name='username'
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                disabled={loading}
                placeholder='your username'
                className='border border-slate-500 dark:border-slate-300'
                required
              />
            </div>
            <div className='space-y-1'>
              <Label>Password</Label>
              <Input
                type='password'
                name='password'
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                disabled={loading}
                placeholder='******'
                className='border border-slate-500 dark:border-slate-300'
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              className='bg-blue-600 text-white hover:bg-blue-600/65'
              disabled={loading}
            >
              {loading ? "Create...." : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
