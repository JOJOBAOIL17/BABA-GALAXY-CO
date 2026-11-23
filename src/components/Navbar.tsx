import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#works', label: 'ผลงาน' },
  { href: '#clients', label: 'ลูกค้าแบรนด์' },
  { href: '#team', label: 'ทีมงาน' },
  { href: '#contact', label: 'ติดต่อเรา' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand wordmark */}
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-[#0B192C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B192C]"
        >
          BABA GALAXY
        </a>

        {/* Zone 2: 4 concise single-line navigation links */}
        <nav
          aria-label="หลัก"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 hover:text-[#0B192C] transition-colors duration-150 whitespace-nowrap shrink-0 after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#0B192C] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B192C]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0B192C] rounded-lg hover:bg-[#132847] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
          >
            นัดคุยโปรเจกต์
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0B192C] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0B192C]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-1">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="block py-3 text-base font-medium text-[#0B192C] border-b border-slate-100 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="block w-full text-center px-5 py-3 text-sm font-medium text-white bg-[#0B192C] rounded-lg hover:bg-[#132847] transition-colors"
            >
              นัดคุยโปรเจกต์
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
