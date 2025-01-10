import ImageSlider from '@/components/heroSlider'
import HeroText from '@/components/heroText'
import NewUpdate from '@/components/newUpdate'
import React from 'react'


 
function Hero() {
  return (

<section className='  flex justify-center'>

    <div className=' w-[100%] border-x-[1px] border-strip'>
        <div className='mt-28'><NewUpdate/></div>
        <div><HeroText/></div>
        <div className='mt-10'><ImageSlider/></div>
    </div>
</section>     
  )
}

 

export default Hero