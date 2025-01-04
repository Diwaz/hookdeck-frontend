import Image from 'next/image';
import React from 'react'

interface CardProp {
    title: string;
    desp: string;
    img: string;
    reverse?: boolean;
}
const  MDcard: React.FC<CardProp>=({title , desp, img,reverse})=> {
  return (
    
   <div className='w-[100%] h-96 border-[1px] border-strip rounded-[20px] bg-[rgba(245,245,245)] p-[1px]'>

                        <div className="bg-white h-full rounded-[19px] border-[1px]">
                        <div className={`flex ${reverse ? 'flex-col-reverse ':'flex-col pt-10'}  h-full justify-between px-5 py-5`}>
                                <div>
                                 <Image src={`/assets/${img}`} width={500} height={500} alt={'WEBHOOK API'}/>   
                                </div>
                            <div>

                            <div className='font-bold text-lg'>{title}</div>
                            <div className='text-sm text-secondaryfont'>{desp}</div>
                            </div>

                        </div>
                        </div>
                        </div>

    
) }

export default MDcard