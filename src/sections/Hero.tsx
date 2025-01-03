import HeroText from '@/components/heroText'
import NewUpdate from '@/components/newUpdate'
import React from 'react'


 
function Hero() {
  return (

<section className='  flex justify-center h-[400px]'>

    <div className=' w-[60%] border-x-[1px] border-strip'>
        <div className='mt-10'><NewUpdate/></div>
        <div><HeroText/></div>
        <div></div>
    </div>
</section>     
  )
}

 

export default Hero