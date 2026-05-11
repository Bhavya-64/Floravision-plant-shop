import Image from 'next/image'

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen bg-[#1a2318] overflow-hidden flex items-center pt-16">
      {/* Background large plant image center */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none select-none">
        <div className="w-[500px] h-[600px] relative">
          <Image
            src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop&crop=center"
            alt="Background plant"
            fill
            className="object-cover rounded-full blur-sm"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[calc(100vh-64px)]">

          {/* Left: Hero Text */}
          <div className="flex flex-col justify-center py-16 lg:py-0">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#e8f0e0] leading-tight mb-4 fade-up">
              Earth's Exhale
            </h1>
            <p className="text-[#a8b8a0] text-sm sm:text-base max-w-sm mb-8 leading-relaxed fade-up delay-1">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>
            <div className="flex items-center gap-4 mb-16 fade-up delay-2">
              <button className="bg-[#e8f0e0] text-[#1a2318] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white transition-colors">
                Buy Now
              </button>
              <button className="flex items-center gap-2 text-[#e8f0e0] text-sm hover:text-[#8bc34a] transition-colors">
                <span className="w-8 h-8 rounded-full border border-[#4a7c59] flex items-center justify-center">
                  <svg className="w-3 h-3 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Live Demo...
              </button>
            </div>

            {/* Customer review quote */}
            <div className="bg-[#1e2a1c]/80 backdrop-blur border border-[#2e3d2b] rounded-2xl p-4 max-w-xs fade-up delay-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#4a7c59] overflow-hidden relative flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                    alt="Ronnie Hamill"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#e8f0e0] text-sm font-medium">Ronnie Hamill</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[#6b7c65] text-xs leading-relaxed">
                I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
              </p>
            </div>
          </div>

          {/* Right: Featured Plant Card */}
          <div className="flex justify-end items-start pt-8 lg:pt-24 fade-up delay-2">
            <div className="bg-[#1e2a1c]/90 backdrop-blur border border-[#2e3d2b] rounded-2xl overflow-hidden w-full max-w-[280px] sm:max-w-[300px]">
              {/* Plant image top */}
              <div className="relative h-52 bg-[#243022]">
                <Image
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=300&fit=crop&crop=top"
                  alt="Aglaonema plant"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Card info */}
              <div className="p-4">
                <p className="text-[#6b7c65] text-xs mb-1">Indoor Plant</p>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[#e8f0e0] font-serif text-lg font-medium">Aglaonema plant</h3>
                  <button className="text-[#a8b8a0] hover:text-[#e8f0e0]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <button className="w-full bg-[#2e3d2b] hover:bg-[#3d5239] text-[#e8f0e0] text-sm font-medium py-2 rounded-xl transition-colors">
                  Buy Now
                </button>
                {/* Dots */}
                <div className="flex gap-1.5 mt-3 justify-center">
                  <span className="w-4 h-1 bg-[#4a7c59] rounded-full"></span>
                  <span className="w-1 h-1 bg-[#2e3d2b] rounded-full"></span>
                  <span className="w-1 h-1 bg-[#2e3d2b] rounded-full"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
