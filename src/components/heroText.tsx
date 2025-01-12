import React from 'react'

function HeroText() {
  return (
    <div className='flex justify-center'>
        <div className=' flex-row justify-center items-center pt-5 '>
            <div className='text-[30px] text-wrap font-lato font-bold xl:text-[52px]  flex justify-center '>
              <div className=' w-[80%]  md:w-[50%] 2xl:w-[60%]'>

               <p className='text-center leading-none'>
                 A reliable <span className='text-primary'>
                    event gateway {" "}
                    </span>
                
                    for async applications
                </p>
                 
                </div>
                 </div>
            <div className='text-secondaryfont text-sm xl:text-xl px-5 md:px-0 pt-5  md:w-[100%] md:flex md:justify-center'>
                <p className='text-center  md:w-[70%]'>

                Receive, process, and deliver messages across your event-driven architecture with 
               
                Hookdecks platform for engineering teams.
                </p>
                </div>  <div className='flex text-sm  mt-6  justify-around '>
                    <div className='w-[60%] flex justify-around md:w-[30%] xl:w-[20%]'>

                    <div className='rounded-md px-3 py-[7px] text-white bg-gradient font-bold shadow-custshadow'>Start for free</div>
                    <div className='rounded-md px-3 py-[5px] text-blacks border-[1px] font-bold '>Read docs</div>
                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default HeroText