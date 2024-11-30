import Signup from "@/components/Signup";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "新規登録",
};

const Page = () => {
  return (
    <>
      <div className="h-screen w-screen bg-green-400/30 flex flex-col items-center justify-center">
        <Signup />
      </div>
    </>
  );
};

export default Page;
