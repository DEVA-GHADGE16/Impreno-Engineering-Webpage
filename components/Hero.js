'use client'

import Image from 'next/image'
export default function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="pt-32 pb-10 md:pt-30 md:pb-30 bg-slate-900    ">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2
         gap-16 items-center">
          <div>
          <center>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif bg-gradient-to-r from-yellow-700 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
                IMPRENO ENGINEERING
                </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Your reliable machining partner for high-precision CNC and VMC components across diverse industries.
            </p>
            
            <div className="mt-8 flex justify-center gap-4">
              <a href="#contact" onClick={handleScrollToContact} className="btn-primary text-center">
                Connect with Us
              </a>
            </div>
            </center>
          </div>
          
          <div className="relative aspect-square rounded-2xl shadow-2xl overflow-hidden ">
  
            {/* Background Image */}
              <Image
                src="/pic1.png"
                 alt="Impreno Engineering"
                  fill
                 className="object-cover opacity-100"
                priority />

            
          </div>

        </div>
      </div>
    </section>
  )
}