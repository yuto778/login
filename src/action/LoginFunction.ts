"use server";

import { LoginFromSchema } from "@/components/Login";
import { createClient } from "../../supabase/server";

export const LoginFunction = async (value: LoginFromSchema) => {
  const supabase = createClient();

  try {
    const {
      data: { user },
      error,
    } = await (
      await supabase
    ).auth.signInWithPassword({
      email: value.mailaddress,
      password: value.password,
    });

    if (error) {
      console.log(error);
    }

    console.log(user);

    return user?.email;
  } catch (error) {
    console.log(error);
  }
};
