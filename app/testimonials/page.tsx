'use client'
import Image from 'next/image'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      image: "/images/testimonial1.svg",
      quote: "The personalized training program helped me achieve my first sub-4 hour marathon. The attention to detail and constant support made all the difference.",
      category: "Endurance Training",
      achievement: "Completed first marathon under 4 hours"
    },
    {
      name: "Mike Thompson",
      role: "Busy Professional",
      image: "/images/testimonial2.svg",
      quote: "As a busy executive, I needed a flexible program that could work around my schedule. HPT delivered exactly that, plus amazing results.",
      category: "General Fitness",
      achievement: "Lost 30 pounds while building strength"
    },
    {
      name: "Emily Rodriguez",
      role: "Former Athlete",
      image: "/images/testimonial1.svg",
      quote: "After my college sports career, I struggled to find a training program that challenged me. HPT helped me rediscover my competitive edge.",
      category: "Athletic Performance",
      achievement: "Returned to competitive sports"
    },
    {
      name: "David Chen",
      role: "Fitness Enthusiast",
      image: "/images/testimonial2.svg",
      quote: "The strength training program at HPT transformed not just my physique but my whole approach to fitness. The results speak for themselves.",
      category: "Strength Training",
      achievement: "Doubled strength metrics in 6 months"
    },
    {
      name: "Lisa Martinez",
      role: "Working Parent",
      image: "/images/testimonial1.svg",
      quote: "Finding time for fitness was always a challenge until I joined HPT. Their flexible scheduling and efficient workouts fit perfectly into my busy life.",
      category: "Work-Life Balance",
      achievement: "Maintained fitness routine for 1+ year"
    },
    {
      name: "James Wilson",
      role: "Recovery Journey",
      image: "/images/testimonial2.svg",
      quote: "After my injury, I was hesitant to return to training. The team at HPT provided the expertise and support I needed to safely rebuild my strength.",
      category: "Rehabilitation",
      achievement: "Full recovery and return to activities"
    }
  ];

  const categories = [
    "Endurance Training",
    "General Fitness",
    "Athletic Performance",
    "Strength Training",
    "Work-Life Balance",
    "Rehabilitation"
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Success Stories
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Real transformations and achievements from members of our HPT community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="mb-4">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-4">
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {testimonial.category}
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                        {testimonial.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Share Your Success Story
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Inspire others by sharing your fitness journey and achievements with the HPT community.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Submit Your Story
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-300">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-gray-300">Goal Achievement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TestimonialsPage
