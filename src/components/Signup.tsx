"use client";

import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const SignupSchema = z.object({
  username: z.string().min(2).max(50),
  mailaddress: z.string().email(),
  firstpassword: z.string().min(6).max(24),
  secondpassword: z.string().min(6).max(24),
});

type SignupFormSchema = z.infer<typeof SignupSchema>;

const Signup = () => {
  const Signupform = useForm<SignupFormSchema>({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: SignupFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <>
      <div className=" bg-teal-200 rounded-xl shadow-xl flex flex-col p-10 gap-5 space-y-5">
        <Form {...Signupform}>
          <form
            onSubmit={Signupform.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={Signupform.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Form {...Signupform}>
          <form
            onSubmit={Signupform.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={Signupform.control}
              name="mailaddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Form {...Signupform}>
          <form
            onSubmit={Signupform.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={Signupform.control}
              name="firstpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Form {...Signupform}>
          <form
            onSubmit={Signupform.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={Signupform.control}
              name="firstpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Form {...Signupform}>
          <form
            onSubmit={Signupform.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={Signupform.control}
              name="secondpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </>
  );
};
export default Signup;
