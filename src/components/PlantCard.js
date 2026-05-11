import Image from 'next/image'

export default function PlantCard({ plant }) {
  return (
    <div className="bg-[#1e2a1c] border border-[#2e3d2b] rounded-2xl overflow-hidden group hover:border-[#4a7c59] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(74,124,89,0.2)]">
      {/* Image container */}
      <div className="relative h-48 bg-[#243022] overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 drop-shadow-xl"
        />
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="text-[#e8f0e0] font-medium text-base mb-1">{plant.name}</h3>
        <p className="text-[#6b7c65] text-xs leading-relaxed mb-3 line-clamp-2">{plant.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#e8f0e0] font-semibold text-base">{plant.price}</span>
          <button
            className="w-9 h-9 rounded-xl border border-[#3d5239] flex items-center justify-center text-[#a8b8a0] hover:bg-[#4a7c59] hover:text-[#e8f0e0] hover:border-[#4a7c59] transition-all"
            aria-label={`Add ${plant.name} to cart`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
