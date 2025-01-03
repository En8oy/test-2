'use client'
import Image from 'next/image'

const ServicesPage = () => {
  return (
    <main className="flex-1">
      <section className="relative bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Training Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Comprehensive training solutions tailored to your goals, whether you're just starting out or pushing for peak performance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/images/deadlift.png"
                alt="Personal Training at HPT"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Personal Training</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4">
                Our one-on-one personal training sessions are designed to give you undivided attention and customized 
                workout plans that align perfectly with your fitness goals.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Customized workout programming</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Form correction and technique improvement</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Progress tracking and regular assessments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Specialized Programs</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Strength Training</h3>
              <p className="text-gray-600 mb-4">
                Build strength, increase muscle mass, and improve overall fitness with our comprehensive strength training programs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Powerlifting techniques</li>
                <li>• Progressive overload</li>
                <li>• Proper form guidance</li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Athletic Performance</h3>
              <p className="text-gray-600 mb-4">
                Enhance your athletic performance with sport-specific training and conditioning programs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Speed and agility training</li>
                <li>• Sport-specific drills</li>
                <li>• Performance testing</li>
              </ul>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Fitness & Conditioning</h3>
              <p className="text-gray-600 mb-4">
                Improve your overall fitness level with our balanced approach to conditioning and functional training.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Cardiovascular conditioning</li>
                <li>• Functional movement</li>
                <li>• Core strengthening</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Training Features</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Nutrition Guidance</h3>
                  <p className="text-gray-600">
                    Receive expert advice on nutrition to complement your training and maximize your results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Progress Monitoring</h3>
                  <p className="text-gray-600">
                    Track your progress with regular assessments and adjustments to your training program.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Recovery Support</h3>
                  <p className="text-gray-600">
                    Learn proper recovery techniques and strategies to prevent injury and optimize performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/images/ironman.png"
                alt="Training features at HPT"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Start Your Fitness Journey?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join HPT today and experience the difference professional training can make in achieving your fitness goals.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
