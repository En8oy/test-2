import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: '#', label: 'Instagram', icon: 'instagram' },
    { href: '#', label: 'Facebook', icon: 'facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              HPT
            </Link>
            <p className="mt-2 text-gray-400">
              Empowering you to achieve your greatest potential in life and fitness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@hpt.com</li>
              <li>Phone: (555) 123-4567</li>
              <li className="flex space-x-4 mt-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.icon}
                    href={social.href}
                    className="hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    {social.label}
                  </Link>
                ))}
              </li>
            </ul>
          </div>
        </div>
      

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} HPT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
