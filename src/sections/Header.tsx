import React from 'react'
import Logo from '@/assets/logo.svg'
import { NavigationMenuDemo } from '@/components/dropdown'
// import Logo from '@/assets/logo.svg'

function Header() {
  return (
    <header className=' flex justify-center border-b-[1px] sticky top-0 bg-background z-20 '>
        <div className="mainContainer flex justify-between px-5 py-2 bg-blue text-black  items-center  w-[60%]">
            <div className='text-sm'>
                <nav className='flex gap-6'>
                    <a href="http://" className='flex w-24 items-center font-bold '>
                           <Logo/>Hookdeck   
                    </a>
                    {/* <a href="http://">Platform</a> */}
                    <div ><NavigationMenuDemo/></div>
                    
                    {/* <a href="http://">Pricing</a> */}
                    {/* <a href="http://">Company</a> */}
                </nav>
            </div>
            <div className='text-sm'>
                       <nav className='flex gap-4 items-center font-bold'>
                    <a href="http://">Book Demo</a>
                    <a href="http://" className='rounded-lg border-2 border-strip px-3 py-[5px]'>Sign In</a>
                    <a href="http://" className='rounded-lg px-3 py-[5px] text-white bg-primary '>Get Started</a>
                </nav>

            </div>
        </div>
    </header>
  )
}

export default Header