import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollableList from "./ScrollableList"
import Button from './Button'
import AddableScrollableList from './AddableScrollableList'

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#141416] relative pb-32">
      
      <div className='m-8'>
        <div className='h1 self-start text-white'>Hello, Joseph!</div>
        <div className='h2 self-start text-[48px]'>Bet on yourself</div>
      </div>
      <div className="flex w-full flex-1">
        <div className="flex-1 flex flex-col max-h-[360px] items-center rounded-3xl justify-start p-4 bg-[#1f1f1f] m-2 ">
          <h2 className="text-white p1 m-3 ">Completed Goals  </h2>
          <ScrollableList />
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-start p-4 bg-[#1f1f1f] rounded-3xl m-2 ">
          <h2 className="text-white p1  m-3 ">Pending Goals</h2>
          <AddableScrollableList />
          
        </div>

        
        <div className="flex-1 flex flex-col items-center justify-start p-4  m-2 overflow-show relative">
        <img className="absolute z-10 top-4 right-0 left-[-10%] w-[125%] max-w-[758px] max-h-[758px] object-cover" src='/8513384.png' alt='Joseph'></img>
        <div className='p3 self-start text-white'>Your Balance</div>
          <div className='h1 self-start text-white'>3.4 $NEAR</div>
          <div className='h2 self-start text-[28px]'>$NEAR price: 26usd</div>
          
        </div>
      </div>
    </div>
  )
}

export default App
