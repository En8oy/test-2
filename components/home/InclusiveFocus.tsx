export default function InclusiveFocus() {
  const clientTypes = [
    {
      title: "Elite Athletes",
      description: "Taking your performance to the next level with specialized training programs designed for competitive athletes.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Busy Parents",
      description: "Flexible training solutions that fit your schedule, helping you stay healthy while managing family life.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Fitness Beginners",
      description: "Start your fitness journey with confidence through personalized guidance and supportive coaching.",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Training for Everyone
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Whether you&apos;re an elite athlete or just starting your fitness journey,
            we have the expertise to help you succeed
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {clientTypes.map((client, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {client.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {client.title}
                </h3>
                <p className="text-gray-600">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            No matter where you are in your fitness journey, we&apos;re here to support,
            guide, and empower you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}
