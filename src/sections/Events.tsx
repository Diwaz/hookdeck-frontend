'use client'

import {  useRef } from 'react'
import Receive from '../../public/assets/receive.svg'
// import Process from '../../public/assets/procc.svg'
import Deliver from '../../public/assets/deliver.svg'
import LGcard from '@/components/lgCard'
import MDcard from '@/components/mdCard'
import DiffCard from '@/components/diffCard'

// type Section = 'receive' | 'process' | 'transform'

export default function StickySections() {
//   const [activeSection, setActiveSection] = useState<Section>('receive')
  const receiveRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const transformRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const observerCallback: IntersectionObserverCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target === receiveRef.current) {
//             setActiveSection('receive')
//           } else if (entry.target === processRef.current) {
//             setActiveSection('process')
//           } else if (entry.target === transformRef.current) {
//             setActiveSection('transform')
//           }
//         }
//       })
//     }

//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.6,
//     })

//     if (receiveRef.current) observer.observe(receiveRef.current)
//     if (processRef.current) observer.observe(processRef.current)
//     if (transformRef.current) observer.observe(transformRef.current)

//     return () => observer.disconnect()
//   }, [])

        //   <section ref={receiveRef} className="relative">
  return ( 
    <div>
        <div className=' flex justify-center h-full   font-lato'>
            <div className='w-[95%] xl:w-[60%]'>
                <section ref={receiveRef} className='relative  gradLine' >
                        <div className=' -translate-x-16 translate-y-12 sticky top-20 z-10 hidden xl:flex '> <Receive width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div>
                {/* <div className='sticky bg-slate-400 top-4 z-30'>hello</div> */}
                <div>
                    <div className="title flex  gap-3 items-center  mb-6   ">
                        <div className='font-bold text-xxxl'>Receive</div>
                        </div>

                    <div className='flex justify-center '>
                        <LGcard title={'Never miss an event.'} desp={'Reply on an event giveaway with unparalled uptime and ingestion spreads.'}/>
                    </div>
                    <div className="row2 xl:flex justify-center gap-1 mt-1">
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'newimg.webp'}/>
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'img1.webp'} reverse={true}/>
                    </div>
                </div>
                </section>
                <section ref={processRef} className='relative gradLine'>
                        <div className=' -translate-x-16 translate-y-12 sticky top-20 z-10 hidden xl:flex '> <Receive width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div>
                
                <div className=' '>
                    <div className="title  flex gap-3  items-center xl:w-[25%] mb-6 ">
                        {/* <div className=' ml-[-50px]'> <Process width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div> */}
                        <div className='font-bold text-xxxl'>Process</div>
                        </div>
<div className=' xl:flex gap-1'>

                    <div className='flex  gap-1 justify-center w-[100%]   '> 
                        {/* <LGcard title={'Never miss an event.'} desp={'Reply on an event giveaway with unparalled uptime and ingestion spreads.'}/> */}
                        <DiffCard title={'Filter and route messages.'} desp={'Use payload data to selectively filter events and control their final destination.'} img2={'img03.webp'} img={'img04.webp'} reverse={true}/>
                    </div>
                    <div className="row2 flex flex-col gap-1 justify-between w-[100%]">
                        <MDcard title={'Transform data.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'img2.webp'} reverse={true}/>
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'newimg.webp'} reverse={true}/>
                    </div>
</div>
                </div>

                </section>
                        <section ref={transformRef} className='relative gradLine'>

                <div className=' -translate-x-16 translate-y-12 sticky top-20 z-10 hidden xl:flex '> <Deliver width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div>
                <div className=''>
                    <div className="title flex gap-3 items-center w-[25%] mb-6">
                        {/* <div className=' ml-[-50px]'> <Deliver width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div> */}
                        <div  className='font-bold text-xxxl'>Deliver</div>
                        </div>

                    <div className='xl:flex justify-center gap-1'>
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'newimg.webp'}/>
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'newimg.webp'}/>
                    </div>
                    <div className="row2 xl:flex justify-center gap-1 mt-1">
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'img1.webp'} reverse={true}/>
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'img1.webp'} reverse={true}/>
                    </div>
                </div>
                </section>
            </div>
        </div>
    </div>
 
 )
}

