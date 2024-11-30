"use client";

import React from "react";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const supabase = createClient();

  const LogoutFunction = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <>
      <Button variant={"outline"} onClick={LogoutFunction}>
        ログアウト
      </Button>
    </>
  );
};

export default Logout;
