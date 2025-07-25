import React from 'react'

function PrimaryBtn({btnText}) {
  return (
    <button className={`bg-primary text-white py-3 px-5 text-[14px] lg:text-[16px] text-nowrap  xl:py-5 xl:px-8 rounded-[8px] xl:text-lg font-semibold capitalize`}>
           {btnText}
    </button>
  )
}

export default PrimaryBtn