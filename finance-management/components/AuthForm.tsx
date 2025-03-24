"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CustomInput from "./CustomInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormMessage,
} from "@/components/ui/form";
import { authFormSchema } from "@/lib/utils"; // Use the imported schema

// Extended schema to include password validation
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthForm = ({ type }: { type: string }) => {
    const [isLoading ,setIsLoading]=useState(false);

  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {


    setIsLoading(true)
    console.log(values);
    setIsLoading(false)
  };

  return (
    <section className="flex min-h-screen w-full max-w-[420px] flex-col justify-center gap-5 py-10 md:gap-8">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? "Link Account"
              : type === "sign-in"
              ? "Sign In"
              : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Enter your details to sign in"}
          </p>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4"></div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Matching schema field names */}
              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <FormMessage />
              <CustomInput
                control={form.control}
                name="username"
                label="Username"
                placeholder="Enter your username"
              />
                            <FormMessage />

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
               
              <FormMessage />

              <Button className="text-16 rounded-lg border border-bankGradient bg-bank-gradient font-semibold text-white shadow-form" type="submit">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
