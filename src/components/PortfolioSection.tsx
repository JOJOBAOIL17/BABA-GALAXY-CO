import { useEffect, useState } from 'react';
import {
  Camera,
  Film,
  Maximize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import { PORTFOLIO_WORKS, PortfolioWork, WorkCategory } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

type FilterTab = 'all' | WorkCategory;

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [selectedWork, setSelectedWork] = useState<PortfolioWork | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(28);

  const filteredWorks =
    activeFilter === 'all'
      ? PORTFOLIO_WORKS
      : PORTFOLIO_WORKS.filter((work) => work.category === activeFilter);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedWork(null);
      }
    };
    if (selectedWork) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedWork]);

  useEffect(() => {
    if (!selectedWork || selectedWork.category !== 'video' || !isPlaying) {
      return;
    }
    const timer = window.setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 250);
    return () => window.clearInterval(timer);
  }, [selectedWork, isPlaying]);

  const openLightbox = (work: PortfolioWork) => {
    setSelectedWork(work);
    setIsPlaying(true);
    setProgress(18);
  };

  return (
    <section id="works" className="bg-[#F8FAFC] py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header & Segmented Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-medium text-[#1E3A6E] mb-2">
              01. Selected Works
            </p>
            <h2
              className="font-display text-3xl lg:text-4xl font-semibold text-[#0B192C] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              ผลงานการถ่ายภาพและวิดีโอโฆษณา
            </h2>
          </div>

          {/* Functional Segmented Filter Bar */}
          <div
            role="tablist"
            aria-label="กรองประเภทผลงาน"
            className="inline-flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl self-start md:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#0B192C] text-white'
                  : 'text-slate-600 hover:text-[#0B192C]'
              }`}
            >
              ทั้งหมด ({PORTFOLIO_WORKS.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'photo'}
              onClick={() => setActiveFilter('photo')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'photo'
                  ? 'bg-[#0B192C] text-white'
                  : 'text-slate-600 hover:text-[#0B192C]'
              }`}
            >
              ภาพถ่าย (2)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'video'}
              onClick={() => setActiveFilter('video')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                activeFilter === 'video'
                  ? 'bg-[#0B192C] text-white'
                  : 'text-slate-600 hover:text-[#0B192C]'
              }`}
            >
              วิดีโอโฆษณา (3)
            </button>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const isWide = activeFilter === 'all' && work.featuredSpan;
            return (
              <article
                key={work.id}
                className={`group bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5 ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <button
                  type="button"
                  onClick={() => openLightbox(work)}
                  className="text-left w-full flex-1 flex flex-col focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C] cursor-pointer"
                >
                  {/* Media Container */}
                  <div
                    className={`relative w-full overflow-hidden bg-slate-100 ${
                      isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    <ResilientImage
                      src={work.image}
                      alt={`${work.title} — ${work.client}`}
                      fallbackTitle={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/65 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-200" />

                    {/* Clean corner media indicator (icon affordance, not pill sandwich) */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-white/90 text-[#0B192C] flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                      {work.category === 'video' ? (
                        <Play className="w-4 h-4 fill-[#0B192C]" />
                      ) : (
                        <Maximize2 className="w-4 h-4" />
                      )}
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white/95">
                      <span className="text-xs font-medium tracking-wide">
                        {work.client}
                      </span>
                      <span className="font-mono text-xs tabular-nums text-white/85">
                        {work.durationOrSpec}
                      </span>
                    </div>
                  </div>

                  {/* Card Content — Zero-Pill Inline Metadata */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                        <span className="inline-flex items-center gap-1.5 font-medium text-[#1E3A6E]">
                          {work.category === 'video' ? (
                            <Film className="w-3.5 h-3.5" />
                          ) : (
                            <Camera className="w-3.5 h-3.5" />
                          )}
                          {work.categoryLabel}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">{work.year}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{work.cameraGear}</span>
                      </div>

                      <h3 className="font-display text-lg lg:text-xl font-semibold text-[#0B192C] leading-snug mb-2 group-hover:text-[#1E3A6E] transition-colors">
                        {work.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {work.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="truncate pr-3">
                        ผลลัพธ์: <strong className="font-medium text-[#0B192C]">{work.outcomeMetric}</strong>
                      </span>
                      <span className="font-medium text-[#0B192C] whitespace-nowrap shrink-0 group-hover:underline">
                        ดูรายละเอียด
                      </span>
                    </div>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 bg-[#06101E]/85 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-[1000px] w-full max-h-[90vh] overflow-y-auto border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar inside Modal */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 sticky top-0 bg-white z-10">
              <div className="min-w-0">
                <p className="text-xs text-slate-500 truncate">
                  {selectedWork.client} · {selectedWork.categoryLabel} · {selectedWork.year}
                </p>
                <h3
                  id="lightbox-title"
                  className="font-display text-lg font-semibold text-[#0B192C] truncate"
                >
                  {selectedWork.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                aria-label="ปิดหน้าต่าง"
                className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center text-[#0B192C] hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Resolution Media Frame */}
            <div className="relative bg-[#0B192C] aspect-video w-full overflow-hidden">
              <ResilientImage
                src={selectedWork.image}
                alt={selectedWork.title}
                fallbackTitle={selectedWork.title}
                className="w-full h-full object-cover"
              />

              {/* Interactive Video Reel Controls when Video Work */}
              {selectedWork.category === 'video' && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06101E]/90 via-[#06101E]/45 to-transparent p-5">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setIsPlaying((prev) => !prev)}
                      aria-label={isPlaying ? 'หยุดชั่วคราว' : 'เล่นวิดีโอ'}
                      className="w-10 h-10 rounded-lg bg-white text-[#0B192C] flex items-center justify-center hover:bg-slate-100 transition-colors shrink-0 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 fill-[#0B192C]" />
                      )}
                    </button>

                    <div className="flex-1">
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={progress}
                        onChange={(e) => setProgress(Number(e.target.value))}
                        aria-label="ความคืบหน้าวิดีโอ"
                        className="w-full accent-white cursor-pointer"
                      />
                    </div>

                    <span className="font-mono text-xs text-white tabular-nums shrink-0">
                      00:{String(Math.floor((progress / 100) * 58)).padStart(2, '0')} / {selectedWork.durationOrSpec.split(' · ')[0]}
                    </span>

                    <button
                      type="button"
                      onClick={() => setIsMuted((prev) => !prev)}
                      aria-label={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
                      className="w-10 h-10 rounded-lg bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors shrink-0 cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Project Specifications & Credits */}
            <div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-sm font-semibold text-[#0B192C]">
                  แนวคิดและการผลิต
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedWork.summary}
                </p>

                <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">ขอบเขตงานส่งมอบ</p>
                    <p className="font-medium text-[#0B192C]">
                      {selectedWork.deliverables}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">ผลลัพธ์ทางธุรกิจ</p>
                    <p className="font-medium text-[#1E3A6E]">
                      {selectedWork.outcomeMetric}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 space-y-4">
                <h4 className="text-xs font-semibold text-[#0B192C] tracking-wide">
                  ข้อมูลทางเทคนิคและทีมผู้รับผิดชอบ
                </h4>

                <dl className="space-y-2.5 text-xs">
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                    <dt className="text-slate-500">Camera</dt>
                    <dd className="font-mono text-[#0B192C] text-right">
                      {selectedWork.exifOrTimeline.camera}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                    <dt className="text-slate-500">Optics</dt>
                    <dd className="font-mono text-[#0B192C] text-right">
                      {selectedWork.exifOrTimeline.lens}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                    <dt className="text-slate-500">Exposure / Rate</dt>
                    <dd className="font-mono text-[#0B192C] text-right tabular-nums">
                      {selectedWork.exifOrTimeline.setting}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-2">
                    <dt className="text-slate-500">Color Science</dt>
                    <dd className="font-mono text-[#0B192C] text-right">
                      {selectedWork.exifOrTimeline.colorProfile}
                    </dd>
                  </div>
                  <div className="pt-1">
                    <dt className="text-slate-500 mb-1">Lead Team (BABA GALAXY)</dt>
                    <dd className="font-medium text-[#0B192C]">
                      {selectedWork.leadCrew.join(' · ')}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
