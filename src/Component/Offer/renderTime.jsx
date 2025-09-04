import React from 'react'

const renderTime = ({ hours,days, minutes, seconds }) => {
  return (
    <div className='flex gap-x-[24px]'>
        <div className='bg-white h-[62px] w-[62px] rounded-full  flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold'>{hours}</p>
            <p className='font-primary text-[11px]'>Hours</p>
        </div>

        <div className='bg-white h-[62px] w-[62px] rounded-full  flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold'>{days}</p>
            <p className='font-primary text-[11px]'>Days</p>
        </div>

        <div className='bg-white h-[62px] w-[62px] rounded-full  flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold'>{minutes}</p>
            <p className='font-primary text-[11px]'>Minutes</p>
        </div>

        <div className='bg-white h-[62px] w-[62px] rounded-full  flex flex-col justify-center items-center py-[14px] px-[15px]'>
            <p className='font-primary font-semibold'>{seconds}</p>
            <p className='font-primary text-[11px]'>Seconds</p>
        </div>
    </div>
  )
}

export default renderTime