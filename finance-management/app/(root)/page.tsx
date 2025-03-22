import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import '../globals.css'
import TotalBalanceBox from '@/components/TotalBalanceBox'
const Home = () => {
    const loggedIn={firstName:"Shreeya "}
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
    </section>
  )
}

export default Home
