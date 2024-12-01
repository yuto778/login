import Logout from "@/components/Logout";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ダッシュボード",
};

const Page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  if (!user) {
    redirect("/");
  }
  const { data: userdata } = await (await supabase)
    .from("profiles")
    .select("mailaddress,username")
    .eq("id", user!.id)
    .single();

  console.log(userdata);

  return (
    <>
      <div className="h-screen w-screen bg-red-400/80">
        <div className="flex items-center justify-center py-5 ">
          <h2 className="text-xl font-bold">⚡️ダッシュボード⚡️</h2>
        </div>
        <div className=" bg-yellow-300/80 flex flex-col py-5 px-10">
          <h2 className="text-2xl font-bold ">{userdata?.mailaddress}</h2>
          <h2 className="text-2xl font-bold ">{userdata?.username}</h2>
        </div>
        <div className="px-10 py-5">
          <Logout />
        </div>
      </div>
    </>
  );
};

export default Page;
