"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { LoginFunction } from "@/action/LoginFunction";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const LoginSchema = z.object({
  mailaddress: z.string().email(),
  password: z.string().min(6).max(24),
});

export type LoginFromSchema = z.infer<typeof LoginSchema>;

const Login = () => {
  const router = useRouter();

  const Loginform = useForm<LoginFromSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      mailaddress: "",
      password: "",
    },
  });

  const onSubmit = async (valeus: LoginFromSchema) => {
    const toastId = toast.loading("ログイン中");

    try {
      await LoginFunction(valeus);
      toast.success("ログイン成功🚀", { id: toastId });
      router.push("/dashboard");
    } catch (error) {
      toast.error("失敗しました", { id: toastId });
      console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <div className=" bg-teal-200 rounded-xl shadow-xl flex flex-col p-10 gap-5 space-y-5">
        <h2 className="text-xl font-bold">ログインフォーム</h2>
        <Form {...Loginform}>
          <form
            onSubmit={Loginform.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={Loginform.control}
              name="mailaddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>メールアドレス</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={Loginform.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>パスワード</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} type="password" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Link href={"/signup"}>新規登録</Link>
      </div>
    </>
  );
};

export default Login;
