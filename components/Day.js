import React from 'react'

function Day({worker,dayArrangment}){ //debug worker
    function getInitials(name) {
        return name?.split(' ').map(word => word.charAt(0)).join('');}
    // let timing = ["07:00","07:30","08:00","8:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","22:30- Night Shift -07:30",]
    // {timing.map((time)=>(<span className="text-[9px] whitespace-nowrap bg-green-300 py-1 pr-1">{time}</span>))}
  return (
    <>
      <td className="border px-4 pb-[1px] font-Sa">
        <span className=''>
            <span className="text-[10px]">{getInitials(worker)}</span>
            <span className="flex">{dayArrangment}</span>
          </span>
      </td>
    </>
  )
}

export default Day