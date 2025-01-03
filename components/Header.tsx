import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12">
                <Image
                  src="https://storage.googleapis.com/msgsndr/4I1M5n89grUjOuxzR5Dx/media/676952afb2eae1c4d1dfc14d.png"
                  alt="HPT Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="48px"
                  priority
                />
              </div>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="sm:hidden">
            {/* Mobile menu button - we'll implement mobile menu later */}
            <button className="text-gray-700 hover:text-gray-900">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
