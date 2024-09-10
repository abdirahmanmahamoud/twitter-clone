"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { User } from "@prisma/client";
import UserImg from "@/public/userImage.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Annoyed,
  CalendarCheck,
  ImageMinus,
  ListChecks,
  MapPin,
  XIcon,
} from "lucide-react";
import { MdOutlineGifBox } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { MentionsInput, Mention } from "react-mentions";
import { useEffect, useRef, useState } from "react";
import VerifiedBtn from "@/components/VerifiedBtn";
import { FaUser } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import EmojiPopover from "@/components/EmojiPopover";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface createPostProps {
  user: User;
  userMention: User[];
}

const CreatePost = ({ user, userMention }: createPostProps) => {
  const [value, setValue] = useState("");
  const [mentionUser, setMentionUser] = useState<string | null>();
  const [hashTag, setHashTag] = useState<string | null>();
  const [file, setFile] = useState<File | null>();
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(true);
  const router = useRouter();
  const imageElementRef = useRef<HTMLInputElement>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    if (value.length > 0) {
      setLoadingBtn(false);
    }
  }, [value]);

  const onEmojiSelect = (emoji: any) => {
    setValue((prev) => prev + emoji.native);
  };

  const handleSubmit = () => {
    setLoading(true);
    setLoadingBtn(true);

    if (file == null) {
      axios
        .post("/api/post", {
          value,
          mentionUser,
          hashTag,
          file,
        })
        .then((res) => {
          toast.success("Post created successfully");
          setValue("");
          setMentionUser(null);
          setHashTag(null);
          setFile(null);
          setLoading(false);
          router.refresh();
        })
        .catch((error) => {
          if (error?.response?.data?.message == null) {
            toast.error(error.message);
          } else {
            toast.error(error.response.data.message);
          }
          setLoading(false);
          setLoadingBtn(false);
        });
    } else {
      const upload = async () => {
        const bucket = "img-x";
        const { data, error } = await supabase.storage
          .from(bucket)
          .upload(file.name, file);

        // Handle error if upload failed
        if (error) {
          alert("Error uploading file.");
          return;
        }
        axios
          .post("/api/post", {
            value,
            mentionUser,
            hashTag,
            file: data.path,
          })
          .then((res) => {
            toast.success("Post created successfully");
            setValue("");
            setMentionUser(null);
            setHashTag(null);
            setFile(null);
            setLoading(false);
            router.refresh();
          })
          .catch((error) => {
            if (error?.response?.data?.message == null) {
              toast.error(error.message);
            } else {
              toast.error(error.response.data.message);
            }
            setLoading(false);
            setLoadingBtn(false);
          });
      };
      upload();
    }
  };

  return (
    <div className='w-[95%] px-2 py-3 border-[0.5px] border-black/10 dark:border-white/10'>
      <input
        type='file'
        accept='image/*'
        ref={imageElementRef}
        onChange={(e) => setFile(e.target.files?.[0])}
        className='hidden'
      />
      <div className='w-full px-2 flex'>
        <div className='w-11 h-11'>
          <Avatar
            className={cn(
              "w-full h-full",
              user.accountType == "business" ? "rounded-none" : "rounded-full"
            )}
          >
            <AvatarImage
              src={user.image || (UserImg as any)}
              alt={user.username as string}
            />
          </Avatar>
        </div>
        <div className='w-full ml-4'>
          <MentionsInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='What is happening?'
            className='w-full h-10 bg-transparent outline-none text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30'
            disabled={loading}
          >
            <Mention
              trigger='@'
              data={userMention
                .filter((user) => user.username !== null)
                .map((user) => ({
                  id: user.username!,
                  userId: user.id!,
                  display: "@" + user.username!,
                  name: user.name!,
                  image: user.image || (UserImg as any),
                  accountType: user.accountType!,
                  verifiedBtn: user.verifiedBtn!,
                }))}
              renderSuggestion={(user: any) => (
                <div
                  className='flex items-center space-x-2 py-2 px-2'
                  key={user.userId}
                  onClick={() => setMentionUser(user.userId)}
                >
                  <Avatar
                    className={cn(
                      "w-8 h-8",
                      user.accountType == "business"
                        ? "rounded-none"
                        : "rounded-full"
                    )}
                  >
                    <AvatarImage
                      src={user.image || (UserImg as any)}
                      alt={user.username as string}
                    />
                  </Avatar>
                  <div className='w-full flex flex-col'>
                    <div className='w-full flex'>
                      <span className='font-bold text-base line-clamp-1 leading-5'>
                        {user.name}
                      </span>
                      {user.verifiedBtn && (
                        <div className='ml-2'>
                          <VerifiedBtn verified={user.accountType} />
                        </div>
                      )}
                    </div>
                    <span className='text-sm line-clamp-1 leading-5'>
                      {user.display}
                    </span>
                    <div className='w-full flex items-center space-x-2'>
                      <FaUser className='w-3 h-3 bg-slate-300 dark:bg-slate-700' />
                      <span className='text-sm font-normal'>Following</span>
                    </div>
                  </div>
                </div>
              )}
            />
            {/* <Mention
              trigger='#'
              data={userMention}
              // renderSuggestion={this.renderTagSuggestion}
            /> */}
          </MentionsInput>
          {/* <textarea
            placeholder='What is happening?'
            className='w-full h-10 bg-transparent outline-none text-black dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30'
          /> */}
          {file && (
            <div className='w-full px-2 relative group/image'>
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                width={500} // Set a base width
                height={500 * (9 / 16)} // Set height according to a ratio (e.g., 16:9)
                className='w-full rounded-lg'
                layout='responsive'
              />
              <div
                className='w-6 h-6 absolute top-0 right-0 z-50 bg-black dark:bg-white rounded-full cursor-pointer hidden group-hover/image:flex items-center justify-center'
                onClick={() => {
                  setFile(null);
                  // imageElementRef.current?.value = "";
                }}
              >
                <XIcon className='w-5 h-5 text-white dark:text-black' />
              </div>
            </div>
          )}

          <div className='w-full flex items-center justify-between mt-2'>
            <div className='w-full flex items-center space-x-4'>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <ImageMinus
                      className='w-5 h-5 text-blue-600'
                      onClick={() => imageElementRef.current?.click()}
                    />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Media</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <MdOutlineGifBox className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Gif</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <ListChecks className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Poll</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <EmojiPopover onEmojiSelect={onEmojiSelect} />

              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Annoyed className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Emoji</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CalendarCheck className='w-5 h-5 text-blue-600' />
                  </TooltipTrigger>
                  <TooltipContent className='bg-slate-300 text-black dark:bg-slate-700 dark:text-white'>
                    <p>Schedule</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <MapPin className='w-5 h-5 text-blue-600/50' />
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className='w-full flex justify-end pr-3'>
              <Button
                className='bg-blue-600 text-white hover:bg-blue-600 hover:text-white rounded-full'
                disabled={loadingBtn}
                onClick={handleSubmit}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
