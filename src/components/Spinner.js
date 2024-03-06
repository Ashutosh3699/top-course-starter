import React from 'react'

const Spinner = () => {
  return (
    <div className='w-[100%] relative top-[30%] flex flex-col justify-center items-center gap-4'>

        <div className='spinner'></div>
        <h3 className=' font-bold text-1xl text-white'>Loading...</h3>
    </div>
  )
}

export default Spinner