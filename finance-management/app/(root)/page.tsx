import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import '../globals.css'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
const Home = () => {
    const loggedIn={firstName:"Shreeya",lastName:"Srivastava",email:"shreeyasrivastava1124@gmail.com"}
  return (
    <section className="apply no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
        <div className='apply no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen xl:overflow-y-scroll'>
           <header className='apply flex flex-col justify-between gap-8'>
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName||"Guest"}
            subtext="Access and manage your account and transactions efficiently"
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
            </header> 
        </div>
        <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[
          { currentBalance: 1250.35 },
          { currentBalance: 500.50 }
        ]}
        

        />
    </section>
  )
}

export default Home
