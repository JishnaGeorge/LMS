import { PowerIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { signOut } from "../lib/actions";
PowerIcon
const Header: React.FC = () => {
  return (
    <>
      <div className="flex grow flex-row justify-between space-x-2 
      md:flex-col md:space-x-0 md:space-y-2">
        <div className="font-bold text-white text-3xl p-2 pl-1">
          REALM
          <p className="text-xs font-thin tracking-wide">your playground...!</p>
        </div>

        <div>
          <Link href="/dashboard">
            <span className="mx-4 text-white">Dashboard</span>
          </Link>
          {/* <Link href="/login">
            <span className="text-white">Login</span>
          </Link> */}
        </div>
        <PowerIcon className="w-6 h-6"></PowerIcon>


        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>


    </>
  );
};

export default Header;
