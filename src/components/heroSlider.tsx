"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { div } from "framer-motion/client"

interface Image {
  src: string
  alt: string
  label: string
}

const images: Image[] = [
  {
    src: "/assets/img03.webp",
    alt: "Slide 1",
    label: "Event gateway",
  },
  {
    src: "/assets/img2.webp?height=400&width=200",
    alt: "Slide 2",
    label: "Receive webhooks",
  },
  {
    src: "/assets/img1.webp?height=400&width=800",
    alt: "Slide 3",
    label: "Send webhooks",
  },
  {
    src: "/assets/img04.webp",
    alt: "Slide 4",
    label: "Connect services",
  },
  {
    src: "/assets/img03.webp",
    alt: "Slide 5",
    label: "Asynchronous API",
  },
  {
    src: "/assets/img1.webp",
    alt: "Slide 6",
    label: "Serverless queue",
  },
]
const len = images.length -1
export default function ImageSlider() {
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
    <div className="border-y-[1px] ">

    <div className="relative w-[90%]  mx-auto border-strip border-[1px]">
      <div className="relative overflow-hidden rounded-lg aspect-[2/1] h-72 w-full flex justify-center">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            height={400}
            width={400}
            />
        </AnimatePresence>


      </div>

      <div className="flex justify-between  mt-4  ">
        {images.map((image, index) => (
            <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
                "text-sm px-4 py-2 transition-colors border-0  w-full border-t-[1px] border-l-[2px] border-strip",
                currentIndex === index
                ? "bg-background text-primary font-bold border-b-2 border-b-primary "
                : "text-muted-foreground hover:text-foreground ",
                currentIndex == len ? "border-l-0":"border-l-2"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
            >
            {image.label}
          </button>
        ))}
      </div>
    </div>
        </div>
  )
}

