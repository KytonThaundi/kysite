import React from 'react';
import { MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-10 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8 border-b border-gray-800 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">Kyton Marko Thaundi</p>
            <p className="mt-1 text-sm text-gray-400">Business Analysis · Digital Health Experience</p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {[
              { label: 'Selected work', href: '#projects' },
              { label: 'Experience', href: '#about' },
              { label: 'Contact', href: '#contact' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/kyton-thaundi' },
              { label: 'GitHub', href: 'https://github.com/KytonThaundi' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('https://') ? '_blank' : undefined}
                rel={item.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                className="text-gray-300 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {currentYear} Kyton Marko Thaundi</p>
          <p className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Lilongwe, Malawi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
