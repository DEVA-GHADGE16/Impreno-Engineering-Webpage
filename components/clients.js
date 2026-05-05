'use client'

import Section from './Section'
import Image from 'next/image'

export default function Clients() {
  const clients = [
    {
      name: 'TechCorp International',
      role: 'Enterprise Software',
      image: '/client1.png',
    },
    {
      name: 'RetailHub Solutions',
      role: 'E-commerce Platform',
      image: '/client2.png',
    },
  ]

  return (
    <Section id="clients" className='py-10 bg-slate-900'>


      {/* Header */}
      <div className="text-center mt-4 mb-8">
        <h2 className="text-5xl md:text-6xl font-extrabold glow-orange glow-animate">
          Our Current Clients
        </h2>
        <div className="w-20 h-1 bg-primary-600 mx-auto mt-4"></div>
        <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4">
          Companies that trust IMPRENO ENGINEERING to power their growth
        </p>
      </div>

      {/* Clients */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="mb-10 flex items-center gap-5 bg-white rounded-lg p-4 border border-gray-100"
          >
            <Image
              src={client.image}
              alt={client.name}
              width={400}
              height={400}
              className="object-contain"
            />

          </div>
        ))}
      </div>
      
    </Section>
  )
}
