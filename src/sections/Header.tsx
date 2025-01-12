import React from 'react'
import Logo from '@/assets/logo.svg'
import { NavigationMenuDemo } from '@/components/dropdown'
import HamburgerMenu from '@/components/hamburgerMenu'
// import Logo from '@/assets/logo.svg'

function Header() {
  return (
    <header className=' flex justify-center border-b-[1px] sticky top-0 bg-background z-20 '>
        <div className="mainContainer flex justify-between px-5 py-2 bg-blue text-black  items-center  w-[100%] 2xl:w-[60%]">
            <div className='text-sm'>
                <nav className='flex gap-6'>
                    <a href="http://" className='flex w-24 items-center font-bold '>
                           <Logo/>Hookdeck   
                    </a>
                    {/* <a href="http://">Platform</a> */}
                    <div className='hidden xl:flex'><NavigationMenuDemo/></div>
                    
                    {/* <a href="http://">Pricing</a> */}
                    {/* <a href="http://">Company</a> */}
                </nav>
            </div>
            <div className='text-sm flex '>

                       <nav className='hidden gap-4 items-center font-bold md:flex'>
                    <a href="http://">Book Demo</a>
                    <a href="http://" className='rounded-lg border-2 border-strip px-3 py-[5px]'>Sign In</a>
                    <a href="http://" className='rounded-lg px-3 py-[5px] text-white bg-primary '>Get Started</a>
                </nav>
                <div >

                <HamburgerMenu/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header