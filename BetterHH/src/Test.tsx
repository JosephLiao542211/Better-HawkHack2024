import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScrollableList from "./ScrollableList"


function Test() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[1920px] h-[1804px] relative bg-neutral-900">
  <div className="w-[1920px] h-[140px] left-0 top-[5222px] absolute">
    <div className="w-[1920px] h-[140px] left-0 top-0 absolute bg-zinc-900"></div>
    <div className="w-[1920px] h-[140px] left-0 top-0 absolute">
      <div className="w-[1920px] h-[140px] left-0 top-0 absolute bg-indigo-500/opacity-20"></div>
      <div className="w-[1090px] h-[1931px] left-[1930px] top-[-314px] absolute origin-top-left rotate-90"></div>
      <div className="opacity-10 w-[2849.27px] h-[1114.97px] left-[-351.04px] top-[-352.73px] absolute">
        <div className="origin-top-left rotate-[-11.56deg] w-[747.57px] h-[427.11px] left-[2031.30px] top-[448.50px] absolute">
          <div className="origin-top-left rotate-[-11.56deg] opacity-75 w-[476.75px] h-[369.52px] left-[216.66px] top-[-44.30px] absolute">
          </div>
          <div className="origin-top-left rotate-[-11.56deg] w-[588.34px] h-[358.35px] left-[13.77px] top-[67.37px] absolute">
          </div>
          <div className="origin-top-left rotate-[-11.56deg] w-[511.35px] h-[325.14px] left-[249.17px] top-[39.44px] absolute">
          </div>
        </div>
      </div>
    </div>
    <div className="left-[255px] top-[34px] absolute">
      <div className="left-0 top-[48px] absolute text-gray-400 text-xl font-normal font-['DM Sans'] leading-7">Rorem ipsum dolor sit amet, consectetur adipiscing elit.Rorem </div>
      <div className="left-0 top-0 absolute text-white text-[32px] font-bold font-['DM Sans'] leading-10">Stay up to dated with latest stock update</div>
    </div>
    <div className="w-[187px] px-6 py-4 left-[1478px] top-[46px] absolute bg-white rounded-[90px] justify-center items-center gap-3 inline-flex">
      <div className="text-zinc-800 text-base font-bold font-['DM Sans'] leading-none">Subscribe</div>
    </div>
  </div>
  <div className="w-[1410px] h-[566px] left-[237px] top-[1032px] absolute">
    <div className="w-[338px] h-[338px] left-[-103px] top-[434px] absolute origin-top-left rotate-180 rounded-full border-2 border-fuchsia-400"></div>
    <div className="w-[1410px] h-[557px] left-0 top-0 absolute">
      <div className="w-[1410px] h-[326px] left-0 top-[231px] absolute">
        <div className="w-[921px] h-7 left-[20px] top-0 absolute">
          <div className="w-4 h-4 left-0 top-[6px] absolute"></div>
          <div className="w-[104px] h-6 left-[93px] top-[2px] absolute justify-center items-center gap-2 inline-flex">
            <div className="text-white text-lg font-bold font-['DM Sans'] leading-normal">Stock name</div>
          </div>
          <div className="left-[862px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">34,823</div>
          <div className="left-[654px] top-0 absolute text-green-400 text-lg font-normal font-['DM Sans'] leading-7">+1.45%</div>
        </div>
        <div className="w-[1410px] h-[145px] left-0 top-[2px] absolute">
          <div className="w-[1410px] h-[88px] left-0 top-[57px] absolute bg-zinc-800 rounded-xl"></div>
          <div className="w-4 h-4 left-[20px] top-[93px] absolute"></div>
          <div className="w-2.5 left-[68px] top-[89px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">2</div>
          <div className="w-2.5 left-[68px] top-0 absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">1</div>
          <div className="w-[104px] h-6 left-[113px] top-[89px] absolute justify-center items-center gap-2 inline-flex">
            <div className="text-white text-lg font-bold font-['DM Sans'] leading-normal">Stock name</div>
          </div>
          <div className="left-[477px] top-[89px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">1082.70</div>
          <div className="left-[882px] top-[89px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">34,823</div>
          <div className="left-[674px] top-[87px] absolute text-red-600 text-lg font-normal font-['DM Sans'] leading-7">-5.12%</div>
        </div>
        <div className="w-[1410px] h-[59px] left-0 top-[178px] absolute">
          <div className="w-[1410px] h-px left-0 top-[58px] absolute bg-zinc-800"></div>
          <div className="w-4 h-4 left-[20px] top-[6px] absolute"></div>
          <div className="w-2.5 left-[68px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">3</div>
          <div className="w-[104px] h-6 left-[113px] top-[2px] absolute justify-start items-start gap-3 inline-flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-white text-lg font-bold font-['DM Sans'] leading-normal">Stock name</div>
            </div>
          </div>
          <div className="left-[477px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">1082.70</div>
          <div className="left-[882px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">34,823</div>
          <div className="left-[674px] top-0 absolute text-red-600 text-lg font-normal font-['DM Sans'] leading-7">-3.75%</div>
        </div>
        <div className="w-[1410px] h-[59px] left-0 top-[267px] absolute">
          <div className="w-[1410px] h-px left-0 top-[58px] absolute bg-zinc-800"></div>
          <div className="w-4 h-4 left-[20px] top-[6px] absolute"></div>
          <div className="w-2.5 left-[68px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">4</div>
          <div className="w-[104px] h-6 left-[113px] top-[2px] absolute justify-start items-start gap-3 inline-flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-white text-lg font-bold font-['DM Sans'] leading-normal">Stock name</div>
            </div>
          </div>
          <div className="left-[477px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">315.70</div>
          <div className="left-[882px] top-[2px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">5219</div>
          <div className="left-[674px] top-0 absolute text-green-400 text-lg font-normal font-['DM Sans'] leading-7">+1.45%</div>
        </div>
      </div>
      <div className="left-[73px] top-[156px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">Symbol</div>
      <div className="left-[671px] top-[156px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">Due Date</div>
      <div className="left-[882px] top-[156px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">Total Bounty</div>
      <div className="left-[1121px] top-[156px] absolute text-white text-lg font-bold font-['DM Sans'] leading-normal">Last 7 Days</div>
      <div className="w-[1410px] h-px left-0 top-[196px] absolute bg-zinc-800"></div>
      <div className="w-[1410px] h-[116px] left-0 top-0 absolute flex-col justify-center items-start gap-4 inline-flex">
        <div className="self-stretch justify-center items-center gap-10 inline-flex">
          <div className="grow shrink basis-0 h-14 justify-start items-start gap-2.5 flex">
            <div className="text-white text-5xl font-bold font-['DM Sans'] capitalize leading-[56px]">Market Update</div>
          </div>
          <div className="py-4 rounded-[90px]"></div>
        </div>
        <div className="w-[1410px] justify-center items-center gap-10 inline-flex">
          <div className="grow shrink basis-0 h-8 justify-start items-center gap-2 flex">
            <div className="px-6 py-2 bg-blue-500 rounded-[100px] justify-center items-center gap-2 flex">
              <div className="text-white text-sm font-bold font-['DM Sans'] leading-none">Gainer</div>
            </div>
            <div className="px-6 py-2 rounded-[100px] justify-center items-center gap-2 flex">
              <div className="text-gray-400 text-sm font-bold font-['DM Sans'] leading-none">Loser</div>
            </div>
            <div className="px-6 py-2 rounded-[100px] justify-center items-center gap-2 flex">
              <div className="text-gray-400 text-sm font-bold font-['DM Sans'] leading-none">Top Sectors</div>
            </div>
            <div className="px-6 py-2 rounded-[100px]"></div>
          </div>
          <div className="w-[282px] pl-5 pr-2.5 py-2.5 bg-zinc-800 rounded-[100px] border-2 border-zinc-800 flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="justify-center items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative"></div>
              <div className="text-gray-400 text-base font-normal font-['DM Sans'] capitalize leading-normal">Search </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-[46px] h-[46px] left-[1149px] top-[219px] absolute"></div>
    <div className="w-[46px] h-[46px] left-[1149px] top-[310px] absolute"></div>
    <div className="w-[46px] h-[46px] left-[1149px] top-[401px] absolute"></div>
    <div className="w-[46px] h-[46px] left-[1147px] top-[432px] absolute"></div>
  </div>
  <div className="w-[1920px] h-[872px] left-0 top-[71px] absolute">
    <div className="w-[1920px] h-[903px] left-0 top-0 absolute bg-zinc-900"></div>
    <div className="px-6 pt-6 pb-[125px] left-[110px] top-[268px] absolute bg-zinc-900 rounded-[40px] flex-col justify-start items-start gap-[42px] inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-white text-xl font-semibold font-['Inter']">Completed Tasks</div>
        <div className="text-white text-lg font-normal font-['Inter']">3/28/2024</div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="w-[499px] h-12 relative">
            <div className="w-[103px] h-12 left-0 top-0 absolute justify-start items-end gap-3 inline-flex">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
                <div className="text-right text-white text-base font-normal font-['Inter']">Desc</div>
              </div>
            </div>
            <div className="w-[143px] h-6 left-[356px] top-[8px] absolute justify-start items-center gap-10 inline-flex">
              <div className="text-right text-white text-xl font-medium font-['Inter']">Date</div>
              <div className="h-[23px] justify-end items-center flex">
                <div className="grow shrink basis-0 h-[23px] px-[8.16px] bg-green-500/opacity-20 rounded-[70.42px] justify-start items-center gap-[10.21px] flex">
                  <div className="w-[37.76px] text-center text-green-500 text-[10px] font-semibold font-['Inter'] leading-snug">+6.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[0px] border border-gray-200"></div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-[253px] inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
                <div className="text-right text-white text-base font-normal font-['Inter']">Desc</div>
              </div>
            </div>
            <div className="justify-start items-center gap-10 flex">
              <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
              <div className="h-[23px] justify-end items-center flex">
                <div className="grow shrink basis-0 h-[23px] px-[8.16px] bg-green-500/opacity-20 rounded-[70.42px] justify-start items-center gap-[10.21px] flex">
                  <div className="w-[37.76px] text-center text-green-500 text-[10px] font-semibold font-['Inter'] leading-snug">+6.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[0px] border border-gray-200"></div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-[253px] inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
                <div className="text-right text-white text-base font-normal font-['Inter']">Desc</div>
              </div>
            </div>
            <div className="justify-start items-center gap-10 flex">
              <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
              <div className="h-[23px] justify-end items-center flex">
                <div className="grow shrink basis-0 h-[23px] px-[8.16px] bg-green-500/opacity-20 rounded-[70.42px] justify-start items-center gap-[10.21px] flex">
                  <div className="w-[37.76px] text-center text-green-500 text-[10px] font-semibold font-['Inter'] leading-snug">+6.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[0px] border border-gray-200"></div>
        </div>
      </div>
    </div>
    <div className="w-[565px] h-[653px] left-[734px] top-[92px] absolute bg-zinc-900 rounded-[40px]">
      <div className="left-[24px] top-[24px] absolute flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-white text-xl font-semibold font-['Inter']">Your Goals     </div>
        <div className="text-white text-lg font-normal font-['Inter']">3/28/2024</div>
      </div>
      <div className="left-[24px] top-[120px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="w-[499px] h-12 relative">
            <div className="w-[103px] h-12 left-0 top-0 absolute justify-start items-end gap-3 inline-flex">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
                <div className="text-right text-white text-base font-normal font-['Inter']">Desc</div>
              </div>
            </div>
            <div className="w-[143px] h-6 left-[356px] top-[8px] absolute justify-start items-center gap-10 inline-flex">
              <div className="text-right text-white text-xl font-medium font-['Inter']">Date</div>
              <div className="h-[23px] justify-end items-center flex">
                <div className="grow shrink basis-0 h-[23px] px-[8.16px] bg-green-500/opacity-20 rounded-[70.42px] justify-start items-center gap-[10.21px] flex">
                  <div className="w-[37.76px] text-center text-green-500 text-[10px] font-semibold font-['Inter'] leading-snug">+6.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[0px] border border-gray-200"></div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-[253px] inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
                <div className="text-right text-white text-base font-normal font-['Inter']">Desc</div>
              </div>
            </div>
            <div className="justify-start items-center gap-10 flex">
              <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
              <div className="h-[23px] justify-end items-center flex">
                <div className="grow shrink basis-0 h-[23px] px-[8.16px] bg-green-500/opacity-20 rounded-[70.42px] justify-start items-center gap-[10.21px] flex">
                  <div className="w-[37.76px] text-center text-green-500 text-[10px] font-semibold font-['Inter'] leading-snug">+6.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[0px] border border-gray-200"></div>
        </div>
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="justify-start items-center gap-[253px] inline-flex">
            <div className="justify-start items-start gap-3 flex">
              <img className="w-12 h-12 rounded-full" src="https://via.placeholder.com/48x48" />
              <div className="flex-col justify-start items-start gap-1 inline-flex">
                <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
                <div className="text-right text-white text-base font-normal font-['Inter']">Desc</div>
              </div>
            </div>
            <div className="justify-start items-center gap-10 flex">
              <div className="text-right text-white text-xl font-medium font-['Inter']">Title</div>
              <div className="h-[23px] justify-end items-center flex">
                <div className="grow shrink basis-0 h-[23px] px-[8.16px] bg-green-500/opacity-20 rounded-[70.42px] justify-start items-center gap-[10.21px] flex">
                  <div className="w-[37.76px] text-center text-green-500 text-[10px] font-semibold font-['Inter'] leading-snug">+6.7%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[517px] h-[0px] border border-gray-200"></div>
        </div>
      </div>
      <div className="w-[198px] h-[67px] px-6 py-2 left-[173px] top-[418px] absolute bg-blue-500 rounded-[100px] justify-center items-center gap-2 inline-flex">
        <div className="text-white text-sm font-bold font-['DM Sans'] leading-none">Add New Goal</div>
      </div>
    </div>
    <div className="w-[463px] h-[119px] left-[129px] top-[155px] absolute text-blue-500 text-5xl font-medium font-['DM Sans'] leading-[78px]">Bet on yourself</div>
    <div className="w-[463px] h-[119px] left-[1358px] top-[63px] absolute text-blue-500 text-5xl font-medium font-['DM Sans'] leading-[78px]">Your Balance</div>
    <div className="w-[496px] h-[119px] left-[1358px] top-[131px] absolute text-white text-[80px] font-bold font-['DM Sans'] leading-[78px]">50.23 $NEAR</div>
    <div className="w-[654px] h-[119px] left-[128px] top-[63px] absolute text-white text-[80px] font-bold font-['DM Sans'] leading-[78px]">Hello, Joseph</div>
  </div>
  <div className="w-[1920px] h-[50px] left-0 top-0 absolute">
    <div className="w-[1920px] h-[68px] left-0 top-0 absolute bg-neutral-900"></div>
    <div className="w-[59px] h-7 left-[1815px] top-[11px] absolute">
      <div className="w-[59px] h-7 left-0 top-0 absolute rounded-[80px] border border-white"></div>
      <div className="left-[16px] top-[7px] absolute text-white text-xs font-medium font-['Rubik']">User</div>
    </div>
  </div>
  <div className="left-[64px] top-[-2000px] absolute flex-col justify-center items-center inline-flex">
    <div className="w-[25.48px] h-[25.48px] relative">
      <div className="w-[25.48px] h-[25.48px] left-0 top-0 absolute border-4 border-red-600"></div>
      <div className="w-[12.74px] h-[12.74px] left-0 top-0 absolute">
        <div className="w-[25.48px] h-[25.48px] left-0 top-0 absolute border-4 border-teal-400"></div>
      </div>
      <div className="w-[12.74px] h-[12.74px] left-[12.74px] top-[12.74px] absolute">
        <div className="w-[25.48px] h-[25.48px] left-[-12.74px] top-[-12.74px] absolute border-4 border-cyan-400"></div>
      </div>
    </div>
    <div className="flex-col justify-end items-start gap-[6.27px] flex">
      <div className="w-[34.60px] h-[7.54px]"></div>
      <div className="w-[65.98px] h-[11.21px] text-white text-base font-black font-['Roboto'] uppercase">MY LOGO</div>
    </div>
  </div>
  <img className="w-[758px] h-[758px] left-[1183px] top-[295px] absolute" src="https://via.placeholder.com/758x758" />
</div>
  )
}

export default Test
