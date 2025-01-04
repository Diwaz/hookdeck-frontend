import React from 'react'

interface CardProp {
    title: string;
    desp: string;
}
const  LGcard: React.FC<CardProp>=({title , desp})=> {
  return (
    
   <div className='w-[90%] border-[1px] border-strip rounded-[20px] bg-[rgba(245,245,245)] p-[1px]'>

                        <div className=" bg-[url('/assets/img0.webp')] bg-contain bg-center h-64 rounded-[19px] border-[1px] ">
                        <div className=' flex flex-col h-full justify-center px-5 '>
                            <div className='font-bold text-lg '>{title}</div>
                            <div className='text-xs text-secondaryfont'>{desp}</div>

                        </div>
                        </div>
                        </div>

    
  )
}

export default LGcard