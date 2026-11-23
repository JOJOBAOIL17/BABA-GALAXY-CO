import { useEffect, useState } from 'react';
import { ArrowUpRight, Mail, X } from 'lucide-react';
import { TEAM_MEMBERS, TeamMember } from '../data/studioData';
import { ResilientImage } from './ResilientImage';

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    if (selectedMember) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedMember]);

  return (
    <section id="team" className="bg-white py-20 lg:py-28 border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-medium text-[#1E3A6E] mb-2">
              03. Core Creative Team
            </p>
            <h2
              className="font-display text-3xl lg:text-4xl font-semibold text-[#0B192C] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              ทีมผู้เชี่ยวชาญหลักทั้ง 5 ท่าน
            </h2>
          </div>

          <p className="text-sm text-slate-600 max-w-[48ch] leading-relaxed">
            ทุกโปรเจกต์ของ BABA GALAXY ดูแลโดยทีมผู้เชี่ยวชาญตัวจริงทั้ง 5 สายงาน ตั้งแต่การวางคอนเซปต์ การกำกับภาพ ไปจนถึงการปรับสีระดับมาสเตอร์
          </p>
        </div>

        {/* 5-Person Team Grid: Clean 3-column + 2-column centered layout on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <article
              key={member.id}
              className="group bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 transition-colors duration-150 hover:bg-white hover:border-[#0B192C]/35 flex flex-col justify-between"
            >
              <div>
                {/* Top Portrait + Editorial Index */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-24 h-24 rounded-xl overflow-hidden border border-slate-200 bg-white shrink-0">
                    <ResilientImage
                      src={member.portrait}
                      alt={`${member.fullName} — ${member.role}`}
                      fallbackTitle={member.nickname}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-mono text-xs text-slate-400 tabular-nums">
                    {member.order} / 05
                  </span>
                </div>

                {/* Member Name & Role */}
                <div className="mb-3">
                  <h3 className="font-display text-xl font-semibold text-[#0B192C] leading-snug">
                    {member.fullName}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {member.englishName} ({member.nickname})
                  </p>
                </div>

                {/* Unboxed Role & Experience Metadata */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#1E3A6E] font-medium mb-3">
                  <span>{member.role}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-500 font-normal">
                    ประสบการณ์ {member.experienceYears}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {member.specialty}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 truncate pr-2">
                  {member.coreCraft[0]}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedMember(member)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0B192C] hover:text-[#1E3A6E] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
                >
                  <span>ประวัติการทำงาน</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}

          {/* 6th Grid Slot: Studio Collaboration Summary Card balancing the 3x2 grid on desktop */}
          <div className="bg-[#0B192C] text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs text-slate-300 mb-4">
                BABA GALAXY COLLECTIVE
              </p>
              <h3 className="font-display text-xl font-semibold leading-snug mb-3">
                ทำงานร่วมกันแบบครบวงจรในทีมเดียว
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ลดขั้นตอนการส่งต่อหลายเอเจนซี่ ด้วยการทำงานร่วมกันโดยตรงระหว่างผู้กำกับศิลป์ โปรดิวเซอร์ ผู้กำกับภาพ ช่างภาพ และคัลเลอริสต์
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/15">
              <a
                href="#contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-[#0B192C] bg-white rounded-lg hover:bg-slate-100 transition-colors whitespace-nowrap"
              >
                ปรึกษาทีมงานทั้ง 5 ท่าน
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Team Member Detail Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 bg-[#06101E]/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-[640px] w-full border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <span className="font-mono text-xs text-slate-500 tabular-nums">
                TEAM MEMBER {selectedMember.order} / 05
              </span>
              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                aria-label="ปิดหน้าต่าง"
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-[#0B192C] hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 lg:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                <div className="w-24 h-24 rounded-xl overflow-hidden border border-slate-200 shrink-0">
                  <ResilientImage
                    src={selectedMember.portrait}
                    alt={selectedMember.fullName}
                    fallbackTitle={selectedMember.nickname}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3
                    id="member-modal-title"
                    className="font-display text-2xl font-semibold text-[#0B192C]"
                  >
                    {selectedMember.fullName}
                  </h3>
                  <p className="text-sm text-slate-500 mb-1">
                    {selectedMember.englishName} · {selectedMember.nickname}
                  </p>
                  <p className="text-sm font-medium text-[#1E3A6E]">
                    {selectedMember.role} · ประสบการณ์ {selectedMember.experienceYears}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-500 tracking-wide">
                  บทบาทและความเชี่ยวชาญ
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-500 mb-1">แนวคิดในการทำงาน</p>
                <p className="text-sm font-medium text-[#0B192C] leading-relaxed">
                  “{selectedMember.philosophy}”
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200 text-xs">
                <div>
                  <p className="text-slate-500 mb-1">ความถนัดหลัก</p>
                  <p className="font-medium text-[#0B192C]">
                    {selectedMember.coreCraft.join(' · ')}
                  </p>
                </div>
                <div>
                  <p className="text-slate-500 mb-1">แบรนด์ที่ร่วมงานล่าสุด</p>
                  <p className="font-medium text-[#0B192C]">
                    {selectedMember.notableClients.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0B192C] hover:text-[#1E3A6E]"
                >
                  <Mail className="w-4 h-4" />
                  <span>{selectedMember.email}</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setSelectedMember(null)}
                  className="px-4 py-2 text-xs font-medium text-white bg-[#0B192C] rounded-lg hover:bg-[#132847] transition-colors"
                >
                  ติดต่อร่วมงาน
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
