import TestimonialCard from './TestimonialCard'

const reviews = [
  {
    id: 1,
    name: 'Shelly Russel',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    text: 'Just got my hands on some absolutely awesome plants, and I couldn\'t be happier!',
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
    text: 'Each one has its own unique charm and personality, and they\'ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.',
  },
  {
    id: 3,
    name: 'Carol Hueis',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face',
    text: 'It\'s like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!',
  },
]

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-[#1a2318]" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-heading">Customer Review</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map(review => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
