import React from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";


function Btn({btnText,className='bg-primary',className2='bg-white text-primary', className3='text-primary'}) {
  return (
    <button 
    className={` ${className} text-white h-[40px] lg:h-[81px] inline-block items-center gap-4.5 relative rounded-[6px]  group-hover:bg-white cursor-pointer transition-all duration-300 `}>
   <div className={`absolute top-0 left-0 w-full h-full group-hover:bg-white ${className} transform origin-bottom-left -skew-x-12 rounded-[6px] transition-all duration-300`}></div>   
        <div className={`${className3} flex items-center gap-4.5 relative z-10 group-hover:text-primary transition-all duration-300`}>
             <p className='pl-9.5 text-base lg:text-2xl font-semibold text-nowrap'> {btnText}</p>
       <span className={`${className2} group-hover:bg-primary group-hover:text-white flex items-center justify-center w-[45px] h-[35px] lg:w-[76px] lg:h-[73px]
       transition-all duration-300 text-3xl lg:text-4xl -skew-x-12 rounded-[4px]`}>
<MdOutlineKeyboardDoubleArrowRight />

       </span>
        </div>
      
    </button>
  )
}

export default Btn