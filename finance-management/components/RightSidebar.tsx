import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="hidden h-screen max-h-screen flex-col border-l border-gray-200 xl:flex w-[355px] xl:overflow-y-scroll">
      
      {/* Profile Section */}
      <section className="flex flex-col pb-8">
        <div className="h-[120px] w-full bg-[radial-gradient(circle,#ff9a9e,#fad0c4,#fbc2eb)] bg-cover bg-no-repeat" />
        
        <div className="relative flex flex-col items-center px-6">
          {/* Profile Image */}
          <div className="absolute -top-25 w-24 h-24 rounded-full bg-gray-100 border-8 border-white p-2 shadow-lg shadow-gray-400/50 z-10">
            <div className="flex items-center justify-center w-full h-full">
              <span className="text-5xl font-bold text-blue-500">
                {user.firstName[0]}
              </span>
            </div>
          </div>
          {/* Name & Email with spacing */}
          <div className="flex flex-col items-center pt-40">
            <h1 className="text-2xl  font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h1>
            <p className="text-base text-gray-600">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      {/* Banks Section */}
      <section className="flex flex-col gap-8 px-6 py-5">
        <div className="flex w-full justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">My Banks</h2>
          <Link href="/" className="flex  items-center">
            <Image 
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-sm font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative z-10'>
              <BankCard 
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard 
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  )
}

export default RightSidebar
