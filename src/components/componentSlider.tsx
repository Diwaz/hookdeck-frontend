"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { div } from "framer-motion/client"
import Receive from '../../public/assets/receive.svg'
import Deliver from '../../public/assets/deliver.svg'
import Route from '../../public/assets/routing.svg'
import API from '../../public/assets/procc.svg'
import Msg from '../../public/assets/msg.svg'

interface Image {
  src: string
  alt: string
  label: string
  svg: React.ReactNode
}

const images: Image[] = [
  {
    src: "/assets/img000.png",
    svg: <Receive width={24} height={24} />,
    alt: "Slide 1",
    label: "Inbound webhook infrastructure",
  },
  {
    src: "/assets/img001.png?height=400&width=200",

    svg: <Deliver  width={24} height={24} />,
    alt: "Slide 2",
    label: "Outbound webhook infrastructure ",
  },
  {
    src: "/assets/img002.png?height=400&width=800",

    svg: <Route  width={24} height={24}  />,
    alt: "Slide 3",
    label: "Third-party to third-party message routing",
  },
  {
    src: "/assets/img003.png",

    svg: <API  width={24} height={24} />,
    alt: "Slide 4",
    label: "Asynchronous API infrastructure",
  },
  {
    src: "/assets/img004.png",
    
    svg: <Msg  width={24} height={24} />,
    alt: "Slide 5",
    label: "Message broker for serverless application",
  },
]
const len = images.length -1
export default function ComponentSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)
console.log('kebnnnn',len)
  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])


  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <div className="border-y-[1px]  ">

    <div className="relative w-[90%] flex flex-row-reverse  mx-auto border-strip border-y-0 border-[1px]">
      <div className="relative overflow-hidden   rounded-lg aspect-[2/1] h-72 w-full  justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="absolute w-full h-full object-contain bg-secbackground"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.2 }}
            height={400}
            width={400}
            />
        </AnimatePresence>


      </div>

      <div className=" flex-col flex w-[30%]  ">
        {images.map((image, index) => (
            <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
                "text-sm px-4 py-2 transition-colors border-0  w-full ",
                currentIndex === index
                ?  'text-primary bg-lightbg  p-1 rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'
                : "text-muted-foreground hover:text-foreground ",
                index == 0 ? 'border-l-0' :''
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
            >
                <div className="flex justify-between">

                   <div>
                    {image.svg}
                   </div>
                <div>

            {image.label}
                </div>
                </div>
          </button>
        ))}
      </div>
    </div>
        </div>
  )
}

