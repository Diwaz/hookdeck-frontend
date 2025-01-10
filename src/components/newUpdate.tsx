import React from 'react'
import LeftArrow from '@/assets/leftArrow.svg'
function NewUpdate() {
  return (
    <div className=' '>
        <div className='flex  justify-center text-xs md:text-sm '>
            <div className='flex border-[1px] gap-6 rounded-[32px] items-center px-1 py-1'>

            <p className='bg-newbutton px-2 py-1 rounded-[32px] text-xs text-white font-bold '>New</p>
            <p>Per-User DBs with Xata, Clerk & Hookdeck</p>
            <div className='flex items-center '><LeftArrow width={20} height={20}/></div>
            </div>
        </div>
    </div>
  )
}

export default NewUpdate