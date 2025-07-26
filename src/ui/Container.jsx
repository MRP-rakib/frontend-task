import React from 'react'

function Container({children}) {
  return (
    <div className='Xl:max-w-[1427px] px-4 md:px-6 lg:px-10 mx-auto'>
  {children}
    </div>
  )
}

export default Container