'use client'

import { useEffect, useRef, useState } from 'react'
import Receive from '../../public/assets/receive.svg'
import Process from '../../public/assets/procc.svg'
import Deliver from '../../public/assets/deliver.svg'
import LGcard from '@/components/lgCard'
import MDcard from '@/components/mdCard'

type Section = 'receive' | 'process' | 'transform'

export default function StickySections() {
  const [activeSection, setActiveSection] = useState<Section>('receive')
  const receiveRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const transformRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === receiveRef.current) {
            setActiveSection('receive')
          } else if (entry.target === processRef.current) {
            setActiveSection('process')
          } else if (entry.target === transformRef.current) {
            setActiveSection('transform')
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    })

    if (receiveRef.current) observer.observe(receiveRef.current)
    if (processRef.current) observer.observe(processRef.current)
    if (transformRef.current) observer.observe(transformRef.current)

    return () => observer.disconnect()
  }, [])

        //   <section ref={receiveRef} className="relative">
  return ( 
    <div>
        <div className=' flex justify-center h-[800px] font-lato'>
            <div className=' w-[60%]'>
                <div>
                    <div className="title flex justify-between items-center w-[35%] ">
                        <div> <Receive width={32} height={32} className='text-primary bg-lightbg w-10 h-10 p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'/></div>
                        <div className='font-bold text-xxxl'>Receive</div>
                        </div>

                    <div className='flex justify-center '>
                        <LGcard title={'Never miss an event.'} desp={'Reply on an event giveaway with unparalled uptime and ingestion spreads.'}/>
                    </div>
                    <div className="row2 flex justify-center gap-2 mt-2">
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'newimg.webp'}/>
                        <MDcard title={'Consolidate events across sources.'} desp={'Combine disparate sources to centralize and simplify your pipeline.'} img={'img1.webp'} reverse={true}/>
                    </div>
                                  </div>
            </div>
        </div>
    </div>
 
 )
}

