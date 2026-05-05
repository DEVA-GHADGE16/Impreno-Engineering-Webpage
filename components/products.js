'use client'

import Section from './Section'
import Image from 'next/image'

export default function Products() {
  const products = [
    { image: '/part1.png' },
    { image: '/part2.png' },
    { image: '/part3.png' },
    { image: '/part4.png' },
    { image: '/part5.png' },
    { image: '/part6.png' },
    { image: '/part7.png' },
    { image: '/part8.png' },
    { image: '/part9.png' },
  ]

  return (
    <Section id="products" className="bg-slate-700 py-14">
      {/* FULL WIDTH CONTENT WRAPPER */}
      <div className="w-full px-6 lg:px-24">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold glow-orange glow-animate">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mt-4"></div>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4">
            Precision-engineered products manufactured with
            industry-grade quality and reliability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-slate-950 rounded-2xl shadow-lg
                         transition-all duration-300
                         hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image with Glow */}
              <div className="relative w-full h-64 overflow-hidden group rounded-2xl">

                <Image
                  src={product.image}
                  alt="Machine part"
                  fill
                  className="object-contain transition-transform duration-700
                             group-hover:scale-110"
                />

                {/* Outer Glow */}
                <div
                  className="absolute inset-0 rounded-2xl
                             opacity-0 group-hover:opacity-100
                             transition duration-700
                             ring-2 ring-white-400/70
                             shadow-[0_0_45px_rgba(249,115,22,0.8)]"
                />

                {/* Inner Soft Glow */}
                <div
                  className="absolute inset-0 rounded-2xl
                             opacity-0 group-hover:opacity-100
                             transition duration-700
                             bg-white-400/10"
                />
              </div>

            </div>
          ))}
        </div>
        <div className='text-slate-200 mt-10 text-lg'><center>
          <a>
            We manufacture the product as per requirement.
          </a>
          </center>
        </div>
      </div>
    </Section>
  )
}
