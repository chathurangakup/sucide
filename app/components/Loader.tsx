import React from 'react'

const Loader = () => {
  return (
    <div className='absolute left-[3%] top-0%]  bg-[#00000007a] w-[100%] h-[90%] grid place-items-center ' >
      <div className="lds-hourglass"></div>
    </div>
  )
}

export default Loader