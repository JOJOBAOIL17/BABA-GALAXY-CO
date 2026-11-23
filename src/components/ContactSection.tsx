import { FormEvent, useState } from 'react';
import {
  Check,
  Copy,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Youtube,
} from 'lucide-react';

interface InquiryFormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  brief: string;
}

const INITIAL_FORM: InquiryFormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  service: 'Full Campaign (Photo & Video)',
  budget: '300,000 – 800,000 บาท',
  brief: '',
};

export function ContactSection() {
  const [form, setForm] = useState<InquiryFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormState, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      window.setTimeout(() => {
        setCopiedKey((current) => (current === key ? null : current));
      }, 2000);
    } catch {
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof InquiryFormState, string>> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'กรุณาระบุชื่อ-นามสกุลผู้ติดต่อ';
    }
    if (!form.company.trim()) {
      nextErrors.company = 'กรุณาระบุชื่อบริษัทหรือแบรนด์';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'กรุณาระบุอีเมลที่ถูกต้อง';
    }
    if (form.phone.trim() && !/^[0-9+\-\s()]{8,20}$/.test(form.phone.trim())) {
      nextErrors.phone = 'กรุณาระบุเบอร์โทรศัพท์ให้ถูกต้อง';
    }
    if (!form.brief.trim() || form.brief.trim().length < 10) {
      nextErrors.brief = 'กรุณาสรุปรายละเอียดโปรเจกต์อย่างน้อย 10 ตัวอักษร';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const referenceCode = `BG-${new Date().getFullYear()}-${String(
      Math.floor(1000 + Math.random() * 9000)
    )}`;
    setSubmittedRef(referenceCode);
  };

  const handleResetForm = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <section id="contact" className="bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-sm font-medium text-[#1E3A6E] mb-2">
            04. Studio Contact &amp; Booking
          </p>
          <h2
            className="font-display text-3xl lg:text-4xl font-semibold text-[#0B192C] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            เริ่มต้นโปรเจกต์กับ BABA GALAXY
          </h2>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Deep Navy Modern Communication Channels */}
          <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-2xl p-8 lg:p-10 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold mb-2">
                  ช่องทางติดต่อสื่อสารโดยตรง
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  ติดต่อทีม Executive Producer เพื่อขอใบเสนอราคา นัดประชุมออนไลน์ หรือเข้าชมสตูดิโอในย่านทองหล่อ
                </p>
              </div>

              {/* Direct Communication Channels with 1-click Copy */}
              <div className="space-y-4">
                <div className="bg-[#132847] border border-white/15 rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <Mail className="w-5 h-5 text-slate-300 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">New Business Email</p>
                      <a
                        href="mailto:hello@babagalaxy.co.th"
                        className="text-sm font-medium text-white hover:underline truncate block"
                      >
                        hello@babagalaxy.co.th
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', 'hello@babagalaxy.co.th')}
                    aria-label="คัดลอกอีเมล"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white inline-flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedKey === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>คัดลอกแล้ว</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>คัดลอก</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-[#132847] border border-white/15 rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <Phone className="w-5 h-5 text-slate-300 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Studio Desk (Mon–Fri 09:30–18:30)</p>
                      <a
                        href="tel:+6620889420"
                        className="font-mono text-sm font-medium text-white hover:underline tabular-nums block"
                      >
                        +66 2 088 9420
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('phone', '+6620889420')}
                    aria-label="คัดลอกเบอร์โทรศัพท์"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white inline-flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedKey === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>คัดลอกแล้ว</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>คัดลอก</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="bg-[#132847] border border-white/15 rounded-xl p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <MessageSquare className="w-5 h-5 text-slate-300 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">LINE Official Account</p>
                      <span className="font-mono text-sm font-medium text-white block">
                        @babagalaxy
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy('line', '@babagalaxy')}
                    aria-label="คัดลอก LINE ID"
                    className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white inline-flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedKey === 'line' ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>คัดลอกแล้ว</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>คัดลอก ID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Studio Location & Social Channels */}
            <div className="pt-6 border-t border-white/15 space-y-5">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                <span>
                  248 ซอยสุขุมวิท 55 (ทองหล่อ 13) แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-xs font-medium text-slate-200">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Vimeo Showreel
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean White Project Brief Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            {submittedRef ? (
              <div className="py-10 text-center max-w-md mx-auto space-y-5">
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="font-mono text-xs text-[#1E3A6E] tabular-nums">
                    REF: {submittedRef}
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-[#0B192C]">
                    ได้รับข้อมูลโปรเจกต์เรียบร้อยแล้ว
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ขอบคุณคุณ {form.fullName} ({form.company}) ทีม Executive Producer ของเราจะตรวจสอบรายละเอียดและติดต่อกลับภายใน 24 ชั่วโมงทำการ
                  </p>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-600 space-y-1">
                  <p>
                    <span className="text-slate-400">บริการที่สนใจ:</span>{' '}
                    <strong className="text-[#0B192C]">{form.service}</strong>
                  </p>
                  <p>
                    <span className="text-slate-400">งบประมาณโดยประมาณ:</span>{' '}
                    <strong className="text-[#0B192C]">{form.budget}</strong>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-5 py-2.5 text-sm font-medium text-[#0B192C] border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  ส่งข้อมูลโปรเจกต์เพิ่มเติม
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#0B192C]">
                    ส่งรายละเอียดโปรเจกต์เพื่อขอคำปรึกษา
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    กรอกข้อมูลเบื้องต้นเพื่อให้ทีมงานเตรียมแนวทางและใบเสนอราคาที่เหมาะสม
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#0B192C] mb-1.5"
                    >
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="เช่น พิมพ์ชนก วัฒนกุล"
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C]"
                    />
                    {errors.fullName && (
                      <p className="text-xs text-rose-700 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-medium text-[#0B192C] mb-1.5"
                    >
                      บริษัท / แบรนด์ *
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="เช่น Siam Retail Co., Ltd."
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C]"
                    />
                    {errors.company && (
                      <p className="text-xs text-rose-700 mt-1">{errors.company}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-[#0B192C] mb-1.5"
                    >
                      อีเมลองค์กร *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.co.th"
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C]"
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-700 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-[#0B192C] mb-1.5"
                    >
                      เบอร์โทรศัพท์ติดต่อ
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="081-234-5678"
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-rose-700 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-xs font-medium text-[#0B192C] mb-1.5"
                    >
                      ประเภทบริการ
                    </label>
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] focus:outline-none focus:border-[#0B192C]"
                    >
                      <option value="Full Campaign (Photo & Video)">
                        Full Campaign (Photo &amp; Video)
                      </option>
                      <option value="Commercial Video Production">
                        Commercial Video Production
                      </option>
                      <option value="Brand & Fashion Photography">
                        Brand &amp; Fashion Photography
                      </option>
                      <option value="Corporate Documentary & Portrait">
                        Corporate Documentary &amp; Portrait
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs font-medium text-[#0B192C] mb-1.5"
                    >
                      ช่วงงบประมาณโดยประมาณ
                    </label>
                    <select
                      id="contact-budget"
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] focus:outline-none focus:border-[#0B192C]"
                    >
                      <option value="150,000 – 300,000 บาท">
                        150,000 – 300,000 บาท
                      </option>
                      <option value="300,000 – 800,000 บาท">
                        300,000 – 800,000 บาท
                      </option>
                      <option value="800,000 – 1,500,000 บาท">
                        800,000 – 1,500,000 บาท
                      </option>
                      <option value="มากกว่า 1,500,000 บาท">
                        มากกว่า 1,500,000 บาท
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-brief"
                    className="block text-xs font-medium text-[#0B192C] mb-1.5"
                  >
                    รายละเอียดโปรเจกต์และช่วงเวลาที่ต้องการใช้งาน *
                  </label>
                  <textarea
                    id="contact-brief"
                    rows={4}
                    value={form.brief}
                    onChange={(e) => setForm({ ...form, brief: e.target.value })}
                    placeholder="ระบุวัตถุประสงค์ของแคมเปญ จำนวนชิ้นงาน หรือกำหนดวันถ่ายทำที่ต้องการ..."
                    className="w-full px-4 py-3 text-sm bg-white border border-slate-300 rounded-lg text-[#0B192C] placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C] resize-y"
                  />
                  {errors.brief && (
                    <p className="text-xs text-rose-700 mt-1">{errors.brief}</p>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-slate-500">
                    ตอบกลับภายใน 1 วันทำการ · NDA พร้อมลงนามก่อนรับบรีฟ
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0B192C] rounded-lg hover:bg-[#132847] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B192C]"
                  >
                    <span>ส่งรายละเอียดโปรเจกต์</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
