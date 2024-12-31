import Image from 'next/image';

export default function TestimonialsPreview() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marathon Runner",
      image: "/images/testimonial1.svg",
      quote: "The personalized training program helped me achieve my first sub-4 hour marathon. The attention to detail and constant support made all the difference.",
    },
    {
      name: "Mike Thompson",
      role: "Busy Professional",
      image: "/images/testimonial2.svg",
      quote: "As a busy executive, I needed a flexible program that could work around my schedule. HPT delivered exactly that, plus amazing results.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results from real people who trusted us with their fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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
                <blockquote>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/testimonials"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Read More Success Stories
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
