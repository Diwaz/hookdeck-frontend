import React from 'react'
import Logo from '@/assets/logo.svg'
import { NavigationMenuDemo } from '@/components/dropdown'
// import Logo from '@/assets/logo.svg'

function Header() {
  return (
    <header>
        <div className="mainContainer flex justify-around px-5 py-2 bg-blue text-black  border-2 border-strip items-center">
            <div className='text-sm'>
                <nav className='flex gap-6'>
                    <a href="http://" className='flex w-24 items-center text-bold '>
                           <Logo/>   Hookform       
                    </a>
                    {/* <a href="http://">Platform</a> */}
                    <div ><NavigationMenuDemo/></div>
                    
                    {/* <a href="http://">Pricing</a> */}
                    {/* <a href="http://">Company</a> */}
                </nav>
            </div>
            <div className='text-sm'>
                       <nav className='flex gap-4 items-center '>
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