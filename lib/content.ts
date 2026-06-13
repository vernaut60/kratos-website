export const site = {
  name: "Kratos Calisthenics Arena",
  shortName: "KCA",
  tagline: "Hyderabad's premier bodyweight training hub",
  bannerMessage: "No Machines. No Shortcuts. Just You.",
  phone: "9534388999",
  phoneHref: "tel:9534388999",
  whatsappHref: "https://wa.me/919534388999",
  email: "kratoscaliarena@gmail.com",
  address:
    "Plot Number 127 Silpa Valley, Block Number 1 Kondapur, Serilingampalle (M), Hyderabad, Telangana 500084",
  logo: "/kca-logo.png",
  heroVideo:
    "https://jekmupbkimxtsqgdwamt.supabase.co/storage/v1/object/public/media/1751308772835-tqdu0h35vr.mp4",
  heroPoster: "/images/hero-poster.jpg",
  aboutImage:
    "https://jekmupbkimxtsqgdwamt.supabase.co/storage/v1/object/public/media/1776838702521-2zejpo32zzg.png",
  googleMapsUrl: "https://maps.app.goo.gl/PQj4nn11pENr6fY4A",
  enrollUrl: "https://kratosca.com/enroll",
  facebookUrl: "https://www.facebook.com/kratoscaliarena/",
  instagramUrl: "https://www.instagram.com/kratoscaliarena/?hl=en",
  instagramHandle: "@kratoscaliarena",
  footerTagline:
    "Transform your fitness journey with expert guidance, state-of-the-art facilities, and a supportive community dedicated to your success.",
} as const;

export const app = {
  ctaLabel: "Get the app",
  comingSoonMessage: "Our app is coming soon. Stay tuned.",
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Schedule", href: "#schedule" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#pricing" },
  { label: "Instagram", href: "#instagram" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const sections = {
  programs: {
    label: "Our programs",
    title: "Pick your path. Show up. Get stronger.",
    description:
      "Kids gymnastics, combo classes, group calisthenics, self training, day passes, and personal coaching — all on one floor in Kondapur.",
  },
  schedule: {
    label: "Schedule",
    title: "Coached sessions through the week",
    description: "Morning strength batches, kids gymnastics evenings, and weekend calisthenics at our Kondapur branch.",
  },
  trainers: {
    label: "Our trainers",
    title: "The coaches who'll push you further",
    description: "On the floor every session — strength, gymnastics, and athlete batches, coached by people who've put in the reps.",
  },
  pricing: {
    label: "Membership plan",
    title: "Choose a plan that fits your routine",
    description: "From day passes to quarterly group coaching. 24 plans across every training style.",
  },
  testimonials: {
    label: "Success stories",
    title: "Real results from our members",
    description: "Members who stayed consistent, built skills, and found a community that pushes them forward.",
  },
  instagram: {
    label: "Spotted on the floor",
    title: "Tag us to be featured",
    description:
      "Reels and clips from the KCA floor — tag @kratoscaliarena and you might end up here.",
  },
  blog: {
    label: "Our blog",
    title: "Fitness tips, guidance and motivation",
    description: "Workshops, training notes, and recovery guidance from the KCA floor.",
  },
  contact: {
    label: "Get in touch",
    title: "Start your training journey",
    description:
      "Ask about memberships, trial sessions, or the right plan for your schedule. We respond on WhatsApp and email.",
  },
  faq: {
    label: "FAQ's",
    title: "Frequently asked questions",
  },
} as const;

export const hero = {
  eyebrow: "Calisthenics Arena",
  title: "Strength is earned here.",
  subtext:
    "Coached calisthenics, gymnastics, and strength training for every level. Group sessions, open floor access, and 1-on-1 coaching at Hyderabad's home for bodyweight athletes.",
  location: "Kondapur, Hyderabad",
} as const;

export const about = {
  label: "About us",
  editorialTitle: "we build athletes, not just bodies.",
  subtitle: "Why Choose KCA?",
  tagline: "Your journey to real strength starts on this floor.",
  lead: "No machines. No shortcuts. Just you, the bar, and a coach who's done the work.",
  description:
    "Kratos Calisthenics Arena is Hyderabad's premier bodyweight training hub. We blend modern calisthenics with warrior-style conditioning to build agility, power, and mental resilience — for total beginners and seasoned athletes alike. Show up, get coached, get stronger.",
  stats: [
    { value: "8+", label: "Years coaching calisthenics in Hyderabad." },
    { value: "12+", label: "Expert trainers on the floor every week." },
    { value: "600+", label: "Members building strength with KCA." },
  ],
  image: site.aboutImage,
  memberCount: "600+ member reviews",
  memberAvatars: ["RR", "TR", "SK"],
  features: [
    "Personalized Training Programs",
    "Modern Equipment & Facilities",
    "Free WiFi",
  ],
} as const;

export const programs = [
  {
    tag: "Kids",
    title: "Kids Gymnastics",
    description: "Build flexibility, confidence, and coordination — for ages 4+.",
    priceFrom: "₹5,000",
    period: "/month",
    categoryId: "kids",
    image: "/images/programs/kids-gymnastics.jpg",
  },
  {
    tag: "Combo",
    title: "Combo Classes",
    description: "Calisthenics meets gymnastics. 5 coached sessions a week.",
    priceFrom: "₹8,500",
    period: "/month",
    categoryId: "combo",
    image: "/images/programs/combo-classes.jpg",
  },
  {
    tag: "Group",
    title: "Group Calisthenics",
    description: "Coached strength training, 3–5 days a week. Built for progress.",
    priceFrom: "₹4,000",
    period: "/month",
    categoryId: "group",
    image: "/images/programs/group-calisthenics.jpg",
  },
  {
    tag: "Self",
    title: "Self Training",
    description: "Open floor access. Train on your own time, your own pace.",
    priceFrom: "₹3,000",
    period: "/month",
    categoryId: "self",
    image: "/images/programs/self-training.jpg",
  },
  {
    tag: "Pass",
    title: "Day Pass",
    description: "Full floor access for a day. Come try before you commit.",
    priceFrom: "₹750",
    period: "/day",
    categoryId: "pass",
    image: "/images/programs/day-pass.jpg",
  },
  {
    tag: "1-on-1",
    title: "Personal Training",
    description: "1-on-1 coaching toward muscle-ups, handstands, and real strength goals.",
    priceFrom: "Enquire",
    period: "",
    categoryId: "personal",
    image: "/images/programs/personal-training.jpg",
  },
] as const;

export const trainers = [
  { name: "Jaloo", role: "Head Coach", focus: "Strength sessions · Tue & Wed AM", image: "/images/trainers/jaloo.jpg" },
  { name: "Sourav", role: "Strength Coach", focus: "Early morning batches", image: "/images/trainers/sourav.jpg" },
  { name: "Sandeep", role: "Calisthenics Coach", focus: "Evening strength sessions", image: "/images/trainers/sandeep.jpg" },
  { name: "Tony", role: "Gymnastics Coach", focus: "Kids & adults gymnastics", image: "/images/trainers/tony.jpg" },
  { name: "Aman", role: "Athlete Batch Coach", focus: "Advanced athlete batch", image: "/images/trainers/aman.jpg" },
  { name: "Pallavi", role: "Weekend Coach", focus: "Saturday calisthenics", image: "/images/trainers/pallavi.jpg" },
  { name: "Shekar", role: "Kids Gymnastics", focus: "Kids evening batches", image: "/images/trainers/shekar.jpg" },
  { name: "Hassy", role: "Strength Coach", focus: "Monday morning sessions", image: "/images/trainers/hassy.jpg" },
  { name: "Ara", role: "Evening Sessions", focus: "PM strength coaching", image: "/images/trainers/ara.jpg" },
] as const;

export type Plan = {
  name: string;
  price: number | null;
  period: string;
  description: string;
  perks: string[];
  highlight: boolean;
  showPrice: boolean;
};

export const planCategories = [
  {
    id: "kids",
    label: "Kids Gymnastics",
    plans: [
      {
        name: "Kids Gymnastic (5 classes/week)",
        price: 7500,
        period: "/month",
        description: "5 classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Kids Gymnastics (3 classes/week)",
        price: 5000,
        period: "/month",
        description: "Gymnastic for 4+ years",
        perks: ["Flexibility", "Gymnastics", "Parkour"],
        highlight: false,
        showPrice: true,
      },
    ] satisfies Plan[],
  },
  {
    id: "combo",
    label: "Combo Classes",
    plans: [
      {
        name: "Calisthenics & Gymnastic Combo Monthly",
        price: 8500,
        period: "/month",
        description: "5 Group classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics & Gymnastic Combo Quarterly",
        price: 22000,
        period: "/quarter",
        description: "5 Group classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics & Gymnastic Combo Half Yearly",
        price: 36000,
        period: "/half year",
        description: "5 Group classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: false,
      },
    ] satisfies Plan[],
  },
  {
    id: "group",
    label: "Group Classes",
    plans: [
      {
        name: "Calisthenics Group Classes Monthly (3 days/week)",
        price: 5000,
        period: "/month",
        description: "3 days per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Quarterly (3 days/week)",
        price: 12500,
        period: "/quarter",
        description: "3 days per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Half Yearly (3 days/week)",
        price: 22500,
        period: "/half year",
        description: "3 days per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Monthly (4 Classes/week)",
        price: 6000,
        period: "/month",
        description: "4 classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Quarterly (4 Classes/week)",
        price: 17000,
        period: "/quarter",
        description: "4 classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Half Yearly (4 Classes/week)",
        price: 34000,
        period: "/half year",
        description: "4 classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Monthly (5 Classes/week)",
        price: 7500,
        period: "/month",
        description: "5 classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Quarterly (5 Classes/week)",
        price: 20000,
        period: "/quarter",
        description: "5 classes per week",
        perks: [] as string[],
        highlight: true,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Half Yearly (5 Classes/week)",
        price: 34000,
        period: "/half year",
        description: "5 classes per week",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Calisthenics Group Classes Monthly All days",
        price: 8500,
        period: "/month",
        description: "All days access",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Monthly Calisthenics weekend only plan",
        price: 4000,
        period: "/month",
        description: "Weekend sessions only",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
    ] satisfies Plan[],
  },
  {
    id: "self",
    label: "Self Training",
    plans: [
      {
        name: "Self Training 1 Month",
        price: 3000,
        period: "/month",
        description: "Self training without trainer",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Self Training 3 Months",
        price: 7000,
        period: "/quarter",
        description: "",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Self Training 6 Months",
        price: 12000,
        period: "/half year",
        description: "",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
      {
        name: "Self Training 1 Year",
        price: 18000,
        period: "/year",
        description: "",
        perks: [] as string[],
        highlight: false,
        showPrice: true,
      },
    ] satisfies Plan[],
  },
  {
    id: "pass",
    label: "Day Pass",
    plans: [
      {
        name: "One Day Pass",
        price: 750,
        period: "/day",
        description: "",
        perks: ["Full access to Gym"],
        highlight: false,
        showPrice: true,
      },
    ] satisfies Plan[],
  },
  {
    id: "personal",
    label: "Personal Training",
    plans: [
      {
        name: "Personal Training Monthly",
        price: 35000,
        period: "/month",
        description: "",
        perks: [] as string[],
        highlight: false,
        showPrice: false,
      },
      {
        name: "Personal Training Quarterly",
        price: 50000,
        period: "/quarter",
        description: "",
        perks: [] as string[],
        highlight: false,
        showPrice: false,
      },
      {
        name: "Personal Training Half Yearly",
        price: 70000,
        period: "/half year",
        description: "",
        perks: [] as string[],
        highlight: false,
        showPrice: false,
      },
    ] satisfies Plan[],
  },
] as const;

export function formatPrice(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export const pricingPlans = [
  {
    name: "Group Classes Quarterly",
    description: "5 coached calisthenics sessions per week. Our most popular group plan.",
    price: formatPrice(20000),
    period: "/quarter",
    highlight: true,
    perks: [
      "5 coached group sessions per week",
      "Trainer support on the floor",
      "Skill progressions and strength work",
      "Kondapur branch access",
    ],
  },
  {
    name: "Self Training Monthly",
    description: "Train independently with full access to the calisthenics floor.",
    price: formatPrice(3000),
    period: "/month",
    highlight: false,
    perks: [
      "Full floor access",
      "Modern calisthenics equipment",
      "Weekday 6 AM–9 PM access",
      "Community training environment",
    ],
  },
] as const;

export const branch = {
  name: "Kondapur",
  hoursWeekdays: "6 AM - 10 AM, 5 PM - 9 PM",
  hoursSaturday: "Self Training Only",
  hoursSunday: "Self Training Only",
} as const;

export const hours = [
  { days: "Monday - Friday", time: branch.hoursWeekdays },
  { days: "Saturday", time: branch.hoursSaturday },
  { days: "Sunday", time: branch.hoursSunday },
] as const;

export const gymHours = [
  { days: "Weekdays", time: "6:00 AM - 9:00 PM" },
  { days: "Saturday", time: "7:00 AM - 5:00 PM" },
  { days: "Sunday", time: "7:00 AM - 12:00 PM" },
] as const;

export const scheduleByDay = [
  {
    day: "Monday",
    sessions: [
      { time: "6 AM", class: "Calisthenics Strength Session", coach: "Sourav" },
      { time: "7 AM", class: "Calisthenics Strength Session", coach: "Jaloo, Hassy" },
      { time: "8 AM", class: "Calisthenics Strength Session", coach: "Jaloo, Aman" },
      { time: "9 AM", class: "Calisthenics Athlete Batch", coach: "Aman" },
      { time: "4 PM", class: "Kids Gymnastics", coach: "Tony, Shekar" },
      { time: "5 PM", class: "Kids Gymnastics", coach: "Tony, Shekar" },
      { time: "6 PM", class: "Calisthenics Strength Session", coach: "Sandeep, Ara" },
      { time: "6 PM", class: "Adults Gymnastics", coach: "Tony" },
      { time: "7 PM", class: "Calisthenics Strength Session", coach: "Sandeep, Ara" },
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "7 AM", class: "Calisthenics", coach: "Jaloo" },
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "7 AM", class: "Calisthenics Strength Session", coach: "Jaloo, Sourav" },
    ],
  },
  {
    day: "Saturday",
    sessions: [
      { time: "7 AM", class: "Calisthenics", coach: "Pallavi" },
      { time: "8 AM", class: "Calisthenics", coach: "Pallavi" },
    ],
  },
] as const;

export const testimonials = [
  {
    snippet:
      "Ten months at Kratos is the longest I have stayed consistent in a decade. I lost 15 kg and unlocked handstands and muscle-ups I never thought possible.",
    quote:
      "I have been training at Kratos for the past 10 months, and this is the longest I have ever stayed consistent with any form of fitness in the last decade. I have lost over 15 kg and gained strength, control, and skills I never imagined I could achieve.",
    name: "Rahil Rahman",
    role: "KCA Member · 10 months training",
    rating: 5,
    image: null,
  },
  {
    snippet:
      "Every trainer is approachable whether you are a beginner or advanced. The community keeps every session motivating.",
    quote:
      "All the trainers here are incredibly knowledgeable and approachable, offering helpful tips whether you're a beginner or an experienced athlete. The community vibe is supportive and motivating.",
    name: "Tejaswi Reddy",
    role: "KCA Member",
    rating: 5,
    image: null,
  },
  {
    snippet:
      "Professional guidance with a fun, energetic vibe. My daily dose of fitness and motivation.",
    quote:
      "A top-notch calisthenics arena that combines professional guidance with a fun, energetic vibe - my daily dose of fitness and motivation.",
    name: "Subhash K",
    role: "KCA Member",
    rating: 5,
    image: null,
  },
] as const;

// Fallback posts if live profile fetch fails.
export const instagramPosts = [
  {
    url: "https://www.instagram.com/reel/DXeTDjiTyLO/",
    caption: "Caught in action at KCA",
  },
  {
    url: "https://www.instagram.com/reel/DXbxxuvD2rO/",
    caption: "KCA outdoors energy",
  },
  {
    url: "https://www.instagram.com/reel/DXaxH0ZCa14/",
    caption: "Inside the arena",
  },
  {
    url: "https://www.instagram.com/reel/CxsfnQzBnzs/",
    caption: "Calisthenics workshop: Master Your Bodyweight",
  },
  {
    url: "https://www.instagram.com/p/DWX1zzBj0lP/",
    caption: "Calisthenics tribe in the jungle",
  },
  {
    url: "https://www.instagram.com/reel/DXOwLmvj3GA/",
    caption: "Community on the floor",
  },
] as const;

export const blogPosts = [
  {
    title: "Had an amazing workshop",
    slug: "had-an-amazing-workshop",
    category: "Workshop",
    date: "Jun 28, 2025",
    excerpt: "Calisthenics workshop for beginners. An amazing experience to learn the fundamentals.",
    author: "KCA Admin",
    image: site.aboutImage,
  },
  {
    title: "Real Blog",
    slug: "real-blog",
    category: "Training",
    date: "Jul 4, 2025",
    excerpt: "Training notes and updates from the KCA floor.",
    author: "KCA Admin",
    image: site.aboutImage,
  },
  {
    title: "Back Pain",
    slug: "back-pain",
    category: "Recovery",
    date: "Jul 5, 2025",
    excerpt: "How you can fix your back with smarter movement and recovery habits.",
    author: "KCA Admin",
    image: site.aboutImage,
  },
] as const;

export const faqs = [
  {
    question: "What is included in a membership?",
    answer:
      "Plans include floor access, calisthenics equipment, and coached sessions based on your membership. Group plans include trainer support on the floor during class times.",
  },
  {
    question: "Do I need prior gym experience to join KCA?",
    answer:
      "No. We welcome beginners and advanced athletes. Coaches guide you through safe progressions for pull-ups, dips, handstands, and more.",
  },
  {
    question: "Can I try the arena before committing?",
    answer:
      "Yes. Day passes start at ₹750. Message us on WhatsApp or use the contact form to ask about trials and the right plan.",
  },
  {
    question: "Are trainers available for guidance?",
    answer:
      "Coaches are on the floor during all coached batches. Personal training is available on dedicated monthly, quarterly, and half-yearly plans.",
  },
] as const;

export const contact = {
  image: site.aboutImage,
  planOptions: planCategories.map((category) => category.label),
} as const;
