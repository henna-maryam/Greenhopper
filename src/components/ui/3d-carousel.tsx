"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"
import { X } from "lucide-react"
import banner1 from "../../assets/banner-1.jpg"
import banner2 from "../../assets/about-2.jpg"
import banner3 from "../../assets/blog-1.png"
import banner4 from "../../assets/blog-3.png"
import banner5 from "../../assets/pkg-1.png"
import banner6 from "../../assets/sl.png"
import React from "react"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const keywords = [
  "night",
  "city",
  "sky",
  "sunset",
  "sunrise",
  "winter",
  "skyscraper",
  "building",
  "cityscape",
  "architecture",
  "street",
  "lights",
  "downtown",
  "bridge",
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (image: ImageDetails, index: number) => void
    controls: any
    cards: ImageDetails[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isScreenSizeSm ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = cylinderWidth / faceCount
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    return (
      <div
        className="flex h-full items-center justify-center bg-transparent"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.02) // Reduced from 0.05 to 0.02
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.02, // Reduced from 0.05 to 0.02
              transition: {
                type: "spring",
                stiffness: 70, // Reduced from 100 to 70
                damping: 40, // Increased from 30 to 40 for more smoothness
                mass: 0.2, // Increased from 0.1 to 0.2 for more weight/resistance
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <motion.div
              key={`key-${imgUrl.src}-${i}`}
              className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-transparent p-2"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  i * (360 / faceCount)
                }deg) translateZ(${radius}px)`,
              }}
              onClick={() => handleClick(imgUrl, i)}
            >
              <motion.img
                src={imgUrl.src}
                alt={imgUrl.title}
                layoutId={`img-${imgUrl.src}`}
                className="pointer-events-none w-full rounded-xl object-cover aspect-[16/9]"
                initial={{ filter: "blur(4px)" }}
                layout="position"
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

type ImageDetails = {
  src: string;
  description: string;
  title: string;
}

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<ImageDetails | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()
  const cards = useMemo<ImageDetails[]>(
    () => [
      {
        src: banner1,
        title: "Scenic Mountain Views",
        description: "Experience breathtaking mountain landscapes and serene natural beauty. Perfect for adventure seekers and nature lovers looking for an unforgettable journey."
      },
      {
        src: banner2,
        title: "Cultural Heritage",
        description: "Immerse yourself in rich cultural traditions and historic landmarks. Discover ancient temples and local customs that tell stories of centuries past."
      },
      {
        src: banner3,
        title: "Tropical Paradise",
        description: "Relax on pristine beaches with crystal-clear waters. Our tropical destinations offer the perfect blend of luxury and natural beauty."
      },
      {
        src: banner4,
        title: "Wildlife Safari",
        description: "Encounter exotic wildlife in their natural habitat. Our guided safaris bring you close to nature's most magnificent creatures."
      },
      {
        src: banner5,
        title: "Adventure Trails",
        description: "Trek through lush forests and challenging terrains. Perfect for those seeking adventure and wanting to test their limits."
      },
      {
        src: banner6,
        title: "Island Getaway",
        description: "Discover hidden island paradises and coastal wonders. Experience the perfect blend of relaxation and adventure."
      }
    ],
    []
  )

  const handleClick = (image: ImageDetails) => {
    setActiveImg(image)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={handleClose}
            />
            <div className="relative h-full flex items-center justify-center p-5 md:p-36">
              <div className="relative max-w-xl w-full bg-gh-dark/80 rounded-3xl overflow-hidden">
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={handleClose}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
                <motion.img
                  layoutId={`img-${activeImg.src}`}
                  src={activeImg.src}
                  className="w-full aspect-[16/9] object-cover"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">{activeImg.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{activeImg.description}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[600px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
//     //       </motion.div>
//     //     )}
//     //   </AnimatePresence>
//     //   <div className="relative h-[600px] w-full overflow-hidden">
//     //     <Carousel
//     //       handleClick={handleClick}
//     //       controls={controls}
//     //       cards={cards}
//     //       isCarouselActive={isCarouselActive}
//     //     />
//     //   </div>
//     // </motion.div>
//   )
}

export { ThreeDPhotoCarousel };
