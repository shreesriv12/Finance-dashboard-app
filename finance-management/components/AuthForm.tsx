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
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

// Extended schema to include password validation
const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthForm = ({ type }: { type: string }) => {
  const router=useRouter();
    const [isLoading ,setIsLoading]=useState(false);

  const [user, setUser] = useState(null);
 const formSchema=authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {


    setIsLoading(true)
   try{
    

    if(type==='sign-up'){
    //  const newUser= await Signup(data);
    //  setUser(newUser);
    }
    if(type==='sign-in'){
      // const response = await signIn({
      //     email:data.email,
      //     password:data.password
      // })
      // if(response)
      //   router.push('/')
    }
   }catch(error){
    console.log(error)
   }finally{
    setIsLoading(false);
   }
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
              {type==='sign-up' &&(
                <>
                <div className="flex gap-4">
                <CustomInput
                control={form.control}
                name="firstName"
                label="First name"
                placeholder="Enter your first name"
              />
               <CustomInput
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
              />     
                </div>
             
              <CustomInput
                control={form.control}
                name="address1"
                label="Address"
                placeholder="Enter your specific address"
              />
               <CustomInput
                control={form.control}
                name="city"
                label="City"
                placeholder="Enter your city"
              />

              <div className="flex gap-4">
              <CustomInput
                control={form.control}
                name="state"
                label="State"
                placeholder="Example:Delhi"
              />
               <CustomInput
                control={form.control}
                name="postalCode"
                label="Postal Code"
                placeholder="Example: 11101"
              />
              </div>
              <div className="flex gap-4">
               <CustomInput
                control={form.control}
                name="dateOfBirth"
                label="Date of Birth"
                placeholder="YYYY-MM-DD"
              />
              <CustomInput
                control={form.control}
                name="ssn"
                label="SSN"
                placeholder="Example:1234"
              />
              </div>
                </>
              )}
              
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

              <div className="flex flex-col gap-4">
              <Button className="text-16 rounded-lg bg-gradient-to-r from-blue-700 to-blue-500  font-semibold text-white shadow-lg p-4" type="submit" disabled={isLoading}>
                {isLoading?(
                  <>
                  <Loader2 size={20}
                  className="animate-spin"/>&nbsp;
                  Loading...
                  </>
                ):type==='sign-in'
                ?'Sign In':'Sign Up'}
              </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600"
            >{type==='sign-in'
            ? "Don't have an account?"
            : "Already have an account?"}
            </p>
            <Link href={type==='sign-in' ? '/sign-up' : '/sign-in'} className="text-14 cursor-pointer font-medium text-blue-500">
            {type==='sign-in'?'Sign-up':'Sign-in'}
            </Link>
            </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
