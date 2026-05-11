'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [plantsOpen, setPlantsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2318]/90 backdrop-blur-md border-b border-[#2e3d2b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xl">🌿</span>
            <span className="text-[#e8f0e0] font-semibold text-lg tracking-tight">FloraVision.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a] transition-colors">Home</a>
            <div className="relative">
              <button
                onClick={() => setPlantsOpen(!plantsOpen)}
                className="flex items-center gap-1 text-[#e8f0e0] text-sm hover:text-[#8bc34a] transition-colors"
              >
                Plants Type
                <svg className={`w-3 h-3 transition-transform ${plantsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {plantsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#1e2a1c] border border-[#2e3d2b] rounded-xl overflow-hidden shadow-xl">
                  {['Indoor Plants', 'Outdoor Plants', 'Succulents', 'Tropical Plants', 'Air Purifiers'].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2.5 text-sm text-[#a8b8a0] hover:bg-[#2e3d2b] hover:text-[#e8f0e0] transition-colors">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a] transition-colors">More</a>
            <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a] transition-colors">Contact</a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-[#a8b8a0] hover:text-[#e8f0e0] transition-colors" aria-label="Search">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
              </svg>
            </button>
            <button className="text-[#a8b8a0] hover:text-[#e8f0e0] transition-colors relative" aria-label="Cart">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#a8b8a0] hover:text-[#e8f0e0] transition-colors"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1e2a1c] border-t border-[#2e3d2b] px-4 py-4 flex flex-col gap-4">
          <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a]">Home</a>
          <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a]">Plants Type</a>
          <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a]">More</a>
          <a href="#" className="text-[#e8f0e0] text-sm hover:text-[#8bc34a]">Contact</a>
        </div>
      )}
    </nav>
  )
}
