import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollableList from "./ScrollableList"
import Button from './Button'

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-[#141416] relative pb-64">
      
      <div>
        <div className='h1 self-start text-white'>Joseph</div>
        <div className='h2 self-start text-white'>Bet on yourself</div>
      </div>
      <div className="flex w-full flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-start p-4 bg-[#1f1f1f] m-2 ">
          <h2 className="text-white">Column 1</h2>
          <ScrollableList />
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-start p-4 bg-[#1f1f1f] m-2 ">
          <h2 className="text-white">Column 1</h2>
          <ScrollableList />
          <Button></Button>
          
        </div>

        
        <div className="flex-1 flex flex-col items-center justify-start p-4 bg-[#343434] m-2 overflow-show relative">
        <img className="absolute z-10 top-48 right-0 left-[58%] w-[50%] max-w-[758px] max-h-[758px] object-cover" src='/8513384.png' alt='Joseph'></img>
          <div className='h1 self-start text-white'>Joseph</div>
          <div className='h2 self-start text-white'>Bet on yourself</div>
          
        </div>
      </div>
    </div>
  )
}

export default App
