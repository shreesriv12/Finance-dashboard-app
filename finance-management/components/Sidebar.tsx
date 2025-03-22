"use client"
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Sidebar = ({ user }: SidebarProps) => {
    const pathname=usePathname();
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-gray-900 max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]'>

      <nav className='flex flex-col gap-4'>
        {/* Correct Navigation Link */}
        <Link href='/' className='mb-12 flex items-center gap-2'>
          <Image 
            src='/icons/logo.svg' 
            width={34} 
            height={34} 
            alt="Horizon logo" 
            className="w-[24px] h-[24px] max-xl:w-14 max-xl:h-14"
          />
          <h1 className='2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1 max-xl:hidden'>Horizon</h1>
        </Link>

     {sidebarLinks.map((item)=>{
        const isActive=pathname===item.route||pathname.startsWith(`${item.route}/`)
        return (
            <Link 
              href={item.route} 
              key={item.label}
              className={cn(
                'sidebar-link px-4 py-2 rounded-lg transition hover:bg-gray-100',
                isActive ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'text-gray-700'
              )}
            >
                <div className='relative size-6'>
                    <Image 
                    src={item.imgURL}
                    alt={item.label}
                    fill
                    className={cn(
                        'brightness-[3]', 
                        { 'invert-0': isActive }  // Conditional class application
                      )}/>
                </div>
                <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
        )
     })}
      </nav>
    </section>
  )
}

export default Sidebar
