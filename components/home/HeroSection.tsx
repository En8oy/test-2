import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative min-h-[90vh] flex flex-col lg:flex-row items-center overflow-hidden py-20 lg:py-0">
      <div className="absolute inset-0">
        <Image
          src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676949ff0bcca01fca805822.jpeg"
          alt="Gym Background"
          fill
          className="object-cover blur-[4px] scale-105 brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Owner Image with creative frame - Mobile */}
      <div className="relative w-full h-[300px] mb-8 lg:hidden">
        <div className="relative w-full h-full px-4">
          <div className="relative w-full h-full group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/50 to-white/50 rounded-[20px] blur-xl opacity-90"></div>
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/40 to-white/40 rounded-[18px] backdrop-blur-sm opacity-90"></div>
            
            <div className="relative h-full w-full rounded-[15px] overflow-hidden border-2 border-white/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <Image
                src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/67694a7d4693511834558b71.png"
                alt="Personal Trainer"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-[13px] brightness-125 contrast-110"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[45%] z-20 hidden lg:block">
        <div className="relative w-full h-full flex items-center justify-end">
          <div className="relative w-[80%] h-[85%] group mr-8">

            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/50 to-white/50 rounded-[40px] blur-2xl group-hover:blur-3xl group-hover:from-blue-500/60 group-hover:to-white/60 transition-all duration-300 opacity-90"></div>
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-600/40 to-white/40 rounded-[35px] backdrop-blur-sm opacity-90"></div>
            
            <div className="relative h-full w-full rounded-[30px] overflow-hidden border-2 border-white/50 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-300 bg-black/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <Image
                src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/67694a7d4693511834558b71.png"
                alt="Personal Trainer"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-[28px] brightness-125 contrast-110 object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>


      <div className="relative z-30 w-full lg:w-[55%] px-4 sm:px-6 lg:px-8 text-white">
        <div className="backdrop-blur-xl bg-black/40 p-6 sm:p-8 rounded-3xl border border-white/30 shadow-2xl animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-300">
            Empowering You to Achieve Your Greatest Potential
            <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2">
              In Life and Fitness
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-100">
            Transform your life with personalized training programs designed for your unique goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-150 ease-in-out"
            >
              Book Your Free Consultation
            </Link>
            
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white text-sm sm:text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-150 ease-in-out"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
