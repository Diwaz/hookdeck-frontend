import React from 'react'

function HeroText() {
  return (
    <div className='flex justify-center'>
        <div className=' flex-row justify-center items-center '>
            <div className='text-[52px] text-wrap font-lato font-bold '>
               <p>
                 A reliable <span className='text-primary'>
                    event gateway
                    </span>
                </p>
                <p className='flex justify-center mt-[-20px]'>
                    for async applications
                </p>
                 
                 </div>
            <div className='text-secondaryfont'>
                <p>

                Receive, process, and deliver messages across your event-driven architecture with 
               </p> 
                <p className='flex justify-center'>
                Hookdecks platform for engineering teams.
                </p>
                </div>  <div className='flex text-sm justify-center mt-10  justify-around '>
                    <div className='w-[40%] flex justify-around'>

                    <div className='rounded-md px-3 py-[7px] text-white bg-gradient font-bold shadow-custshadow'>Start for free</div>
                    <div className='rounded-md px-3 py-[5px] text-blacks border-[1px] font-bold '>Read docs</div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default HeroText