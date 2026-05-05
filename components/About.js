'use client'

import Image from 'next/image'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" className='bg-slate-700'>
      
      {/* Background Wrapper */}
      <div className="relative overflow-hidden">

        {/* SVG Background – Spread, No Mirror */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/design.svg')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '1200px',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

          {/* Section Heading */}
          <div className="mb-14 text-center">
            <h2 className="text-5xl md:text-6xl font-extrabold glow-orange glow-animate">
              About Impreno Engineering
            </h2>
            <p className="text-lg text-slate-300 mt-5 max-w-3xl mx-auto">
              Precision machining solutions built on quality, consistency, and trust.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: Image Box */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <Image
                  src="/Engineering.png"
                  alt="Impreno Engineering CNC Machining"
                  width={600}
                  height={450}
                  className="object-cover"
                />
              </div>
            </div>

            {/* RIGHT: About Content */}
            <div className="text-slate-200 font-serif leading-relaxed space-y-6 text-lg">
              <p>
                We are a precision machining company specializing in CNC and VMC operations,
                delivering high-accuracy machined components to meet the exact requirements
                of our customers.
              </p>

              <p>
                We work as a reliable machining partner for leading MNCs, transforming raw
                materials into precise, finished components strictly as per customer drawings
                and quality standards.
              </p>

              <p>
                Since our inception, our core focus has been on quality, on-time delivery,
                and long-term customer trust. Equipped with modern CNC and VMC machines,
                skilled operators, and controlled manufacturing processes, we ensure
                consistent accuracy and reliability in every job we undertake.
              </p>

              <p>
                We manufacture components for industries such as automotive, engineering,
                gas pipelines, oil pipelines, machinery manufacturing, and industrial
                equipment. Every component undergoes strict inspection before dispatch.
              </p>
            </div>

          </div>
        </div>
      </div>
    </Section>
  )
}
