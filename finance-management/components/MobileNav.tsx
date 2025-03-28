"use client"
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
  

  
const MobileNav = ({user}:MobileNavProps) => {

    const pathname=usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
  <SheetTrigger>
    <Image
     src='/icons/hamburger.svg'
    width={30}
    height={30}
    alt="menu"
    className="cursor-pointer"
    />
  </SheetTrigger>
  <SheetContent side='left' className='border-none bg-white'>
  <nav className='flex flex-col gap-4'>
        <Link href='/' className='cursor-pointer flex items-center gap-1 px-4'>
          <Image 
            src='/icons/logo.svg' 
            width={34} 
            height={34} 
            alt="Horizon logo" 
          />
          <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
        </Link>
        <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((item)=>{
        const isActive=pathname===item.route||pathname.startsWith(`${item.route}/`)
        return (
            <SheetClose asChild key={item.route}>
                <Link 
              href={item.route} 
              key={item.label}
              className={cn(
                'flex gap-3 items-center p-4 rounded-lg w-full max-w-60 w-full',
                isActive ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'text-gray-700'
              )}
            >
                <div className='relative size-6'>
                    <Image 
                    src={item.imgURL}
                    alt={item.label}
                    width={20}
                    height={20}
                    className={cn(
                        'brightness-[3]', 
                        { 'invert-0': isActive }  
                      )}/>
                </div>
                <p className={cn("text-16 font-semibold text-black-2", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
            </SheetClose>
            )
     })}
                </nav>
            </SheetClose>
        </div>
      </nav>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav
