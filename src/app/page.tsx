import Login from "@/components/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン",
};

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-green-400/30 flex flex-col items-center justify-center">
        <Login />
      </div>
    </>
  );
}
