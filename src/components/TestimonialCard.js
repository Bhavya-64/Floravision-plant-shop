import Image from 'next/image'

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-[#1e2a1c] border border-[#2e3d2b] rounded-2xl p-5 hover:border-[#4a7c59] transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-11 h-11 rounded-full overflow-hidden relative flex-shrink-0 bg-[#2e3d2b]">
          <Image src={review.avatar} alt={review.name} fill className="object-cover" />
        </div>
        <div>
          <p className="text-[#e8f0e0] font-medium text-sm">{review.name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 fill-current ${i < review.rating ? 'text-yellow-400' : 'text-[#2e3d2b]'}`}
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#6b7c65] text-xs leading-relaxed">{review.text}</p>
    </div>
  )
}
