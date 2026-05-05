'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    title: 'LMW CNC Turning Center – LX 20T L5',
    description:
      'High-precision CNC turning for consistent, repeatable components.',
    image: '/machine1.png',
  },
  {
    title: 'GOODWAY CNC Turning Machine – GCL-2L',
    description:
      'Robust CNC turning for precision cylindrical components.',
    image: '/machine2.png',
  },
  {
    title: 'TOPPER Taiwan VMC – TMV-850A',
    description:
      'High-speed vertical machining for complex precision parts.',
    image: '/machine33.png',
  },
  {
    title: 'KIRA Taiwan VMC – V9',
    description:
      'Reliable vertical machining with consistent accuracy.',
    image: '/machine4.png',
  },
]

export default function ProductSlider() {
  const [current, setCurrent] = useState(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length)
  }

  return (
    <section id='productslider' className="bg-slate-900 py-20">
      <div className="container-custom relative">
        {/* Section Heading */}
    <div className="text-center mb-14">
      <h2 className="text-5xl md:text-6xl font-extrabold glow-orange glow-animate">
        OUR MACHINES
      </h2>
      <div className="w-20 h-1 bg-primary-600 mx-auto mt-4"></div>
    </div>
        {/* Slider Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Section */}
          <div className="bg-sky-500 text-white p-10 rounded-2xl shadow-xl ">
            <h2 className="text-3xl font-bold mb-4">
              {slides[current].title}
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {slides[current].description}
            </p>

            <div className="flex gap-4">
              <a href="#products" className="btn-primary">
                View Product
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mx-5">
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              width={600}
              height={400}
              className="rounded-xl shadow-2xl object-contain ring-white  ring-8"
            />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute -left-0.5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-blue-300"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-0.5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-blue-300"
        >
          ❯
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer ${
                index === current ? 'bg-primary-600' : 'bg-gray-400'
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
console.log('ProductSlider loaded')

