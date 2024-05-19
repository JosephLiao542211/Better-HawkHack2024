import TableList from "./TableList";

function Marketplace() {
  return (
    <div className="z-6 h-full w-full bg-[#141416]">
    <div className="h1 ml-10"> Global Goals </div>

    <div className="z-6 h-full w-full bg-[#141416] flex items-center justify-center p-4">
      
      <div className="w-[100%] bg-[#1f1f1f] p-4 m-4 overflow-hidden rounded-3xl">
      <TableList></TableList>
      </div>
      
    </div>
    </div>
  )
}

export default Marketplace
