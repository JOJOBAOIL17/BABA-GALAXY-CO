import { ArrowUpRight } from 'lucide-react';
import { HERO_MEDIA, STUDIO_METRICS } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-12 lg:pt-20 lg:pb-16">
        {/* Split-Screen Hero with equal-height alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-sm font-medium text-[#1E3A6E] tracking-wide mb-4">
                BABA GALAXY Studio · Bangkok
              </p>

              <h1
                className="font-display font-semibold text-[#0B192C] tracking-tight leading-[1.15] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)', textWrap: 'balance' }}
              >
                ถ่ายทอดตัวตนแบรนด์ผ่านภาพถ่ายและภาพยนตร์โฆษณาระดับสากล
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-[54ch] mb-8">
                สตูดิโอผลิตสื่อโฆษณาครบวงจรในสไตล์ Minimal Clean ที่ผสานความประณีตของงานศิลป์เข้ากับมาตรฐานการผลิตภาพยนตร์สำหรับองค์กรและแบรนด์ชั้นนำ
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href="#works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#0B192C] rounded-lg hover:bg-[#132847] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
              >
                <span>ชมผลงานทั้งหมด</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#team"
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-[#0B192C] hover:text-[#1E3A6E] transition-colors duration-150 whitespace-nowrap shrink-0 underline underline-offset-4 decoration-slate-300 hover:decoration-[#0B192C]"
              >
                รู้จักทีมงานทั้ง 5 ท่าน
              </a>
            </div>
          </div>

          {/* Right Column: Dominant 16:9 Studio Visual */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[280px] lg:min-h-[420px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <ResilientImage
                src={HERO_MEDIA.image}
                alt="สตูดิโอถ่ายทำภาพยนตร์โฆษณาและภาพถ่ายของ BABA GALAXY ในกรุงเทพมหานคร"
                fallbackTitle="BABA GALAXY Studio Production"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B192C]/80 via-[#0B192C]/30 to-transparent p-6">
                <p className="text-xs font-medium text-white/95 tracking-wide">
                  {HERO_MEDIA.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Studio Metrics Strip (below hero split) */}
        <div className="mt-12 lg:mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STUDIO_METRICS.map((metric) => (
            <div key={metric.label} className="space-y-1.5">
              <div className="font-display text-3xl lg:text-4xl font-semibold text-[#0B192C] tracking-tight tabular-nums">
                {metric.value}
              </div>
              <p className="text-sm text-slate-600 leading-snug">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
