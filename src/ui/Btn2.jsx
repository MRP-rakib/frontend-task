import React from 'react'

function Btn2({btnText, className='bg-transparent text-white'}) {
  return (
    <button className={`${className} py-3 px-4 text-nowrap cursor-pointer lg:py-4.5 lg:px-[45px] text-[14px] lg:text-[20px] rounded-4xl `}>
     {btnText}
    </button>
  )
}

export default Btn2