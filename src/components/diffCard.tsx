import Image from 'next/image';
import React from 'react'

interface CardProp {
    title: string;
    desp: string;
    img: string;
    img2: string;
    reverse?: boolean;
}
const  DiffCard: React.FC<CardProp>=({title , desp, img,reverse,img2})=> {
  return (
    
   <div className='w-[100%] border-[1px] border-strip rounded-[20px] bg-[rgba(245,245,245)] p-[1px]'>

                        <div className="bg-white h-full rounded-[19px] border-[1px] pt-4">
                        <div className={`flex ${reverse ? 'flex-col-reverse ':'flex-col pt-10 '} gap-2 h-full justify-around px-5 py-5`}>
                                <div className='relative  '><Image src={`/assets/${img}`} width={500} height={550} alt={'WEBHOOK API'}/>   </div>
                                <div className=' h-full flex items-center '><Image src={`/assets/${img2}`} width={500} height={650} alt={'WEBHOOK API'}/>   </div>
                            <div className=''>

                            <div className='font-bold text-lg'>{title}</div>
                            <div className='text-sm text-secondaryfont'>{desp}</div>
                            </div>

                        </div>
                        </div>
                        </div>

    
) }

export default DiffCard