"use client";

import { SignupFunction } from "@/action/test";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignupSchema = z.object({
  username: z.string().min(2).max(50),
  mailaddress: z.string().email(),
  firstpassword: z.string().min(6).max(24),
  secondpassword: z.string().min(6).max(24),
});

export type SignupFormSchema = z.infer<typeof SignupSchema>;

const Signup = () => {
  const router = useRouter();
  const Signupform = useForm<SignupFormSchema>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
      mailaddress: "",
      firstpassword: "",
      secondpassword: "",
    },
  });

  async function onSubmit(values: SignupFormSchema) {
    try {
      if (values.firstpassword === values.secondpassword) {
        SignupFunction(values);
        Signupform.reset();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className=" bg-teal-200 rounded-xl shadow-xl flex flex-col p-10 gap-5">
        <Form {...Signupform}>
          <form
            onSubmit={Signupform.handleSubmit(onSubmit)}
            className="space-y-5 flex flex-col"
          >
            <h2 className="text-2xl font-bold">新規登録</h2>
            <FormField
              control={Signupform.control}
              name="username"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>ユーザーネーム</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={Signupform.control}
              name="mailaddress"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>メールアドレス</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={Signupform.control}
              name="firstpassword"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>パスワード</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={Signupform.control}
              name="secondpassword"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>確認用パスワード</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="self-center">
              新規登録
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};
export default Signup;
