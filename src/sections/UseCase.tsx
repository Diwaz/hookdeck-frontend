
import ComponentSlider from '@/components/componentSlider'
import React from 'react'


 
function UseCase() {
  return (

<section className='  flex justify-center'>

    <div className=' w-[60%]  mt-10'>
        <div className=' flex flex-col items-center  justify-center'>
            <div className='font-bold text-[25px]'>One event gateway, many use cases</div>
            <div className='text-secondaryfont'>Hookdeck was built to be flexible and unopinionated to fit any scenario.</div>
        </div>
        <div className='mt-10 '><ComponentSlider/></div>
{/* 
        <div className=' flex flex-col items-center  justify-center'>
            <div className='font-bold text-[25px]'>One event gateway, many use cases</div>
            <div className='text-secondaryfont'>Hookdeck was built to be flexible and unopinionated to fit any scenario.</div>
        </div>
        <div className=' flex flex-col items-center  justify-center'>
            <div className='font-bold text-[25px]'>One event gateway, many use cases</div>
            <div className='text-secondaryfont'>Hookdeck was built to be flexible and unopinionated to fit any scenario.</div>
        </div>
    */}
    </div> 
</section>     
  )
}

 

export default UseCase