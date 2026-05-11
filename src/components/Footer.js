'use client'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-[#131a12] border-t border-[#2e3d2b] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🌿</span>
              <span className="text-[#e8f0e0] font-semibold text-lg">FloraVision.</span>
            </div>
            <p className="text-[#6b7c65] text-sm leading-relaxed max-w-xs">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to refresh and elevate your living environment."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#e8f0e0] font-medium text-sm mb-4">Quick Link's</h4>
            <ul className="space-y-2.5">
              {['Home', 'Types Of plant\'s', 'Contact', 'Privacy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-[#6b7c65] text-sm hover:text-[#8bc34a] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#e8f0e0] font-medium text-sm mb-4">For Every Update.</h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 bg-[#1e2a1c] border border-[#2e3d2b] rounded-xl px-4 py-2.5 text-[#e8f0e0] text-sm placeholder:text-[#3d5239] focus:outline-none focus:border-[#4a7c59] transition-colors"
              />
              <button className="bg-[#4a7c59] hover:bg-[#3d6649] text-[#e8f0e0] text-sm font-medium px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2e3d2b] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {['FB', 'TW', 'LI'].map(social => (
              <a key={social} href="#" className="text-[#6b7c65] hover:text-[#8bc34a] text-xs font-medium transition-colors">
                {social}
              </a>
            ))}
          </div>
          <p className="text-[#3d5239] text-xs">FloraVision © All right reserved</p>
        </div>
      </div>
    </footer>
  )
}
