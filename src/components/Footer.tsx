export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-slate-200">
          <div>
            <a
              href="#"
              className="font-display text-lg font-bold tracking-tight text-[#0B192C]"
            >
              BABA GALAXY
            </a>
            <p className="text-xs text-slate-500 mt-1.5">
              Minimalist Photography &amp; Commercial Video Production Studio · Bangkok
            </p>
          </div>

          <nav
            aria-label="ลิงก์ส่วนท้าย"
            className="flex flex-wrap items-center gap-6 text-sm text-slate-600"
          >
            <a href="#works" className="hover:text-[#0B192C] transition-colors">
              ผลงาน
            </a>
            <a href="#clients" className="hover:text-[#0B192C] transition-colors">
              ลูกค้าแบรนด์
            </a>
            <a href="#team" className="hover:text-[#0B192C] transition-colors">
              ทีมงาน 5 ท่าน
            </a>
            <a href="#contact" className="hover:text-[#0B192C] transition-colors">
              ติดต่อเรา
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 BABA GALAXY Co., Ltd. สงวนลิขสิทธิ์ทุกประการ</p>
          <p>Thonglor Soi 13, Sukhumvit 55, Watthana, Bangkok 10110</p>
        </div>
      </div>
    </footer>
  );
}
