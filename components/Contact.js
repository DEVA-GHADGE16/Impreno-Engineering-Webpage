'use client'

import Section from './Section'

export default function Contact() {
  return (
    <Section id="contact" className='bg-slate-700'>
      <div className="relative overflow-hidden">

        {/* 🔵 Top Left Decorative SVG */}
        <div className="absolute top-0 left-0 opacity-25 -translate-x-1/3 -translate-y-1/3">
          <svg
            width="220"
            height="220"
            viewBox="0 0 135 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.2575 39.5855C42.2575 39.5855 43.0767 63.6697 25.7098 73.1177C8.34296 82.5657 6.43152 115.443 50.1217 107.688C89.279 100.752 53.0162 51.4911 62.4096 44.173C68.2531 39.6401 67.9801 52.3103 81.6332 63.8336C100.802 80.0535 146.131 37.2918 132.478 11.6784C118.825 -13.935 89.6613 7.20014 85.62 30.8475C81.5787 54.4948 86.1115 13.2075 66.2871 6.38095C46.408 -0.500252 42.4213 25.55 42.2575 39.5855Z" fill="#167EC5"/>
            <path d="M26.2013 101.134C23.5253 101.134 20.6855 100.916 17.7364 100.424C8.17913 98.8403 0.424145 95.2359 0.314919 95.1813C0.0418556 95.072 -0.0673699 94.6898 0.0418556 94.4167C0.151081 94.1436 0.53335 94.0344 0.806414 94.1436C0.861027 94.1982 8.50682 97.7481 17.9548 99.2772C26.5836 100.697 38.5438 100.697 46.4626 92.5052C53.0708 85.7333 53.6716 71.5339 54.1631 59.0276C54.6 47.8866 55.0369 38.2748 59.679 36.1449C62.3004 34.9434 66.014 36.1995 70.9838 40.077C71.2568 40.2955 71.2569 40.6231 71.093 40.8962C70.8746 41.1693 70.5469 41.1693 70.2739 41.0054C65.6864 37.401 62.355 36.1449 60.1705 37.1825C56.1292 39.0394 55.7469 48.7604 55.31 59.0822C54.7638 71.807 54.163 86.1702 47.2818 93.2698C42.2575 98.458 35.0486 101.134 26.2013 101.134Z" fill="#3D3974"/>
          </svg>
        </div>

        {/* 🔵 Bottom Right Decorative SVG */}
        <div className="absolute bottom-0 right-0 opacity-25 -translate-x-1/3 translate-y-1/3">
          <svg
            width="220"
            height="220"
            viewBox="0 0 135 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.2575 39.5855C42.2575 39.5855 43.0767 63.6697 25.7098 73.1177C8.34296 82.5657 6.43152 115.443 50.1217 107.688C89.279 100.752 53.0162 51.4911 62.4096 44.173C68.2531 39.6401 67.9801 52.3103 81.6332 63.8336C100.802 80.0535 146.131 37.2918 132.478 11.6784C118.825 -13.935 89.6613 7.20014 85.62 30.8475C81.5787 54.4948 86.1115 13.2075 66.2871 6.38095C46.408 -0.500252 42.4213 25.55 42.2575 39.5855Z" fill="#167EC5"/>
            <path d="M98.6725 90.4299C98.6725 90.4299 121.064 90.1569 126.47 75.7937C131.877 61.4306 135.099 107.633 98.6725 90.4299Z" fill="#3D3974"/>
          </svg>
        </div>

        {/* 🔹 CONTENT */}
        <div className="relative z-10 max-w-5xl mx-auto">

          {/* Heading */}
           <div className="text-center mt-10 mb-16 ">
            <h2 className="text-5xl md:text-6xl font-extrabold glow-orange glow-animate">
              Contact Us
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-3"></div>
            <h1>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mt-4">
              Get in touch with us for precision machining requirements.
              We are ready to support your projects with quality and reliability.
            </p>
            </h1>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-black rounded-xl shadow-lg p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📧
              </div>
              <h3 className="font-bold text-slate-300 mb-2 text-lg">Email Us</h3>
              <a href="mailto:impreno.engg19@gmail.com" className="text-primary-600 font-medium">
                impreno.engg19@gmail.com
              </a>
            </div>

            <div className="bg-black rounded-xl shadow-lg p-8 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📞
              </div>
              <h3 className="font-bold text-slate-300 mb-2 text-lg">Call Us</h3>
              <a href="tel:+919028616566" className="text-primary-600 font-medium">
                +91 90286 16566
              </a>
              <br></br>
              <a href="tel:+919158246197" className="text-primary-600 font-medium">
                +91 91582 46197
              </a>
            </div>

            <div className="bg-black rounded-xl shadow-lg p-8 text-center">
              <a href='https://maps.app.goo.gl/ekMSXWhLTqcFdzHo9'>
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                📍
              </div>
              <h3 className="font-bold text-slate-300 mb-2 text-lg">Visit Us</h3>
              <p className="text-slate-300">
                Gat No. 264, Jyotiba Nagar,<br />
                Talawade MIDC,<br />
                Pune – 412144
              </p>
              </a>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-10 mb-10">
            <p className="text-slate-300 text-lg font-medium">
              For quotations, drawings, or technical discussions,
              please contact us directly.
            </p>
          </div>

        </div>
      </div>
    </Section>
  )
}
