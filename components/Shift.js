import React from 'react'

function Shift({t,c,b,f}) {
  return (
    <span className={`relative text-[9px] font-bold whitespace-nowrap ${c} py-1 pr-1`}>
        <span className={`${f}`}>{t}</span>
        <span className="absolute text-black font-normal bg-blue-200 -mt-[14px] -ml-[77px]">{b}</span>
    </span> 
  )
}

export default Shift