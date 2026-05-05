'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Machines', href: '#productslider' },
      { name: 'Products', href: '#products' },
      { name: 'Clients', href: '#clients' },
      { name: 'Contact', href: '#contact' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif
              bg-gradient-to-r from-yellow-700 via-orange-500 to-orange-600
              bg-clip-text text-transparent mb-6 leading-tight">
              IMPRENO ENGINEERING
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              Your reliable machining partner for high-precision CNC and VMC
              components across diverse industries.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-extrabold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-extrabold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Email:</li>
              <li>
                <a
                  href="mailto:impreno.engg19@gmail.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  impreno.engg19@gmail.com
                </a>
              </li>
              <li>Phone:</li>
              <li>
                <a
                  href="tel:+919028616566"
                  className="hover:text-orange-400 transition-colors"
                >
                  +91 90286 16566
                </a>
                <br></br>
                <a
                  href="tel:+91 9158246197"
                  className="hover:text-orange-400 transition-colors"
                >
                  +91 91582 46197
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-10">
          <h4 className="text-white font-extrabold mb-4">
            Find Us on Map
          </h4>

          <a
            href="https://maps.app.goo.gl/ekMSXWhLTqcFdzHo9"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg
                       hover:shadow-orange-500/30 transition"
          >
            <Image
              src="/map.png"   // 👈 place map image in /public
              alt="Impreno Engineering Location"
              width={1200}
              height={300}
              className="w-full h-64 object-cover"
            />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} IMPRENO ENGINEERING. All rights reserved.
            </p>

            <a href="https://www.linkedin.com/in/devendra-ghadge-338194283"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-serif hover:text-orange-400 transition">
              Designed & Developed by : DEVENDRA GHADGE
            </a>

          </div>
        </div>

      </div>
    </footer>
  )
}
