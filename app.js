/* ==========================================================================
   TAROTWITHROLI — Dynamic Component & Lucide Icon Sanctuary Engine
   Zero Emojis • Zero Selling Items • 100% Spiritual Guidance & Lucide Icons
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. Official Lucide Icon Vector Registry (Works both online & offline)
// --------------------------------------------------------------------------
const LUCIDE_PATHS = {
  'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'wand-sparkles': '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>',
  'moon-star': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
  'sun': '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  'orbit': '<circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.4 21.9a10 10 0 0 0 9.941-15.416"/><path d="M13.5 2.1a10 10 0 0 0-9.841 15.416"/>',
  'eye': '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'volume-2': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
  'volume-x': '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
  'calendar-days': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  'compass': '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  'layers': '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  'hourglass': '<path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/>',
  'hexagon': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
  'gem': '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'flower-2': '<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"/><circle cx="12" cy="8" r="2"/><path d="M12 10v12"/><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"/><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"/>',
  'leaf': '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
  'instagram': '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'facebook': '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  'twitter': '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
  'linkedin': '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  'check-circle-2': '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'
};

function lucideIcon(name, size = 16, extraClass = '') {
  const paths = LUCIDE_PATHS[name] || LUCIDE_PATHS['sparkles'];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-${name} ${extraClass}" aria-hidden="true">${paths}</svg>`;
}

// --------------------------------------------------------------------------
// 2. Structured Data Models (Zero Selling Items • Pure Consultation & Wisdom)
// --------------------------------------------------------------------------

const AFFIRMATIONS_DATA = [
  "Today's Energy: You are aligned with divine timing, peace, and gentle abundance.",
  "Sacred Reminder: Trust your intuition — the universe is softly guiding your next step.",
  "Healing Note: Release what weighs on your heart; clarity and light are entering your life.",
  "Cosmic Whisper: Every question you hold already carries the seed of its own wisdom.",
  "Positive Vibration: Your energy is sacred, protected, and worthy of deep serenity."
];

const NAV_LINKS_DATA = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services", active: false },
  { label: "Crystal Healing", href: "#crystal-healing", active: false },
  { label: "About Us", href: "#about", active: false },
  { label: "Instagram", href: "#instagram", active: false },
  { label: "FAQ's", href: "#faqs", active: false }
];

const SOCIAL_LINKS_DATA = [
  { name: "Instagram", href: "#instagram", icon: "instagram", title: "Instagram @tarotwithroli" },
  { name: "Facebook", href: "#instagram", icon: "facebook", title: "Facebook" },
  { name: "Twitter / X", href: "#instagram", icon: "twitter", title: "Twitter / X" },
  { name: "LinkedIn", href: "#instagram", icon: "linkedin", title: "LinkedIn" }
];

const TRUST_PILLARS_DATA = [
  {
    id: "pillar-expert",
    title: "Psychic Expert",
    icon: "sun",
    description: "Deep intuitive mastery blending Tarot, Vedic Astrology, Numerology, and Past-Life wisdom for accurate, compassionate guidance."
  },
  {
    id: "pillar-trusted",
    title: "Trusted",
    icon: "orbit",
    description: "Cherished by returning clients worldwide for honest, heart-centered insights and gentle, practical remedies that truly resonate."
  },
  {
    id: "pillar-confidential",
    title: "Confidential",
    icon: "eye",
    description: "Your personal stories, birth details, and questions remain 100% private and held within a safe, respectful spiritual space."
  }
];

const ORACLE_CARDS_DATA = [
  {
    roman: "XVII",
    name: "The Star",
    keyword: "Hope & Renewal",
    icon: "sparkles",
    crystal: "Natural Amethyst & Celestite",
    message: "A gentle wave of healing and emotional renewal surrounds you right now. Whatever uncertainty you have been carrying is clearing away. Trust that the universe is aligning serene blessings, spiritual clarity, and heartfelt peace in your favor."
  },
  {
    roman: "III",
    name: "The Empress",
    keyword: "Abundance & Nurturing",
    icon: "flower-2",
    crystal: "Rose Quartz & Green Aventurine",
    message: "You are stepping into a season of creative flourishing, self-love, and emotional warmth. Nurture your energy gently and allow abundance to flow to you naturally without force or anxiety."
  },
  {
    roman: "XVIII",
    name: "The Moon",
    keyword: "Deep Intuition",
    icon: "moon-star",
    crystal: "Rainbow Moonstone & Selenite",
    message: "Listen closely to your dreams and subtle inner nudges. Beneath surface doubts lies profound intuitive wisdom. A personal Tarot & Date of Birth reading with Roli can help illuminate the hidden path ahead."
  },
  {
    roman: "XIX",
    name: "The Sun",
    keyword: "Joy & Clarity",
    icon: "sun",
    crystal: "Golden Citrine & Clear Quartz",
    message: "Warmth, radiant breakthroughs, and honest clarity are illuminating your path. Confusion is lifting, bringing joyful news in relationships, career direction, and personal vitality."
  },
  {
    roman: "XIV",
    name: "Temperance",
    keyword: "Inner Harmony",
    icon: "leaf",
    crystal: "Lepidolite & White Agate",
    message: "Sacred balance and emotional equilibrium are returning to your life. Patience and gentle spiritual remedies will blend your current challenges into a peaceful, harmonious outcome."
  },
  {
    roman: "II",
    name: "The High Priestess",
    keyword: "Sacred Wisdom",
    icon: "eye",
    crystal: "Lapis Lazuli & Amethyst",
    message: "You are being called to honor your inner sanctuary. The answers you seek are sacred and deeply personal — trust the quiet voice within your soul."
  }
];

const SERVICES_DATA = [
  {
    number: "01",
    title: "Tarot Card Reading",
    icon: "layers",
    description: "Intuitive multi-card spreads to uncover deep clarity around love, relationships, career crossroads, emotional healing, and future possibilities.",
    tags: ["Love & Relationships", "Career Clarity", "Audio / Video / Call"],
    metaLabel: "Session Options",
    metaValue: "15 / 30 / 60 Mins",
    ctaLabel: "Book Reading"
  },
  {
    number: "02",
    title: "Astrology",
    icon: "compass",
    description: "Comprehensive birth chart (Kundli) & planetary transit analysis to understand your cosmic blueprint, favorable dasha periods, and life timing.",
    tags: ["Natal Chart", "Planetary Transits", "Karmic Timing"],
    metaLabel: "Consultation",
    metaValue: "30 / 60 Mins",
    ctaLabel: "Book Session"
  },
  {
    number: "03",
    title: "Complete Date of Birth Analysis",
    icon: "calendar-days",
    description: "In-depth numerological decoding of your Life Path, Destiny Number, Lo Shu Grid, lucky numbers, name vibrations, and personal year forecast.",
    tags: ["Lo Shu Grid", "Life Path & Destiny", "Name Alignment"],
    metaLabel: "Full Report + Call",
    metaValue: "Complete Analysis",
    ctaLabel: "Book Analysis"
  },
  {
    number: "04",
    title: "Remedial Solutions",
    icon: "flame",
    description: "Simple, non-fear-based, high-vibration spiritual remedies, crystal alignments, Vedic mantras, and daily rituals to clear energetic blocks.",
    tags: ["Energy Clearing", "Gentle Rituals", "Spiritual Alignment"],
    metaLabel: "Personalized Plan",
    metaValue: "Custom Remedies",
    ctaLabel: "Book Consultation"
  },
  {
    number: "05",
    title: "Past Life Analysis",
    icon: "hourglass",
    description: "Explore soul memories, karmic connections, unexplained emotional patterns, and soul contracts to bring deep forgiveness and liberation to your present life.",
    tags: ["Soul Contracts", "Karmic Healing", "Deep Release"],
    metaLabel: "Deep Session",
    metaValue: "45 / 60 Mins",
    ctaLabel: "Book Journey"
  },
  {
    number: "06",
    title: "Yantra Remedy",
    icon: "hexagon",
    description: "Sacred geometric energized Yantra guidance blessed with Vedic mantras to invite harmony, career protection, and auspicious vibrations into your life.",
    tags: ["Sri Yantra Wisdom", "Sacred Geometry", "Vastu & Harmony"],
    metaLabel: "Guided by Roli",
    metaValue: "Sacred Remedy",
    ctaLabel: "Book Guidance"
  }
];

const CRYSTAL_PILLARS_DATA = [
  {
    id: "intention",
    title: "BY INTENTION",
    subtitle: "Aligning with Love, Peace, Clarity & Spiritual Protection",
    badgeText: "Explore Guidance",
    svgArt: `<svg width="160" height="135" viewBox="0 0 160 135" fill="none">
      <polygon points="80,14 98,42 92,118 68,118 62,42" fill="#E3D2F6" stroke="#73579D" stroke-width="1.6"/>
      <polygon points="52,44 66,64 62,118 40,118 36,64" fill="#F4DFEE" stroke="#9B6B8C" stroke-width="1.5"/>
      <polygon points="108,38 124,62 118,118 94,118 94,58" fill="#D8E8F4" stroke="#5E7B9C" stroke-width="1.5"/>
      <polygon points="74,64 92,84 86,124 58,124 56,84" fill="#F5E9CE" stroke="#C2A068" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: "chakra",
    title: "BY CHAKRA",
    subtitle: "Harmonizing Crown, Third Eye, Heart, Solar Plexus & Root",
    badgeText: "Explore Chakras",
    svgArt: `<svg width="160" height="135" viewBox="0 0 160 135" fill="none">
      <circle cx="80" cy="30" r="12" fill="#D5EDE2" stroke="#6D8C7A" stroke-width="1.4"/>
      <circle cx="46" cy="44" r="11" fill="#F6EBC8" stroke="#C2A068" stroke-width="1.4"/>
      <circle cx="114" cy="44" r="11" fill="#D7E6F5" stroke="#5E7B9C" stroke-width="1.4"/>
      <circle cx="28" cy="76" r="10" fill="#F5DFDA" stroke="#B6766D" stroke-width="1.4"/>
      <circle cx="132" cy="76" r="10" fill="#E2D2F5" stroke="#73579D" stroke-width="1.4"/>
      <path d="M80 62C88 78 88 94 80 108C72 94 72 78 80 62Z" fill="#F4DFEE" stroke="#9B6B8C" stroke-width="1.5"/>
      <path d="M80 108C96 92 110 96 114 108C98 116 88 114 80 108Z" fill="#EFE4F8" stroke="#73579D" stroke-width="1.5"/>
      <path d="M80 108C64 92 50 96 46 108C62 116 72 114 80 108Z" fill="#EFE4F8" stroke="#73579D" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: "healing",
    title: "BY HEALING",
    subtitle: "Emotional Release, Aura Cleansing, Restful Sleep & Calm",
    badgeText: "Explore Healing",
    svgArt: `<svg width="160" height="135" viewBox="0 0 160 135" fill="none">
      <ellipse cx="80" cy="78" rx="48" ry="34" fill="#E7EFEA" stroke="#6D8C7A" stroke-width="1.6"/>
      <polygon points="84,26 98,52 88,78 72,72" fill="#E3D2F6" stroke="#73579D" stroke-width="1.5"/>
      <rect x="44" y="58" width="72" height="18" rx="9" transform="rotate(-14 44 58)" fill="#DCE8DF" stroke="#6D8C7A" stroke-width="1.5"/>
      <rect x="58" y="84" width="54" height="12" rx="4" transform="rotate(-28 58 84)" fill="#F3E5CA" stroke="#C2A068" stroke-width="1.5"/>
    </svg>`
  }
];

const ABOUT_STATS_DATA = [
  { value: "5,000+", label: "Readings Completed" },
  { value: "6+", label: "Sacred Modalities" },
  { value: "100%", label: "Private & Confidential" }
];

const INSTA_HIGHLIGHTS_DATA = [
  { icon: "sparkles", text: "Daily Pick-a-Card Reels" },
  { icon: "moon-star", text: "New Moon & Full Moon Rituals" },
  { icon: "gem", text: "Crystal Healing Wisdom" },
  { icon: "flower-2", text: "Live Q&A Sessions" }
];

const FAQS_DATA = {
  leftColumn: [
    {
      question: "Could I talk to Roli?",
      answer: "Yes, absolutely! Every 1-on-1 live consultation (via Phone Call or Video Session) is conducted personally by Roli so you can discuss your questions openly and receive direct, heartfelt guidance."
    },
    {
      question: "How do we contact you?",
      answer: "You can reach us directly through the <strong>Book Session</strong> button on our website, message us on Instagram at <strong>@tarotwithroli</strong>, or connect via our official WhatsApp & email support desk after selecting your service."
    },
    {
      question: "What are the services you provided?",
      answer: "We provide 6 core spiritual services: <strong>Tarot Card Reading</strong>, <strong>Astrology</strong>, <strong>Complete Date of Birth Analysis</strong>, <strong>Remedial Solutions</strong>, <strong>Past Life Analysis</strong>, and <strong>Yantra Remedy</strong>, along with personalized Crystal Healing guidance."
    },
    {
      question: "What is the duration of the sessions?",
      answer: "Sessions are tailored to your needs and are available in <strong>15-minute</strong> (quick clarity), <strong>30-minute</strong> (comprehensive reading), and <strong>60-minute</strong> (deep-dive Tarot + DOB/Astrology + Remedies) durations."
    },
    {
      question: "How do I book a session?",
      answer: "Simply click any <strong>Book Session</strong> button on this page, choose your preferred service, session format (Audio, Call, or Video), and preferred time slot. Our team will confirm your appointment slot immediately."
    },
    {
      question: "What if I need an urgent session?",
      answer: "If you are facing an urgent decision or emotional situation, we offer priority <strong>Express / Urgent Sessions</strong> that are scheduled on the same day within a few hours of booking."
    }
  ],
  rightColumn: [
    {
      question: "How about a session on an immediate basis?",
      answer: "Yes! You can select the <strong>Immediate / Same-Day Express</strong> option in the booking modal. Immediate basis slots are prioritized so Roli can guide you right when you need clarity most."
    },
    {
      question: "Can I book a session on the weekend ?",
      answer: "Yes, weekend slots (Saturday and Sunday) are available for working professionals and international clients. Since weekend slots fill up quickly, we recommend booking 2–3 days in advance."
    },
    {
      question: "Can you provide discounts?",
      answer: "Our energy exchange rates are thoughtfully structured to remain fair and accessible. We occasionally share festive and Full Moon special session slots on our Instagram <strong>@tarotwithroli</strong>."
    },
    {
      question: "If I am coming to you for the second time will you charge less?",
      answer: "Every reading requires Roli's complete intuitive energy, time, and spiritual preparation, so standard session charges apply. However, returning souls receive priority slot scheduling and complimentary affirmation follow-ups."
    },
    {
      question: "What is the process for Audio session?",
      answer: "For an <strong>Audio Session</strong>, you share your name, Date of Birth, and specific questions after booking. Roli performs your card spread and sends you detailed, personalized voice notes along with photos of your drawn cards so you can replay them anytime."
    },
    {
      question: "Can I get my money back if I miss the session?",
      answer: "Because Roli reserves dedicated time and spiritual preparation exclusively for your slot, missed sessions are non-refundable. However, if you inform us at least 6 hours prior, we are happy to reschedule your session once at no extra cost."
    }
  ]
};

const BOOKING_FORMATS_DATA = [
  "Live Audio / Phone Call (30 Mins)",
  "Live Video Consultation (45 Mins)",
  "Recorded Audio Session + Card Photos",
  "Urgent / Immediate Basis Session (Same Day)",
  "Weekend Special Slot"
];

// --------------------------------------------------------------------------
// 3. State & Audio Synthesizer
// --------------------------------------------------------------------------
let currentAffirmationIndex = 0;
let soundEnabled = true;

function playSacredChime(freq = 528) {
  if (!soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const oscHarmonic = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    oscHarmonic.type = 'sine';
    oscHarmonic.frequency.setValueAtTime(freq * 1.5, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

    osc.connect(gain);
    oscHarmonic.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    oscHarmonic.start();
    osc.stop(ctx.currentTime + 1.85);
    oscHarmonic.stop(ctx.currentTime + 1.85);
  } catch (e) {
    // Ignore audio context restrictions
  }
}

function showSacredToast(message) {
  const toast = document.getElementById('sacredToast');
  const toastText = document.getElementById('sacredToastText');
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3600);
}

// --------------------------------------------------------------------------
// 4. Dynamic Component Renderers
// --------------------------------------------------------------------------

function renderHeaderComponents() {
  const navLinksContainer = document.getElementById('navLinksRoot');
  if (navLinksContainer) {
    navLinksContainer.innerHTML = NAV_LINKS_DATA.map(item => `
      <li><a href="${item.href}" class="${item.active ? 'active' : ''}">${item.label}</a></li>
    `).join('');
  }

  const socialPillsContainer = document.getElementById('socialPillsRoot');
  if (socialPillsContainer) {
    socialPillsContainer.innerHTML = SOCIAL_LINKS_DATA.map(item => `
      <a href="${item.href}" class="social-icon-link" title="${item.title}" aria-label="${item.name}">
        ${lucideIcon(item.icon, 16)}
      </a>
    `).join('');
  }
}

function renderTrustPillars() {
  const root = document.getElementById('trustPillarsRoot');
  if (!root) return;
  root.innerHTML = TRUST_PILLARS_DATA.map(pillar => `
    <article class="trust-pillar-card">
      <div class="pillar-emblem" aria-hidden="true">
        ${lucideIcon(pillar.icon, 32)}
      </div>
      <div class="pillar-content">
        <h3>${pillar.title}</h3>
        <p>${pillar.description}</p>
      </div>
    </article>
  `).join('');
}

function renderServicesGrid() {
  const root = document.getElementById('servicesGridRoot');
  if (!root) return;
  root.innerHTML = SERVICES_DATA.map(service => `
    <article class="service-card">
      <div>
        <span class="service-number">${service.number}</span>
        <div class="service-icon-halo" aria-hidden="true">
          ${lucideIcon(service.icon, 34)}
        </div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <div class="service-tags">
          ${service.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="service-card-footer">
        <div class="service-meta">
          <span>${service.metaLabel}</span>
          <strong>${service.metaValue}</strong>
        </div>
        <button type="button" class="service-book-link" onclick="openBookingModal('${service.title}')">
          <span>${service.ctaLabel}</span>
          ${lucideIcon('arrow-right', 15)}
        </button>
      </div>
    </article>
  `).join('');
}

function renderCrystalPillars() {
  const root = document.getElementById('crystalPillarsRoot');
  if (!root) return;
  root.innerHTML = CRYSTAL_PILLARS_DATA.map(pillar => `
    <div class="crystal-pillar-card" data-pillar="${pillar.id}" onclick="openBookingModal('Remedial Solutions', 'Crystal Healing Guidance Inquiry: ${pillar.title}')">
      <h3 class="crystal-pillar-title">${pillar.title}</h3>
      <p class="crystal-pillar-desc">${pillar.subtitle}</p>
      <span class="shop-now-pill" style="display:inline-flex;align-items:center;gap:6px;">
        <span>${pillar.badgeText}</span>
        ${lucideIcon('arrow-right', 14)}
      </span>
      <div class="crystal-illustration-stage" aria-hidden="true">
        ${pillar.svgArt}
      </div>
    </div>
  `).join('');
}

function renderAboutAndInstagramItems() {
  const statsRoot = document.getElementById('aboutStatsRoot');
  if (statsRoot) {
    statsRoot.innerHTML = ABOUT_STATS_DATA.map(stat => `
      <div class="about-stat-box">
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      </div>
    `).join('');
  }

  const instaRoot = document.getElementById('instaHighlightsRoot');
  if (instaRoot) {
    instaRoot.innerHTML = INSTA_HIGHLIGHTS_DATA.map(chip => `
      <span class="insta-highlight-chip" style="display:inline-flex;align-items:center;gap:6px;">
        ${lucideIcon(chip.icon, 14)}
        <span>${chip.text}</span>
      </span>
    `).join('');
  }
}

function renderFaqColumns() {
  const root = document.getElementById('faqColumnsRoot');
  if (!root) return;

  const renderColumn = (items) => `
    <div class="faq-column">
      ${items.map(faq => `
        <div class="faq-item">
          <button type="button" class="faq-question-btn">
            <span>${faq.question}</span>
            <span class="faq-toggle-icon" aria-hidden="true">
              ${lucideIcon('plus', 16)}
            </span>
          </button>
          <div class="faq-answer-wrap">
            <div class="faq-answer-inner">
              ${faq.answer}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  root.innerHTML = renderColumn(FAQS_DATA.leftColumn) + renderColumn(FAQS_DATA.rightColumn);

  root.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.faq-item');
      const answerWrap = parentItem.querySelector('.faq-answer-wrap');
      const isOpen = parentItem.classList.contains('open');

      if (isOpen) {
        parentItem.classList.remove('open');
        answerWrap.style.maxHeight = null;
      } else {
        parentItem.classList.add('open');
        answerWrap.style.maxHeight = answerWrap.scrollHeight + 'px';
      }
    });
  });
}

function renderFooterAndModalSelects() {
  const footerServicesRoot = document.getElementById('footerServicesRoot');
  if (footerServicesRoot) {
    footerServicesRoot.innerHTML = SERVICES_DATA.map(s => `
      <li><a href="#services" onclick="openBookingModal('${s.title}')">${s.title}</a></li>
    `).join('');
  }

  const serviceSelect = document.getElementById('bookingServiceSelect');
  if (serviceSelect) {
    serviceSelect.innerHTML = SERVICES_DATA.map(s => `
      <option value="${s.title}">${s.title}</option>
    `).join('');
  }

  const formatSelect = document.getElementById('bookingFormatSelect');
  if (formatSelect) {
    formatSelect.innerHTML = BOOKING_FORMATS_DATA.map(f => `
      <option value="${f}">${f}</option>
    `).join('');
  }
}

// --------------------------------------------------------------------------
// 5. Interactive Oracle Card Pull & Booking Modal Logic
// --------------------------------------------------------------------------

function renderOracleSpread() {
  const container = document.getElementById('oracleCardsRow');
  const resultBox = document.getElementById('oracleReadingResult');
  if (!container) return;

  if (resultBox) {
    resultBox.classList.remove('visible');
  }

  const shuffled = [...ORACLE_CARDS_DATA].sort(() => 0.5 - Math.random()).slice(0, 3);

  container.innerHTML = shuffled.map((card, idx) => `
    <div class="tarot-draw-card" onclick="revealOracleCard(this, ${idx})" data-roman="${card.roman}" data-name="${card.name}" data-keyword="${card.keyword}" data-crystal="${card.crystal}" data-message="${card.message}">
      <div class="tarot-card-face tarot-card-back">
        <div class="tarot-card-back-pattern">
          ${lucideIcon('sparkles', 30)}
          <span>TarotwithRoli</span>
          <small style="font-size:0.68rem;color:#DEC69A;opacity:0.85;">Tap to Draw</small>
        </div>
      </div>
      <div class="tarot-card-face tarot-card-front">
        <span class="tarot-roman">${card.roman}</span>
        <div class="tarot-front-art">
          ${lucideIcon(card.icon, 28)}
        </div>
        <div>
          <div class="tarot-front-title">${card.name}</div>
        </div>
        <span class="tarot-front-keyword">${card.keyword}</span>
      </div>
    </div>
  `).join('');
}

window.revealOracleCard = function(cardEl) {
  if (cardEl.classList.contains('flipped')) return;
  cardEl.classList.add('flipped');
  playSacredChime(528);

  const name = cardEl.dataset.name;
  const roman = cardEl.dataset.roman;
  const keyword = cardEl.dataset.keyword;
  const crystal = cardEl.dataset.crystal;
  const message = cardEl.dataset.message;

  const resultBox = document.getElementById('oracleReadingResult');
  if (resultBox) {
    resultBox.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:8px;">
        <strong style="font-family:var(--font-serif);font-size:1.35rem;color:var(--text-primary);display:inline-flex;align-items:center;gap:8px;">
          ${lucideIcon('sparkles', 18)}
          <span>Card Drawn: ${roman} — ${name} (${keyword})</span>
        </strong>
        <span style="font-size:0.78rem;background:var(--bg-lavender-mist);color:var(--accent-amethyst-deep);padding:4px 12px;border-radius:999px;font-weight:600;display:inline-flex;align-items:center;gap:6px;">
          ${lucideIcon('gem', 13)}
          <span>Aligned Crystal Energy: ${crystal}</span>
        </span>
      </div>
      <p style="font-size:0.93rem;color:var(--text-secondary);margin-bottom:14px;">${message}</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <button type="button" class="service-book-link" onclick="openBookingModal('Tarot Card Reading', 'Personalized reading inspired by ${name}')">
          <span>Book Full Reading with Roli</span>
          ${lucideIcon('arrow-right', 15)}
        </button>
        <button type="button" class="energy-affirmation-btn" style="display:inline-flex;align-items:center;gap:6px;" onclick="renderOracleSpread()">
          ${lucideIcon('rotate-ccw', 13)}
          <span>Shuffle & Draw Again</span>
        </button>
      </div>
    `;
    resultBox.classList.add('visible');
  }
};

window.openBookingModal = function(serviceName = 'Tarot Card Reading', note = '') {
  const modal = document.getElementById('bookingModal');
  const select = document.getElementById('bookingServiceSelect');
  const notesInput = document.getElementById('bookingNotesInput');
  if (select && serviceName) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === serviceName) {
        select.selectedIndex = i;
        break;
      }
    }
  }
  if (notesInput && note) {
    notesInput.value = note;
  }
  if (modal) {
    modal.classList.add('active');
  }
};

window.closeBookingModal = function() {
  const modal = document.getElementById('bookingModal');
  if (modal) modal.classList.remove('active');
};

const BOOKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbyEN-XlBJ_vcXSh28nvdpH8Cpb9iOt1c-BRHfZ_k01Fb2WNqoI1SkvbZkPtgGMbU7Jy/exec"; 
// 6. Initialize All Dynamic Views & Event Listeners
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderHeaderComponents();
  renderTrustPillars();
  renderServicesGrid();
  renderCrystalPillars();
  renderAboutAndInstagramItems();
  renderFaqColumns();
  renderFooterAndModalSelects();
  renderOracleSpread();

  document.querySelectorAll('[data-lucide]').forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    const size = el.getAttribute('data-size') || 16;
if (!BOOKING_ENDPOINT.startsWith("https://script.google.com/macros/s/")) {
   
});

  const affirmBtn = document.getElementById('cycleAffirmationBtn');
  const affirmText = document.getElementById('affirmationText');
  if (affirmBtn && affirmText) {
    affirmText.textContent = AFFIRMATIONS_DATA[0];
    affirmBtn.addEventListener('click', () => {
      currentAffirmationIndex = (currentAffirmationIndex + 1) % AFFIRMATIONS_DATA.length;
      affirmText.textContent = AFFIRMATIONS_DATA[currentAffirmationIndex];
      playSacredChime(528);
    });
  }

  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.innerHTML = soundEnabled
        ? `${lucideIcon('volume-2', 15)} <span>Chime: On</span>`
        : `${lucideIcon('volume-x', 15)} <span>Chime: Off</span>`;
      if (soundEnabled) playSacredChime(528);
    });
  }
const BOOKING_ENDPOINT = "https://script.google.com/macros/s/AKfycbyEN-XlBJ_vcXSh28nvdpH8Cpb9iOt1c-BRHfZ_k01Fb2WNqoI1SkvbZkPtgGMbU7Jy/exec";
   const bookingForm = document.getElementById('sacredBookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitButton = bookingForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton ? submitButton.textContent : "";

    const booking = {
      name: document.getElementById('bookingNameInput')?.value || "",
      contact: document.getElementById('bookingContactInput')?.value || "",
      service: document.getElementById('bookingServiceSelect')?.value || "",
      format: document.getElementById('bookingFormatSelect')?.value || "",
      dob: document.getElementById('bookingDobInput')?.value || "",
      preferredDate: document.getElementById('bookingDateInput')?.value || "",
      notes: document.getElementById('bookingNotesInput')?.value || ""
    };

if (!BOOKING_ENDPOINT.startsWith("https://script.google.com/")) {
   showSacredToast("Booking system setup is not complete yet. Please try again later.");
      return;
    }

    try {
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      // Apps Script does not expose a normal browser CORS response.
      // no-cors sends the booking while preventing the browser from reading its response.
      await fetch(BOOKING_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(booking)
      });

      closeBookingModal();
      playSacredChime(639);
      showSacredToast(
        `Thank you, ${booking.name}! Your booking request has been submitted. Roli will contact you to confirm the session.`
      );
      bookingForm.reset();
    } catch (error) {
      console.error("Booking submission failed:", error);
      showSacredToast("We couldn't send your request. Please try again or contact us on Instagram.");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
}

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const canvas = document.getElementById('stardustCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = Array.from({ length: 34 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.22,
      vy: -Math.random() * 0.28 - 0.08,
      alpha: Math.random() * 0.45 + 0.15,
      isGold: Math.random() > 0.5
    }));

    function animateStardust() {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.isGold
          ? `rgba(194, 160, 104, ${p.alpha})`
          : `rgba(145, 116, 185, ${p.alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(animateStardust);
    }
    animateStardust();
  }
});
