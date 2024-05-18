import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollableList from "./ScrollableList"
import TableList from './TableList'

function Marketplace() {
  return (
    <div className="z-6 h-full w-full bg-[#141416] flex items-center justify-center p-4">
      <div className="h1 m-8"> Global Goals </div>
      <div className="w-[70%] bg-[#1f1f1f] p-4 m-4 overflow-hidden rounded-3xl">
      <TableList></TableList>
      </div>
      
    </div>
  )
}

export default Marketplace
