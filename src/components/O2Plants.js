import Image from 'next/image'

export default function O2Plants() {
  return (
    <section className="py-16 bg-[#1a2318]" id="o2-plants">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">Our Best o2</h2>
        </div>

        {/* Featured card */}
        <div className="relative rounded-2xl overflow-hidden border border-[#2e3d2b] min-h-[300px] sm:min-h-[360px]">
          {/* Background */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=500&fit=crop"
              alt="O2 Plants background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1a2318]/75" />
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8 p-6 sm:p-10 h-full">
            {/* Large plant image */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 relative flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&h=400&fit=crop&crop=center"
                alt="O2 Plant"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-[#e8f0e0] font-serif text-2xl sm:text-3xl font-semibold mb-4">
                We Have Small And Best O2 Plants Collection's
              </h3>
              <p className="text-[#a8b8a0] text-sm leading-relaxed mb-2 max-w-lg">
                Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
              </p>
              <p className="text-[#6b7c65] text-sm leading-relaxed mb-6 max-w-lg">
                Many plants can help filter air pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
              </p>
              <button className="bg-transparent border border-[#e8f0e0] text-[#e8f0e0] text-sm px-7 py-2.5 rounded-full hover:bg-[#e8f0e0] hover:text-[#1a2318] transition-all duration-300">
                Explore
              </button>
            </div>

            {/* Navigation arrows */}
            <div className="flex sm:flex-col gap-3 sm:gap-2">
              <button className="w-9 h-9 rounded-full border border-[#2e3d2b] flex items-center justify-center text-[#a8b8a0] hover:bg-[#2e3d2b] hover:text-[#e8f0e0] transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-9 h-9 rounded-full border border-[#2e3d2b] flex items-center justify-center text-[#a8b8a0] hover:bg-[#2e3d2b] hover:text-[#e8f0e0] transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            <span className="w-5 h-1.5 bg-[#4a7c59] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#2e3d2b] rounded-full"></span>
            <span className="w-1.5 h-1.5 bg-[#2e3d2b] rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
