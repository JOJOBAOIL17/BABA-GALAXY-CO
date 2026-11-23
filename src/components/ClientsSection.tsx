import { useState } from 'react';
import {
  BrandClient,
  CLIENT_TESTIMONIALS,
  MAJOR_CLIENTS,
} from '../data/studioData';

function BrandSymbol({ type }: { type: BrandClient['symbolType'] }) {
  switch (type) {
    case 'prism':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <polygon points="16,4 28,26 4,26" stroke="currentColor" strokeWidth="1.75" />
          <line x1="16" y1="4" x2="16" y2="26" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case 'grid':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <rect x="5" y="5" width="9" height="9" stroke="currentColor" strokeWidth="1.75" />
          <rect x="18" y="5" width="9" height="9" stroke="currentColor" strokeWidth="1.75" />
          <rect x="5" y="18" width="9" height="9" stroke="currentColor" strokeWidth="1.75" />
          <rect x="18" y="18" width="9" height="9" fill="currentColor" />
        </svg>
      );
    case 'monolith':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <rect x="7" y="5" width="7" height="22" stroke="currentColor" strokeWidth="1.75" />
          <rect x="18" y="11" width="7" height="16" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case 'horizon':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.75" />
          <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case 'orbit':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <circle cx="16" cy="16" r="4" fill="currentColor" />
          <ellipse cx="16" cy="16" rx="12" ry="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'frame':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <rect x="5" y="7" width="22" height="18" stroke="currentColor" strokeWidth="1.75" />
          <rect x="11" y="12" width="10" height="8" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case 'apex':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <path d="M5 25L16 6L27 25" stroke="currentColor" strokeWidth="1.75" />
          <path d="M10 25L16 14L22 25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'axis':
      return (
        <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" aria-hidden="true">
          <line x1="16" y1="4" x2="16" y2="28" stroke="currentColor" strokeWidth="1.75" />
          <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

export function ClientsSection() {
  const [selectedClient, setSelectedClient] = useState<BrandClient>(MAJOR_CLIENTS[0]);

  return (
    <section id="clients" className="bg-[#0B192C] text-white py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-slate-300 tracking-wide mb-2">
              02. Enterprise &amp; Flagship Clients
            </p>
            <h2
              className="font-display text-3xl lg:text-4xl font-semibold text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              แบรนด์ชั้นนำที่ไว้วางใจร่วมงานกับ BABA GALAXY
            </h2>
          </div>

          <p className="text-sm text-slate-300 max-w-[44ch] leading-relaxed tracking-[0.01em]">
            คลิกที่โลโก้แต่ละองค์กรเพื่อดูขอบเขตความร่วมมือด้านการผลิตภาพถ่ายและภาพยนตร์โฆษณา
          </p>
        </div>

        {/* 8 Major Brand Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {MAJOR_CLIENTS.map((client) => {
            const isSelected = selectedClient.id === client.id;
            return (
              <button
                key={client.id}
                type="button"
                onClick={() => setSelectedClient(client)}
                aria-pressed={isSelected}
                className={`text-left p-6 rounded-xl border transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  isSelected
                    ? 'bg-white text-[#0B192C] border-white'
                    : 'bg-[#132847]/60 text-white border-white/15 hover:border-white/40 hover:bg-[#132847]'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <BrandSymbol type={client.symbolType} />
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isSelected ? 'text-slate-500' : 'text-slate-300/75'
                    }`}
                  >
                    {client.year}
                  </span>
                </div>

                <div className="font-display text-sm lg:text-base font-semibold tracking-wide mb-1">
                  {client.name}
                </div>
                <div
                  className={`text-xs ${
                    isSelected ? 'text-slate-600' : 'text-slate-300'
                  }`}
                >
                  {client.sector}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Client Collaboration Summary Bar */}
        <div className="bg-[#132847] border border-white/15 rounded-xl px-6 py-5 mb-14 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="font-display font-semibold text-white">
              {selectedClient.name}
            </span>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <span className="text-slate-200">{selectedClient.projectType}</span>
            <span className="text-slate-400" aria-hidden="true">·</span>
            <span className="text-slate-300">{selectedClient.sector}</span>
          </div>
          <a
            href="#contact"
            className="text-xs font-medium text-white underline underline-offset-4 decoration-white/40 hover:decoration-white whitespace-nowrap shrink-0"
          >
            ขอชม Case Study ฉบับเต็ม
          </a>
        </div>

        {/* Attributable Client Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CLIENT_TESTIMONIALS.map((item) => (
            <blockquote
              key={item.id}
              className="bg-[#132847]/45 border border-white/15 rounded-2xl p-7 flex flex-col justify-between gap-6"
            >
              <p className="text-base text-slate-100 leading-relaxed tracking-[0.01em]">
                “{item.quote}”
              </p>

              <footer className="pt-5 border-t border-white/10 space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-semibold text-white">
                    {item.authorName}
                  </span>
                  <span className="text-slate-400" aria-hidden="true">·</span>
                  <span className="text-slate-300">
                    {item.authorRole}, {item.company}
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  ผลลัพธ์: {item.outcome}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
