"use client";
import { Search, XIcon } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import VerifiedBtn from "./VerifiedBtn";
import { AccountType } from "@prisma/client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type userData = {
  id: string;
  name: string;
  username: string;
  image?: string;
  verifiedBtn: boolean;
  accountType: AccountType;
};

const SearchUser = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState<userData[] | null>([]);
  const [apiData, setApiData] = useState<userData[] | null>([]);
  const [xShow, setXShow] = useState<"local" | "data">("local");
  const [localData, setLocalData] = useState<userData[] | null>([]);

  const handleShow = (e: any) => {
    if (e.target.classList[5] == "click5") {
      setShow(false);
    }
  };

  const handleClick = (id: string) => {
    let localstorage = JSON.parse(localStorage.getItem("user") as string) || [];

    localstorage.push(id);
    localStorage.setItem("user", JSON.stringify(localstorage));
  };

  useEffect(() => {
    if (search.length == 0) {
      setData(localData);
      setXShow("local");
      return;
    }
    const SearchUser = apiData?.filter((user) => {
      if (
        user.name?.toLowerCase().includes(search.toLowerCase()) ||
        user.username?.toLowerCase().includes(search.toLowerCase())
      ) {
        return user;
      }
    });

    setData(SearchUser as userData[]);
    setXShow("data");
  }, [search]);

  useEffect(() => {
    // Fetch API data
    axios.get("/api/user/search").then((res) => {
      setApiData(res.data.data);
    });
  }, []);

  const handleX = (id: string) => {
    const localStorageData: string[] =
      JSON.parse(localStorage.getItem("user") as string) || [];

    // Remove item from local storage
    const newLocalStorageData = localStorageData.filter((item) => item !== id);
    localStorage.setItem("user", JSON.stringify(newLocalStorageData));

    let dataLo: userData[] | null = [];

    newLocalStorageData?.map((item) => {
      const dataLocal: any = apiData?.filter((user) => {
        return user.id === item;
      });

      dataLo.push(...dataLocal);
    });
    setLocalData(dataLo);
    setData(dataLo);
    setXShow("local");
  };

  useEffect(() => {
    if (apiData && apiData.length > 0) {
      const localStorageData: string[] =
        JSON.parse(localStorage.getItem("user") as string) || [];

      let dataLo: userData[] | null = [];

      localStorageData.map((item) => {
        const dataLocal: userData[] = apiData?.filter((user) => {
          return user.id === item;
        });

        dataLo.push(...dataLocal);
      });
      setLocalData(dataLo);
      setData(dataLo);
      setXShow("local");
    }
  }, [apiData]);

  const clear = () => {
    localStorage.removeItem("user");
    setLocalData([]);
    setData([]);
    setXShow("local");
  };

  return (
    <div>
      <div className='w-[20%] fixed'>
        <div
          className='flex items-center space-x-2 mt-1 rounded-2xl shadow-md bg-slate-200 dark:bg-slate-700 py-2 px-3'
          onClick={() => setShow(!show)}
        >
          <Search className='w-4 h-4' />
          <input
            type='search'
            placeholder='Search'
            className='w-full bg-transparent border-none outline-none text-lg'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <div
          className={cn(
            "w-full absolute mt-1 bg-white dark:bg-black max-h-[32rem] overflow-auto shadow-md py-2 px-2 pb-3 z-50 click5",
            show ? "block" : "hidden"
          )}
          onClick={handleShow}
        >
          {xShow == "local" && (
            <div className='w-full flex items-center justify-between'>
              <h2 className='text-lg font-bold'>Recent</h2>
              <h2
                className='text-base font-medium text-blue-700 cursor-pointer'
                onClick={clear}
              >
                Clear
              </h2>
            </div>
          )}
          <div className='w-full mt-2 space-y-2'>
            {data?.map((user) => (
              <div
                className='w-full flex items-center space-x-3 hover:bg-slate-300/45 dark:hover:bg-slate-600/45 cursor-pointer pt-2'
                key={user.id}
              >
                <Link
                  href={`/${user.username}`}
                  onClick={() => handleClick(user.id)}
                  className='w-full flex items-center space-x-2'
                >
                  <div className='w-11 h-11'>
                    <Avatar
                      className={cn(
                        "w-full h-full",
                        user.accountType == "business"
                          ? "rounded-none"
                          : "rounded-full"
                      )}
                    >
                      <AvatarImage
                        src={user.image}
                        alt={user.username as string}
                        className={cn(
                          "w-full h-full",
                          user.accountType == "business"
                            ? "rounded-none"
                            : "rounded-full object-cover"
                        )}
                      />
                    </Avatar>
                  </div>
                  <div className='w-[77%] flex flex-col'>
                    <div className='w-full flex items-center'>
                      <span className='font-bold text-base line-clamp-1 leading-4'>
                        {user.name}
                      </span>
                      {user.verifiedBtn && (
                        <div className='ml-1'>
                          <VerifiedBtn
                            verified={user.accountType as AccountType}
                          />
                        </div>
                      )}
                    </div>
                    <span className='text-sm line-clamp-1 leading-5 font-normal'>
                      @{user.username}
                    </span>
                  </div>
                </Link>
                {xShow == "local" && (
                  <div
                    className='w-[12%] h-full flex items-center justify-center'
                    onClick={() => handleX(user.id)}
                  >
                    <XIcon className='w-5 h-5 cursor-pointer text-blue-800' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
