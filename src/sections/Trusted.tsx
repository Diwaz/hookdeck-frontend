import React from 'react'
import Logo1 from '../../public/assets/crunch.svg'
import Logo2 from '../../public/assets/canal.svg'
import Logo3 from '../../public/assets/gorgas.svg'
import Logo4 from '../../public/assets/lemon.svg'
import Logo5 from '../../public/assets/contra.svg'
import Logo6 from '../../public/assets/gemini.svg'
import Logo7 from '../../public/assets/okta.svg'
import Logo8 from '../../public/assets/chartm.svg'
function Trusted() {
  return (
    <div className=' flex justify-center '>
        <div className='  w-[100%] xl:w-[100%] border-strip border-x-[1px] border-b-[1px]  py-10'>
            <div className='flex justify-center py-10'> <p className='text-sm text-secondaryfont'>

            Trusted by great teams around the world
            </p>
            </div>
            <div className='flex flex-col   justify-center gap-5 xl:gap-20 '>
                <div className=' flex flex-col h-20 justify-between items-center '>
                    <div ><Logo1/></div>
                    <div><Logo5/></div>
                </div>
                <div  className=' flex flex-col h-20 justify-between  '>
                    <div  className='flex justify-center'><Logo2/></div>
                    <div  className='flex justify-center'><Logo6/></div>
                </div>
                <div  className='flex flex-col h-20 justify-between items-center'>
                    <div><Logo3/></div>
                    <div className='flex justify-center'><Logo7/></div>
                </div>
                <div  className=' flex flex-col h-20 justify-between items-center '>
                    <div><Logo4/></div>
                    <div className='flex justify-center'><Logo8/></div>
                </div>
                {/* <div>logo 26</div> */}
                {/* <div>logo 37</div> */}
                {/* <div>logo 48</div> */}
            </div>
           </div>
 
    </div>
  ) }

export default Trusted