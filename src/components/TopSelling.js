import PlantCard from './PlantCard'

const topSellingPlants = [
  {
    id: 1,
    name: 'Aglaonema plant',
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and low maintenance.',
    price: 'Rs. 300/-',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of sizes and colors.',
    price: 'Rs. 380/-',
    image: 'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: 3,
    name: 'Cactus',
    description: 'It is known for their ability to thrive in arid and environments.',
    price: 'Rs. 259/-',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    description: 'The Aglaonema plant, a popular tropical houseplant known for its distinctive, perforated leaves.',
    price: 'Rs. 400/-',
    image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
    price: 'Rs. 450/-',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=300&h=300&fit=crop&crop=center',
  },
  {
    id: 6,
    name: 'Agave plant',
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
    price: 'Rs. 359/-',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=300&h=300&fit=crop&crop=center',
  },
]

export default function TopSelling() {
  return (
    <section className="py-16 bg-[#1a2318]" id="top-selling">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">Our Top Selling Plants</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topSellingPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  )
}
