export type WorkCategory = 'photo' | 'video';

export interface PortfolioWork {
  id: string;
  title: string;
  client: string;
  category: WorkCategory;
  categoryLabel: string;
  year: string;
  durationOrSpec: string;
  summary: string;
  image: string;
  aspectClass: string;
  featuredSpan?: boolean;
  leadCrew: string[];
  deliverables: string;
  cameraGear: string;
  exifOrTimeline: {
    camera: string;
    lens: string;
    setting: string;
    colorProfile: string;
  };
  outcomeMetric: string;
}

export interface TeamMember {
  id: string;
  order: string;
  fullName: string;
  englishName: string;
  nickname: string;
  role: string;
  specialty: string;
  experienceYears: string;
  portrait: string;
  bio: string;
  philosophy: string;
  coreCraft: string[];
  notableClients: string[];
  email: string;
}

export interface BrandClient {
  id: string;
  name: string;
  sector: string;
  projectType: string;
  year: string;
  symbolType: 'grid' | 'monolith' | 'orbit' | 'prism' | 'frame' | 'horizon' | 'apex' | 'axis';
}

export interface ClientTestimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  outcome: string;
}

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_studio_production_1795370542704.jpg',
  caption: 'BABA GALAXY Main Production Stage · Thonglor, Bangkok',
};

export const STUDIO_METRICS = [
  { value: '180+', label: 'แคมเปญภาพถ่ายและวิดีโอ (2021–2026)' },
  { value: '45+', label: 'องค์กรและแบรนด์ชั้นนำที่ไว้วางใจ' },
  { value: '8K RAW', label: 'มาตรฐานการถ่ายทำและปรับเกรดสีระดับโรงภาพยนตร์' },
  { value: '5', label: 'ผู้เชี่ยวชาญเฉพาะทางในทีมหลักของสตูดิโอ' },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'peem',
    order: '01',
    fullName: 'ภีมภัทร วงศ์สุวรรณ',
    englishName: 'Peemphat Wongsuwan',
    nickname: 'Peem',
    role: 'Creative Director & Founder',
    specialty: 'กำกับทิศทางศิลป์และคอนเซปต์แคมเปญ',
    experienceYears: '11 ปี',
    portrait: '/src/assets/images/team_peem_1795370542354.jpg',
    bio: 'ผู้ก่อตั้ง BABA GALAXY เชี่ยวชาญการวางกลยุทธ์ด้านภาพลักษณ์และกำกับศิลป์สำหรับแบรนด์ระดับองค์กร เน้นความเรียบหรูที่มีความหมายชัดเจนในทุกเฟรม',
    philosophy: 'ความมินิมอลที่แท้จริงไม่ใช่การตัดทอนจนว่างเปล่า แต่คือการเลือกเก็บเฉพาะองค์ประกอบที่ทรงพลังที่สุดไว้',
    coreCraft: ['Brand Visual Direction', 'Commercial Film Concept', 'Art Direction'],
    notableClients: ['Siam Paragon', 'Sansiri', 'AIA Thailand'],
    email: 'peem@babagalaxy.co.th',
  },
  {
    id: 'natt',
    order: '02',
    fullName: 'ณัฐธิดา เจริญกิจ',
    englishName: 'Natthida Charoenkit',
    nickname: 'Natt',
    role: 'Executive Producer',
    specialty: 'บริหารการผลิตและประสานงานแบรนด์องค์กร',
    experienceYears: '9 ปี',
    portrait: '/src/assets/images/team_natt_1795370541273.jpg',
    bio: 'ผู้อยู่เบื้องหลังความราบรื่นของกองถ่ายระดับสเกลใหญ่ ดูแลงบประมาณ ตารางการผลิต ลิขสิทธิ์ และการส่งมอบงานตรงเวลาตามมาตรฐานบริษัทมหาชน',
    philosophy: 'งานสร้างสรรค์ที่ดีต้องตั้งอยู่บนระบบการจัดการที่แม่นยำและโปร่งใสในทุกขั้นตอน',
    coreCraft: ['Executive Production', 'Budget & Timeline Governance', 'Client Advisory'],
    notableClients: ['Central Retail', 'LINE Thailand', 'SCG Living'],
    email: 'natt@babagalaxy.co.th',
  },
  {
    id: 'krit',
    order: '03',
    fullName: 'กฤติน อัครเดชา',
    englishName: 'Kritin Akkaradecha',
    nickname: 'Krit',
    role: 'Director of Photography',
    specialty: 'กำกับภาพยนตร์โฆษณาและออกแบบแสง',
    experienceYears: '8 ปี',
    portrait: '/src/assets/images/team_krit_1795370541972.jpg',
    bio: 'ผู้กำกับภาพสายโฆษณาที่โดดเด่นเรื่องการใช้แสงสถาปัตยกรรมและมิติความลึกของภาพยนตร์ เชี่ยวชาญการถ่ายทำทั้งในสตูดิโอและโลเคชันจริง',
    philosophy: 'แสงเงาคือภาษาแรกที่ผู้ชมรู้สึกได้ก่อนจะได้ยินบทสนทนา',
    coreCraft: ['ARRI Alexa Cinematography', 'Architectural Lighting', 'Anamorphic Framing'],
    notableClients: ['Honda Thailand', 'Sansiri', 'True Corporation'],
    email: 'krit@babagalaxy.co.th',
  },
  {
    id: 'prima',
    order: '04',
    fullName: 'พริมา สิริวัฒน์',
    englishName: 'Prima Siriwat',
    nickname: 'Prima',
    role: 'Lead Commercial Photographer',
    specialty: 'ถ่ายภาพแฟชั่น ผลิตภัณฑ์ และพอร์ตเทรตผู้บริหาร',
    experienceYears: '8 ปี',
    portrait: '/src/assets/images/team_prima_1795370542332.jpg',
    bio: 'ช่างภาพหลักประจำสตูดิโอที่มีลายเซ็นชัดเจนด้านความคมชัด โครงสร้างภาพที่สมดุล และการดึงคาแรกเตอร์ของบุคคลและผลิตภัณฑ์ระดับลักชัวรี',
    philosophy: 'ภาพนิ่งที่ดีเพียงหนึ่งใบควรเล่าเรื่องราวทั้งหมดของคอลเลกชันได้ในเสี้ยววินาที',
    coreCraft: ['Medium Format Photography', 'Luxury Still Life', 'Editorial Portrait'],
    notableClients: ['Siam Paragon', 'Central Retail', 'Jim Thompson'],
    email: 'prima@babagalaxy.co.th',
  },
  {
    id: 'win',
    order: '05',
    fullName: 'ธนวินท์ พิพัฒน์',
    englishName: 'Thanawin Pipat',
    nickname: 'Win',
    role: 'Senior Film Editor & Colorist',
    specialty: 'ตัดต่อลำดับภาพยนตร์และปรับเกรดสี DaVinci',
    experienceYears: '7 ปี',
    portrait: '/src/assets/images/team_win_1795370542181.jpg',
    bio: 'ดูแลงาน Post-Production ครบวงจรตั้งแต่การวางจังหวะเล่าเรื่อง การออกแบบซาวด์ดีไซน์ ไปจนถึงการคุมโทนสีเอกลักษณ์ของแบรนด์ให้สอดคล้องทุกแพลตฟอร์ม',
    philosophy: 'จังหวะการตัดต่อคือชีพจรของภาพยนตร์ ส่วนโทนสีคือความทรงจำที่ติดตาผู้ชม',
    coreCraft: ['Commercial Editing', 'DaVinci Resolve Grading', 'Master Finishing'],
    notableClients: ['Honda Thailand', 'LINE Thailand', 'AIA Thailand'],
    email: 'win@babagalaxy.co.th',
  },
];

export const PORTFOLIO_WORKS: PortfolioWork[] = [
  {
    id: 'aurora-ev-film',
    title: 'Aurora Flagship EV — Architectural Launch Film',
    client: 'Honda Thailand',
    category: 'video',
    categoryLabel: 'Video Production',
    year: '2026',
    durationOrSpec: '01:45 · 4K Anamorphic',
    summary:
      'ภาพยนตร์โฆษณาเปิดตัวรถยนต์ไฟฟ้ารุ่นเรือธง ถ่ายทำในสตูดิโอสถาปัตยกรรมขนาดใหญ่ เน้นการสะท้อนของเส้นแสง Overhead Softbox บนตัวถังสีเงินด้านและบรรยากาศ Deep Navy',
    image: '/src/assets/images/work_commercial_video_1795370542779.jpg',
    aspectClass: 'aspect-video',
    featuredSpan: true,
    leadCrew: ['ภีมภัทร วงศ์สุวรรณ', 'กฤติน อัครเดชา', 'ธนวินท์ พิพัฒน์'],
    deliverables: 'TVC 90s · Cutdowns 30s/15s · Key Visual Stills',
    cameraGear: 'ARRI Alexa 35 · Atlas Orion Anamorphic',
    exifOrTimeline: {
      camera: 'ARRI Alexa 35',
      lens: 'Atlas Orion 40mm Anamorphic',
      setting: '24 fps · 180° Shutter · T2.8',
      colorProfile: 'ARRI LogC4 · Custom Navy LUT',
    },
    outcomeMetric: '4.2M ยอดรับชมออร์แกนิกใน 3 สัปดาห์แรก',
  },
  {
    id: 'siam-atelier-editorial',
    title: 'Winter Tailoring — Minimalist Editorial Series',
    client: 'Central Retail',
    category: 'photo',
    categoryLabel: 'Photography',
    year: '2026',
    durationOrSpec: '18 Frames · Medium Format',
    summary:
      'เซ็ตภาพถ่ายแฟชั่นคอลเลกชัน Autumn/Winter ที่เน้นโครงสร้างเสื้อผ้าสีขาวบริสุทธิ์ตัดกับฉากหลังสีน้ำเงินเข้ม เพื่อใช้ในสื่อสิ่งพิมพ์และบิลบอร์ดทั่วกรุงเทพฯ',
    image: '/src/assets/images/work_fashion_photo_1795370542208.jpg',
    aspectClass: 'aspect-[4/3]',
    leadCrew: ['พริมา สิริวัฒน์', 'ภีมภัทร วงศ์สุวรรณ'],
    deliverables: '18 High-Res Print Masters · Digital Lookbook',
    cameraGear: 'Hasselblad X2D 100C · XCD 55mm f/2.5V',
    exifOrTimeline: {
      camera: 'Hasselblad X2D 100C',
      lens: 'XCD 55mm f/2.5V',
      setting: 'f/4.0 · 1/160s · ISO 64',
      colorProfile: 'HNCS 16-bit RAW',
    },
    outcomeMetric: 'เพิ่มการมีส่วนร่วมแคมเปญ Lookbook +68%',
  },
  {
    id: 'kronos-still-life',
    title: 'Titanium & Glass — Luxury Product Still Life',
    client: 'Siam Paragon',
    category: 'photo',
    categoryLabel: 'Photography',
    year: '2025',
    durationOrSpec: '12 Frames · Macro Studio',
    summary:
      'ภาพถ่ายผลิตภัณฑ์นาฬิกาไทเทเนียมและน้ำหอมระดับไฮเอนด์บนหินทราเวอร์ทีนสีขาว ควบคุมทิศทางเงาเรขาคณิตสีน้ำเงินเข้มให้เกิดมิติสะอาดตาไร้การรีทัชเกินจริง',
    image: '/src/assets/images/work_product_macro_1795370542299.jpg',
    aspectClass: 'aspect-[4/3]',
    leadCrew: ['พริมา สิริวัฒน์', 'ณัฐธิดา เจริญกิจ'],
    deliverables: '12 Key Visuals · OOH Billboard Formats',
    cameraGear: 'Phase One IQ4 150MP · Schneider 120mm Macro',
    exifOrTimeline: {
      camera: 'Phase One IQ4 150MP',
      lens: 'Schneider 120mm f/4 Macro',
      setting: 'f/11 · 1/125s · ISO 50',
      colorProfile: 'Capture One Pro ICC',
    },
    outcomeMetric: 'ใช้งานในแคมเปญ Flagship Luxury ทั่วเอเชียตะวันออกเฉียงใต้',
  },
  {
    id: 'horizon-residence-film',
    title: 'The Horizon Residence — Architectural Brand Film',
    client: 'Sansiri',
    category: 'video',
    categoryLabel: 'Video Production',
    year: '2025',
    durationOrSpec: '02:30 · 6K Cinema',
    summary:
      'ภาพยนตร์แนะนำโครงการที่อยู่อาศัยระดับอัลตร้าลักชัวรีริมชายฝั่ง ถ่ายทำช่วง Blue Hour เพื่อเชื่อมแสงอุ่นจากสถาปัตยกรรมสีขาวเข้ากับท้องฟ้ายามค่ำ',
    image: '/src/assets/images/work_architecture_film_1795370541689.jpg',
    aspectClass: 'aspect-video',
    featuredSpan: true,
    leadCrew: ['กฤติน อัครเดชา', 'ธนวินท์ พิพัฒน์', 'ณัฐธิดา เจริญกิจ'],
    deliverables: 'Brand Film 150s · Private Viewing Cut · Drone Reels',
    cameraGear: 'RED V-RAPTOR 8K VV · Cooke S7/i',
    exifOrTimeline: {
      camera: 'RED V-RAPTOR 8K VV',
      lens: 'Cooke S7/i 27mm T2.0',
      setting: '24 fps · 1/48s · ISO 800',
      colorProfile: 'IPP2 Medium Contrast',
    },
    outcomeMetric: 'สนับสนุนยอดนัดหมายเข้าชมโครงการ Private Tour +42%',
  },
  {
    id: 'baba-studio-documentary',
    title: 'Inside Craft — Corporate Culture & Process Film',
    client: 'SCG Living',
    category: 'video',
    categoryLabel: 'Video Production',
    year: '2026',
    durationOrSpec: '03:10 · 4K Documentary',
    summary:
      'สารคดีองค์กรถ่ายทอดเบื้องหลังงานออกแบบและวิศวกรรมวัสดุยุคใหม่ ถ่ายทำในสตูดิโอและห้องปฏิบัติการจริงด้วยโทนภาพสะอาดตาและจังหวะการเล่าเรื่องที่จริงใจ',
    image: '/src/assets/images/hero_studio_production_1795370542704.jpg',
    aspectClass: 'aspect-video',
    leadCrew: ['ภีมภัทร วงศ์สุวรรณ', 'ณัฐธิดา เจริญกิจ', 'ธนวินท์ พิพัฒน์'],
    deliverables: 'Corporate Film · Executive Interviews · Social Verticals',
    cameraGear: 'Sony VENICE 2 · Zeiss Supreme Prime',
    exifOrTimeline: {
      camera: 'Sony VENICE 2 8K',
      lens: 'Zeiss Supreme Prime 35mm',
      setting: '25 fps · T2.0 · ISO 500',
      colorProfile: 'S-Gamut3.Cine · Neutral White',
    },
    outcomeMetric: 'เผยแพร่ในงานประชุมผู้ถือหุ้นประจำปี 2026',
  },
];

export const MAJOR_CLIENTS: BrandClient[] = [
  {
    id: 'siam-paragon',
    name: 'SIAM PARAGON',
    sector: 'Luxury Retail',
    projectType: 'Key Visual & Campaign Film',
    year: '2024–2026',
    symbolType: 'prism',
  },
  {
    id: 'central-retail',
    name: 'CENTRAL RETAIL',
    sector: 'Department Store',
    projectType: 'Seasonal Fashion Editorial',
    year: '2023–2026',
    symbolType: 'grid',
  },
  {
    id: 'sansiri',
    name: 'SANSIRI',
    sector: 'Real Estate',
    projectType: 'Architectural Brand Film',
    year: '2022–2026',
    symbolType: 'monolith',
  },
  {
    id: 'honda',
    name: 'HONDA THAILAND',
    sector: 'Automotive',
    projectType: 'Commercial Launch TVC',
    year: '2024–2026',
    symbolType: 'horizon',
  },
  {
    id: 'line-thailand',
    name: 'LINE THAILAND',
    sector: 'Technology',
    projectType: 'Brand Documentary & Portraits',
    year: '2023–2025',
    symbolType: 'orbit',
  },
  {
    id: 'scg-living',
    name: 'SCG LIVING',
    sector: 'Architecture & Materials',
    projectType: 'Corporate Craft Film',
    year: '2025–2026',
    symbolType: 'frame',
  },
  {
    id: 'aia-thailand',
    name: 'AIA THAILAND',
    sector: 'Financial Services',
    projectType: 'Executive Campaign Series',
    year: '2024–2025',
    symbolType: 'apex',
  },
  {
    id: 'true-corp',
    name: 'TRUE CORPORATION',
    sector: 'Telecommunications',
    projectType: 'Digital Product Launch Video',
    year: '2024–2026',
    symbolType: 'axis',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    quote:
      'ทีม BABA GALAXY เข้าใจโจทย์แบรนด์ระดับลักชัวรีตั้งแต่วันแรกที่บรีฟ งานภาพถ่ายและวิดีโอทุกชิ้นมีความสะอาดตา คมชัด และช่วยยกระดับภาพลักษณ์คอลเลกชันประจำปีของเราอย่างเห็นได้ชัด',
    authorName: 'ศิริกัญญา มหาวงศ์',
    authorRole: 'VP of Brand Marketing',
    company: 'Central Retail',
    outcome: 'ยอดการมีส่วนร่วมบนแคมเปญ Lookbook ออนไลน์เพิ่มขึ้น 68% ภายในไตรมาสเดียว',
  },
  {
    id: 'test-2',
    quote:
      'สิ่งที่ประทับใจที่สุดคือระบบการทำงานของโปรดิวเซอร์และทีมถ่ายทำทั้ง 5 คน ทุกขั้นตอนตรงเวลา มีความยืดหยุ่นหน้ากอง และส่งมอบไฟล์ Master ระดับภาพยนตร์ที่พร้อมใช้งานทั้งสื่อโทรทัศน์และโซเชียล',
    authorName: 'ปวีร์ ธรรมรงค์',
    authorRole: 'Head of Creative Campaigns',
    company: 'Sansiri',
    outcome: 'ภาพยนตร์โครงการช่วยเพิ่มอัตราการนัดหมายเข้าชมแบบ Private Tour สูงขึ้น 42%',
  },
];
