import React from 'react'

interface CardProp {
    title: string;
    desp: string;
}
const  LGcard: React.FC<CardProp>=({title , desp})=> {
  return (
    
   <div className='w-[100%] border-[1px] border-strip rounded-[20px] bg-[rgba(245,245,245)] p-[1px]'>

                        <div className=" bg-[url('/assets/img0.webp')] bg-no-repeat bg-white bg-contain bg- h-96 rounded-[19px] border-[1px] ">
                        <div className=' flex flex-col h-full justify-center px-5 '>
                            <div className='font-bold text-xl '>{title}</div>
                            <div className='text-sm text-secondaryfont'>{desp}</div>

                        </div>
                        </div>
                        </div>

    
  )
}

export default LGcard