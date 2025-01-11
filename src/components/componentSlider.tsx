"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { div } from "framer-motion/client"
import Receive from '../../public/assets/receive.svg'
import Deliver from '../../public/assets/deliver.svg'
import Route from '../../public/assets/routing.svg'
import API from '../../public/assets/procc.svg'
import Msg from '../../public/assets/msg.svg'
import MDcard from "./mdCard"

interface Image {
  src: string
  alt: string
  label: string
  svg: React.ReactNode
}
type svgSize = number
const svgSize  = 20
const images: Image[] = [
  {
    src: "img000.png",
    svg: <Receive width={svgSize} height={svgSize} />,
    alt: "Slide 1",
    label: "Inbound webhook infrastructure",
  },
  {
    src: "img001.png?height=400&width=200",

    svg: <Deliver  width={svgSize} height={svgSize} />,
    alt: "Slide 2",
    label: "Outbound webhook infrastructure ",
  },
  {
    src: "img002.png?height=400&width=800",

    svg: <Route  width={svgSize} height={svgSize}  />,
    alt: "Slide 3",
    label: "Third-party to third-party ",
  },
  {
    src: "img003.png",

    svg: <API  width={svgSize} height={svgSize} />,
    alt: "Slide 4",
    label: "Asynchronous API infrastructure",
  },
  {
    src: "img004.png",
    
    svg: <Msg  width={svgSize} height={svgSize} />,
    alt: "Slide 5",
    label: "Message broker for serverles",
  },
]
// const len = images.length -1
export default function ComponentSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

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
    <div className="border-[1px] p-2 rounded-[20px] h-full    ">

    <div className="relative w-[100%]  xl:flex gap-2 xl:flex-row-reverse  justify-between mx-auto ">
      <div className=" w-full">
        <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0,  }}
            transition={{ duration: 0.3 }}

                    
                    >

                <MDcard  title={images[currentIndex].label} img={images[currentIndex].src} desp={'Reliably consume events at scale. Hookdeck covers everything from analytics and telemetry data capture, to triggering long-running asynchronous processes.'} reverse={true} />
            </motion.div>
                 </AnimatePresence>


      </div>

      <div className=" flex-col flex xl:w-[30%] w-[100%]   ">
        {images.map((image, index) => (
            <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
                "text-sm px-4 p-1 h-14 flex  flex-col justify-center items-center transition-colors border-0  w-full ",
                currentIndex === index
                ?  'text-primary bg-lightbg   rounded-lg border-lightstrip border-[0.5px] shadow-custshadow2'
                : "text-muted-foreground hover:text-foreground ",
                index == 0 ? 'border-l-0' :''
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
            >
                <div className="flex justify-start gap-2 w-full  ">

                   <div className="relative left-0">
                    {image.svg}
                   </div>
                <div className="flex justify-start w-full ">

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

