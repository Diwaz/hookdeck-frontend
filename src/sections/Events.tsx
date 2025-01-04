'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDownToLine, ArrowRightLeft, ArrowUpDown, ReceiptIcon } from 'lucide-react'
import Receive from '../../public/assets/receive.svg'
import Process from '../../public/assets/procc.svg'
import Deliver from '../../public/assets/deliver.svg'
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
                    <div className="row1  flex justify-center  ">
                        <div className='w-[90%] border-[1px] border-strip rounded-[20px] bg-[rgba(245,245,245)] p-[1px]'>

                        <div className=" bg-[url('/assets/img0.webp')] bg-contain bg-center h-64 rounded-[19px] border-[1px] ">tf</div>
                        </div>
                    </div>
                    <div className="row2"></div>
                </div>
            </div>
        </div>
    </div>
 
 )
}

