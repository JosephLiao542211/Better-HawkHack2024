import ScrollableList from "./ScrollableList"
import Logout from "./Logoutbutton"
import AddableScrollableList from './AddableScrollableList'

import { createClient } from '@/utils/supabase/client'

async function App() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const wallet_info = await supabase.from('wallets').select('*')

  return (
    <div className="flex flex-col overflow-hidden bg-[#141416] relative pb-32">
      <div className='m-8 grid grid-cols-2'>
        <div className='col-span-1'>
          <div className='text-white h1 mt-10'>Hello, {data.user?.user_metadata.first_name}</div>
          <div className='text-[36px] h2 mt-5'>
  Your so <span className='font-bold'>NEAR</span> you're goals
</div>
        </div>
        <div className='col-span-1 flex justify-end items-center'>
          <div className="mr-20">
          <Logout></Logout>
          </div>
          <img src='Group 8.png' className='max-w-[140px] mr-[5%] max-h-[140px]' />
        </div>
      </div>

      <div className="flex w-full flex-1 m-5 mb-4">
      <div className="flex-1 flex flex-col items-center rounded-3xl justify-start p-4 bg-[#1f1f1f] m-2">
  <div className="w-full">
    <h2 className="text-white p1 m-3 text-left">Completed Goals</h2>
    <ScrollableList />
  </div>
</div>

<div className="flex-1 flex flex-col items-center justify-start p-4 bg-[#1f1f1f] rounded-3xl m-2">
  <div className="w-full">
    <h2 className="text-white p1 m-3 text-left">Pending Goals</h2>
    <AddableScrollableList />
  </div>
</div>
        
        <div className="flex-1 flex flex-col items-center justify-start p-4 m-2 overflow-show relative">
        <img className="absolute z-10 top-28 right-0 left-[-20%] w-[125%] max-w-[758px] max-h-[758px] object-cover" src='/8513384.png' alt='Joseph'></img>
        <div className='p3 self-start text-white'>Your Balance</div>
          <div className='h1 self-start text-white'>24.83 $NEAR</div>
          <div className='h2 self-start text-[28px]'>$NEAR price: 26usd</div>
        </div>
      </div>
    </div>
  )
}

export default App
