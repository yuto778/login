import Logout from "@/components/Logout";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";

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
      <div>
        <h2>{userdata?.mailaddress}</h2>
        <h2>{userdata?.username}</h2>
      </div>
      <Logout />
    </>
  );
};

export default Page;
