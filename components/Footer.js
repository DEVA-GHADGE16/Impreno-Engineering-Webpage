{/* Top Section */}
<div className="mb-10 space-y-10">

  {/* Company Info (full width always) */}
  <div>
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

  {/* Company + Contact (SIDE BY SIDE ON MOBILE) */}
  <div className="grid grid-cols-2 gap-8">

    {/* Company Links */}
    <div>
      <h4 className="text-white font-extrabold mb-4">Company</h4>
      <ul className="space-y-2 text-sm">
        {footerLinks.company.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-orange-400 transition-colors"
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
      <ul className="space-y-2 text-sm text-gray-400">
        <li>Email:</li>
        <li>
          <a href="mailto:impreno.engg19@gmail.com" className="hover:text-orange-400">
            impreno.engg19@gmail.com
          </a>
        </li>
        <li>Phone:</li>
        <li>
          <a href="tel:+919028616566" className="hover:text-orange-400">
            +91 90286 16566
          </a>
        </li>
        <li>
          <a href="tel:+919158246197" className="hover:text-orange-400">
            +91 91582 46197
          </a>
        </li>
      </ul>
    </div>

  </div>

</div>