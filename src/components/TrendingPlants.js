import Image from 'next/image'

const trendingPlants = [
  {
    id: 1,
    name: 'For Your Desks Decorations',
    description: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 'Rs. 599/-',
    image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=300&h=300&fit=crop&crop=center',
    bgImage: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?w=800&h=400&fit=crop',
    align: 'right',
  },
  {
    id: 2,
    name: 'For Your Desks Decorations',
    description: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
    price: 'Rs. 399/-',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=300&h=300&fit=crop&crop=center',
    bgImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop',
    align: 'left',
  },
]

function CartIcon() {
  return (
    <button className="w-9 h-9 rounded-xl border border-[#3d5239] flex items-center justify-center text-[#a8b8a0] hover:bg-[#2e3d2b] hover:text-[#e8f0e0] transition-colors flex-shrink-0">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
      </svg>
    </button>
  )
}

function TrendingCard({ plant }) {
  const isRight = plant.align === 'right'
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#2e3d2b] min-h-[180px] sm:min-h-[200px]">
      {/* Blurred background */}
      <div className="absolute inset-0">
        <Image src={plant.bgImage} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[#1a2318]/70 backdrop-blur-sm" />
      </div>
      {/* Content */}
      <div className={`relative z-10 flex items-center ${isRight ? 'flex-row' : 'flex-row'} gap-4 p-4 sm:p-6 h-full`}>
        {/* Plant image - always left on mobile, alternate on desktop */}
        <div className={`flex-shrink-0 ${!isRight ? 'hidden sm:block order-last' : ''}`}>
          <div className="w-28 h-28 sm:w-36 sm:h-36 relative">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Text content */}
        <div className={`flex-1 ${!isRight ? 'pr-0 sm:pr-4' : ''}`}>
          <h3 className="text-[#e8f0e0] font-serif text-lg sm:text-xl font-semibold mb-2">{plant.name}</h3>
          <p className="text-[#a8b8a0] text-xs sm:text-sm leading-relaxed mb-3 max-w-xs">{plant.description}</p>
          <p className="text-[#e8f0e0] font-semibold text-lg mb-4">{plant.price}</p>
          <div className="flex items-center gap-3">
            <button className="bg-transparent border border-[#e8f0e0] text-[#e8f0e0] text-sm px-5 py-1.5 rounded-full hover:bg-[#e8f0e0] hover:text-[#1a2318] transition-all">
              Explore
            </button>
            <CartIcon />
          </div>
        </div>

        {/* Plant image right side for card 2 on desktop */}
        {!isRight && (
          <div className="flex-shrink-0 hidden sm:block">
            <div className="w-28 h-28 sm:w-36 sm:h-36 relative">
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TrendingPlants() {
  return (
    <section className="py-16 bg-[#1a2318]" id="trending">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">Our Trendy plants</h2>
        </div>
        <div className="flex flex-col gap-5">
          {trendingPlants.map(plant => (
            <TrendingCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  )
}
