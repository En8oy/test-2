

'use client'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              About High Performance Training
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
              Empowering individuals to reach their full potential through personalized training and unwavering support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                At High Performance Training, we believe that everyone deserves access to professional-grade training and support. 
                Our mission is to create an inclusive environment where individuals of all fitness levels can thrive and achieve their personal goals.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                We combine cutting-edge training methodologies with personalized attention to help our clients break through barriers 
                and reach new heights in their fitness journey.
              </p>
            </div>
            <div className="relative h-[250px] md:h-[400px]">
              <Image
                src="/images/deadlift.png"
                alt="Training session at HPT"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from our training programs to our client support.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                We welcome everyone, regardless of their fitness level or background, creating a supportive community.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our methods and embrace new technologies to provide the best training experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="relative h-[300px] md:h-[400px] mb-4 md:mb-6 mx-auto max-w-md">
                <Image
                  src="/images/owner.png"
                  alt="HPT Owner"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain', objectPosition: 'center center' }}
                  className="rounded-lg"
                  priority
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Sherlyn Meyers</h3>
              <p className="text-gray-600">Founder & Head Coach</p>
            </div>
            <div className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="relative h-[300px] md:h-[400px] mb-4 md:mb-6 mx-auto max-w-md">
                <Image
                  src="/images/ironman.png"
                  alt="HPT Coach"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain', objectPosition: 'center center' }}
                  className="rounded-lg"
                  priority
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Elite Training Staff</h3>
              <p className="text-gray-600">Certified Professional Coaches</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
