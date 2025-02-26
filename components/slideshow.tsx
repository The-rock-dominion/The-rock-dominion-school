"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/School building 4.jpg",
    alt: "The Rock Dominion School Campus",
    title: "Welcome to the Rock Dominion School",
    subtitle: "Nurturing minds, Inspiring futures",
  },
  {
    id: 2,
    image: "/Slide 2.jpg",
    alt: "Students in classroom",
    title: "Excellence in Education",
    subtitle: "Preparing students for a bright future",
  },
  {
    id: 3,
    image: "/Slide 3.jpg",
    alt: "School sports event",
    title: "Holistic Development",
    subtitle: "Balancing academics and extracurriculars",
  },
]

const Slideshow = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 5000) // Auto-scroll every 5 seconds

      return () => clearInterval(interval)
    }
  }, [emblaApi])

  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex h-[60vh] md:h-[80vh]">
        {slides.map((slide) => (
          <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative h-full">
            <Image src={slide.image || "/placeholder.svg"} alt={slide.alt} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg md:text-xl lg:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 ease-in-out"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-300 ease-in-out"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  )
}

export default Slideshow

