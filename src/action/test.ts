"use server";

import { SignupFormSchema } from "@/components/Signup";
import { createClient } from "../../supabase/server";

export const SignupFunction = async (value: SignupFormSchema) => {
  const supabase = createClient();

  try {
    // signUpメソッドを使用して新規ユーザーを登録
    const { data, error } = await (
      await supabase
    ).auth.signUp({ email: value.mailaddress, password: value.firstpassword });

    if (error) {
      console.log("Signup error:", error);
      return;
    }

    // 新しいユーザーが作成された場合、プロフィール情報を追加
    const { error: userError } = await (await supabase)
      .from("profiles")
      .insert({
        id: data.user?.id,
        mailaddress: value.mailaddress,
        username: value.username,
      });

    if (userError) {
      console.log("Profile insert error:", userError);
    }

    console.log("User created:", data);
  } catch (error) {
    console.log("Unexpected error:", error);
  }
};
