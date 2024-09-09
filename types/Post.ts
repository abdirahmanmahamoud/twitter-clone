import { AccountType } from "@prisma/client";

export type PostType = {
  id: string;
  createdAt: Date;
  file: string | null;
  text: string;
  mention: string | null;
  reply: number;
  repost: number;
  like: number;
  view: number;
  user: {
    name: string | null;
    id: string;
    image: string | null;
    username: string | null;
    bio: string | null;
    accountType: AccountType;
    verifiedBtn: boolean;
  };
};
