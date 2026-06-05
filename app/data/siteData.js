// ============================================================
// Mehndi Designs — Site Data Configuration
// All categories, subcategories, slugs, and image paths
// ============================================================

export const siteConfig = {
  siteName: "Mehndi Designs",
  siteUrl: "https://mehndi-design.net",
  siteDescription: "Explore 1500+ beautiful mehndi designs for every occasion. Browse back hand, front hand, full hand, finger, arabic, and bridal henna designs.",
};

// Main categories with their subcategories
export const categories = [
  {
    id: "back-hand",
    name: "Back Hand",
    slug: "back-hand-mehndi-designs",
    title: "Back Hand Mehndi Designs",
    metaTitle: "Back Hand Mehndi Designs (776+ Ideas) | Mehndi Designs",
    metaDescription: "Trending 776+ beautiful back hand mehndi designs including aesthetic, khafif, modern, simple, and stylish henna patterns for every occasion.",
    description: "Explore our stunning collection of back hand mehndi designs. From modern minimalist chains to intricate traditional patterns, find the perfect henna design for your back hand.",
    imageFolder: "back/back hand",
    icon: "🤚",
    hasSubcategories: true,
    subcategories: [
      {
        id: "aesthetic-back-hand",
        name: "Aesthetic",
        slug: "aesthetic-back-hand-mehndi-designs",
        title: "Aesthetic Back Hand Mehndi Designs",
        metaTitle: "Aesthetic Back Hand Mehndi Designs (107 Ideas) | Mehndi Designs",
        metaDescription: "Discover 107 aesthetic back hand mehndi designs with elegant patterns, butterfly motifs, paisley chains, and modern artistic henna art.",
        description: "Discover elegant aesthetic back hand mehndi designs featuring artistic patterns, butterfly motifs, paisley chains, and modern henna art with delicate detailing.",
        imageFolder: "back/asthetic back hand",
        count: 107,
      },
      {
        id: "khafif-back-hand",
        name: "Khafif (Minimal)",
        slug: "khafif-back-hand-mehndi-designs",
        title: "Khafif Back Hand Mehndi Designs",
        metaTitle: "Khafif Back Hand Mehndi Designs (62 Ideas) | Mehndi Designs",
        metaDescription: "Browse 62 khafif minimal back hand mehndi designs with light strokes, bracelet-style bands, and delicate chain patterns for an elegant look.",
        description: "Browse our curated collection of khafif minimal back hand mehndi designs with light strokes, bracelet-style bands, and delicate chain patterns perfect for a clean, elegant look.",
        imageFolder: "back/Khafif (Minimal) back hand",
        count: 62,
      },
      {
        id: "modern-back-hand",
        name: "Modern",
        slug: "modern-back-hand-mehndi-designs",
        title: "Modern Back Hand Mehndi Designs",
        metaTitle: "Modern Back Hand Mehndi Designs (95 Ideas) | Mehndi Designs",
        metaDescription: "Explore 95 modern back hand mehndi designs with contemporary chain patterns, geometric styles, and trendy henna art for a chic look.",
        description: "Explore contemporary modern back hand mehndi designs featuring bold chain patterns, geometric motifs, and trendy henna art perfect for a chic, fashionable look.",
        imageFolder: "back/modren back hand",
        count: 95,
      },
      {
        id: "simple-back-hand",
        name: "Simple",
        slug: "simple-back-hand-mehndi-designs",
        title: "Simple Back Hand Mehndi Designs",
        metaTitle: "Simple Back Hand Mehndi Designs (80 Ideas) | Mehndi Designs",
        metaDescription: "Find 80 simple back hand mehndi designs with easy-to-apply patterns, mandala centers, and net designs perfect for beginners.",
        description: "Find beautiful simple back hand mehndi designs with easy-to-apply patterns, mandala centers, and net designs perfect for beginners and everyday occasions.",
        imageFolder: "back/Simple back hand",
        count: 80,
      },
      {
        id: "stylish-back-hand",
        name: "Stylish",
        slug: "stylish-back-hand-mehndi-designs",
        title: "Stylish Back Hand Mehndi Designs",
        metaTitle: "Stylish Back Hand Mehndi Designs (70 Ideas) | Mehndi Designs",
        metaDescription: "Discover 70 stylish back hand mehndi designs with peacock patterns, Arabic-inspired art, and bold floral henna designs for parties.",
        description: "Discover trendy stylish back hand mehndi designs featuring peacock patterns, Arabic-inspired art, and bold floral henna designs perfect for parties and celebrations.",
        imageFolder: "back/Stylish back hand",
        count: 70,
      },
    ],
  },
  {
    id: "front-hand",
    name: "Front Hand",
    slug: "front-hand-mehndi-designs",
    title: "Front Hand Mehndi Designs",
    metaTitle: "Front Hand Mehndi Designs (313+ Ideas) | Mehndi Designs",
    metaDescription: "Explore 313+ stunning front hand mehndi designs including aesthetic, minimal, modern, royal, simple, and stylish henna patterns.",
    description: "Explore our beautiful collection of front hand mehndi designs. From royal intricate patterns to simple everyday henna, find the perfect design for your front hand.",
    imageFolder: "front/front hand",
    icon: "✋",
    hasSubcategories: true,
    subcategories: [
      {
        id: "aesthetic-front-hand",
        name: "Aesthetic",
        slug: "aesthetic-front-hand-mehndi-designs",
        title: "Aesthetic Front Hand Mehndi Designs",
        metaTitle: "Aesthetic Front Hand Mehndi Designs (20 Ideas) | Mehndi Designs",
        metaDescription: "Browse 20 aesthetic front hand mehndi designs with artistic patterns and elegant henna art.",
        description: "Browse aesthetic front hand mehndi designs with artistic patterns and elegant henna art for a refined look.",
        imageFolder: "front/asthetic front hand",
        count: 20,
      },
      {
        id: "minimal-front-hand",
        name: "Minimal",
        slug: "minimal-front-hand-mehndi-designs",
        title: "Minimal Front Hand Mehndi Designs",
        metaTitle: "Minimal Front Hand Mehndi Designs (41 Ideas) | Mehndi Designs",
        metaDescription: "Discover 41 minimal front hand mehndi designs with clean lines and simple patterns.",
        description: "Discover minimal front hand mehndi designs with clean lines and simple patterns for a subtle, elegant look.",
        imageFolder: "front/minimal front hand",
        count: 41,
      },
      {
        id: "modern-front-hand",
        name: "Modern",
        slug: "modern-front-hand-mehndi-designs",
        title: "Modern Front Hand Mehndi Designs",
        metaTitle: "Modern Front Hand Mehndi Designs (27 Ideas) | Mehndi Designs",
        metaDescription: "Explore 27 modern front hand mehndi designs with contemporary styles and trendy henna art.",
        description: "Explore modern front hand mehndi designs featuring contemporary styles and trendy henna art for a fashionable look.",
        imageFolder: "front/modren front hand",
        count: 27,
      },
      {
        id: "royal-front-hand",
        name: "Royal",
        slug: "royal-front-hand-mehndi-designs",
        title: "Royal Front Hand Mehndi Designs",
        metaTitle: "Royal Front Hand Mehndi Designs (44 Ideas) | Mehndi Designs",
        metaDescription: "Find 44 royal front hand mehndi designs with regal patterns and intricate detailing.",
        description: "Find royal front hand mehndi designs with regal patterns and intricate detailing fit for special occasions.",
        imageFolder: "front/royal front hand",
        count: 44,
      },
      {
        id: "simple-front-hand",
        name: "Simple",
        slug: "simple-front-hand-mehndi-designs",
        title: "Simple Front Hand Mehndi Designs",
        metaTitle: "Simple Front Hand Mehndi Designs (33 Ideas) | Mehndi Designs",
        metaDescription: "Browse 33 simple front hand mehndi designs with easy patterns for beginners.",
        description: "Browse simple front hand mehndi designs with easy-to-apply patterns perfect for beginners and everyday wear.",
        imageFolder: "front/simple front hand",
        count: 33,
      },
      {
        id: "stylish-front-hand",
        name: "Stylish",
        slug: "stylish-front-hand-mehndi-designs",
        title: "Stylish Front Hand Mehndi Designs",
        metaTitle: "Stylish Front Hand Mehndi Designs (36 Ideas) | Mehndi Designs",
        metaDescription: "Discover 36 stylish front hand mehndi designs with trendy henna patterns for parties.",
        description: "Discover stylish front hand mehndi designs with trendy henna patterns perfect for parties and celebrations.",
        imageFolder: "front/stylish front hand",
        count: 36,
      },
    ],
  },
  {
    id: "full-hand",
    name: "Full Hand",
    slug: "full-hand-mehndi-designs",
    title: "Full Hand Mehndi Designs",
    metaTitle: "Full Hand Mehndi Designs (228+ Ideas) | Mehndi Designs",
    metaDescription: "Explore 228+ full hand mehndi designs including front full hand, modern, simple, and stylish complete henna patterns.",
    description: "Explore our comprehensive collection of full hand mehndi designs that cover the entire hand. From simple everyday patterns to elaborate bridal-style henna, find your perfect full hand design.",
    imageFolder: null,
    icon: "🖐️",
    hasSubcategories: true,
    subcategories: [
      {
        id: "front-full-hand",
        name: "Front Full Hand",
        slug: "front-full-hand-mehndi-designs",
        title: "Front Full Hand Mehndi Designs",
        metaTitle: "Front Full Hand Mehndi Designs (39 Ideas) | Mehndi Designs",
        metaDescription: "Browse 39 front full hand mehndi designs with complete palm coverage patterns.",
        description: "Browse front full hand mehndi designs with beautiful complete palm coverage patterns for a stunning look.",
        imageFolder: "full hand/front full hand",
        count: 39,
      },
      {
        id: "modern-full-hand",
        name: "Modern",
        slug: "modern-full-hand-mehndi-designs",
        title: "Modern Full Hand Mehndi Designs",
        metaTitle: "Modern Full Hand Mehndi Designs (51 Ideas) | Mehndi Designs",
        metaDescription: "Explore 51 modern full hand mehndi designs with contemporary complete hand henna patterns.",
        description: "Explore modern full hand mehndi designs with contemporary complete hand henna patterns and trendy motifs.",
        imageFolder: "full hand/latest Modren full hand",
        count: 51,
      },
      {
        id: "simple-full-hand",
        name: "Simple",
        slug: "simple-full-hand-mehndi-designs",
        title: "Simple Full Hand Mehndi Designs",
        metaTitle: "Simple Full Hand Mehndi Designs (79 Ideas) | Mehndi Designs",
        metaDescription: "Find 79 simple full hand mehndi designs with easy-to-apply complete hand patterns.",
        description: "Find simple full hand mehndi designs with easy-to-apply complete hand patterns suitable for all skill levels.",
        imageFolder: "full hand/simple full hand",
        count: 79,
      },
      {
        id: "stylish-full-hand",
        name: "Stylish",
        slug: "stylish-full-hand-mehndi-designs",
        title: "Stylish Full Hand Mehndi Designs",
        metaTitle: "Stylish Full Hand Mehndi Designs (59 Ideas) | Mehndi Designs",
        metaDescription: "Discover 59 stylish full hand mehndi designs with elaborate and trendy henna art.",
        description: "Discover stylish full hand mehndi designs with elaborate and trendy henna art for parties and special occasions.",
        imageFolder: "full hand/stylish full hand",
        count: 59,
      },
    ],
  },
  {
    id: "fingers",
    name: "Fingers",
    slug: "finger-mehndi-designs",
    title: "Finger Mehndi Designs",
    metaTitle: "Finger Mehndi Designs (201+ Ideas) | Mehndi Designs",
    metaDescription: "Explore 201+ finger mehndi designs including back finger, ring finger, royal, simple, and stylish henna patterns.",
    description: "Explore our collection of finger mehndi designs. From simple ring-style patterns to detailed royal finger henna art, find the perfect design for your fingers.",
    imageFolder: "fingers/Finger mehndi design",
    icon: "💅",
    hasSubcategories: true,
    subcategories: [
      {
        id: "back-finger",
        name: "Back Finger",
        slug: "back-finger-mehndi-designs",
        title: "Back Finger Mehndi Designs",
        metaTitle: "Back Finger Mehndi Designs (25 Ideas) | Mehndi Designs",
        metaDescription: "Browse 25 back finger mehndi designs with elegant patterns for the back of fingers.",
        description: "Browse back finger mehndi designs with elegant patterns specially designed for the back of fingers.",
        imageFolder: "fingers/back finger",
        count: 25,
      },
      {
        id: "ring-finger",
        name: "Ring Style",
        slug: "ring-finger-mehndi-designs",
        title: "Ring Finger Mehndi Designs",
        metaTitle: "Ring Finger Mehndi Designs (27 Ideas) | Mehndi Designs",
        metaDescription: "Find 27 ring finger mehndi designs with ring-inspired henna patterns.",
        description: "Find ring finger mehndi designs with beautiful ring-inspired henna patterns that create a jewelry-like effect.",
        imageFolder: "fingers/Ring",
        count: 27,
      },
      {
        id: "royal-finger",
        name: "Royal",
        slug: "royal-finger-mehndi-designs",
        title: "Royal Finger Mehndi Designs",
        metaTitle: "Royal Finger Mehndi Designs (24 Ideas) | Mehndi Designs",
        metaDescription: "Discover 24 royal finger mehndi designs with intricate regal patterns.",
        description: "Discover royal finger mehndi designs with intricate regal patterns perfect for weddings and special events.",
        imageFolder: "fingers/Royal",
        count: 24,
      },
      {
        id: "simple-finger",
        name: "Simple",
        slug: "simple-finger-mehndi-designs",
        title: "Simple Finger Mehndi Designs",
        metaTitle: "Simple Finger Mehndi Designs (46 Ideas) | Mehndi Designs",
        metaDescription: "Explore 46 simple finger mehndi designs with easy patterns for beginners.",
        description: "Explore simple finger mehndi designs with easy-to-apply patterns perfect for beginners and minimal looks.",
        imageFolder: "fingers/Simple",
        count: 46,
      },
      {
        id: "stylish-finger",
        name: "Stylish",
        slug: "stylish-finger-mehndi-designs",
        title: "Stylish Finger Mehndi Designs",
        metaTitle: "Stylish Finger Mehndi Designs (49 Ideas) | Mehndi Designs",
        metaDescription: "Find 49 stylish finger mehndi designs with modern and trendy henna art.",
        description: "Find stylish finger mehndi designs with modern and trendy henna art for a fashionable look.",
        imageFolder: "fingers/Stylish",
        count: 49,
      },
    ],
  },
  {
    id: "arabic",
    name: "Arabic",
    slug: "arabic-mehndi-designs",
    title: "Arabic Mehndi Designs",
    metaTitle: "Arabic Mehndi Designs (162+ Ideas) | Mehndi Designs",
    metaDescription: "Explore 162+ beautiful Arabic mehndi designs with flowing vine patterns, bold florals, and elegant henna art inspired by Arabic tradition.",
    description: "Explore our stunning collection of Arabic mehndi designs featuring flowing vine patterns, bold florals, and elegant henna art inspired by the beautiful Arabic henna tradition.",
    imageFolder: "arabic",
    icon: "🌙",
    hasSubcategories: false,
    subcategories: [],
  },
  {
    id: "bridal",
    name: "Bridal",
    slug: "bridal-mehndi-designs",
    title: "Bridal Mehndi Designs",
    metaTitle: "Bridal Mehndi Designs (60+ Ideas) | Mehndi Designs",
    metaDescription: "Discover 60+ stunning bridal mehndi designs with intricate full-hand patterns, traditional motifs, and beautiful henna art for your wedding day.",
    description: "Discover our exquisite collection of bridal mehndi designs featuring intricate full-hand patterns, traditional motifs, and beautiful henna art crafted to make your wedding day unforgettable.",
    imageFolder: "bridal",
    icon: "💍",
    hasSubcategories: false,
    subcategories: [],
  },
];

// Helper: Get all categories for header navigation
export function getNavCategories() {
  return categories.map((cat) => ({
    name: cat.name,
    slug: cat.slug,
    hasSubcategories: cat.hasSubcategories,
    subcategories: cat.subcategories.map((sub) => ({
      name: sub.name,
      slug: sub.slug,
    })),
  }));
}

// Helper: Find category by slug
export function getCategoryBySlug(slug) {
  return categories.find((cat) => cat.slug === slug) || null;
}

// Helper: Find subcategory by slug
export function getSubcategoryBySlug(slug) {
  for (const cat of categories) {
    const sub = cat.subcategories.find((s) => s.slug === slug);
    if (sub) return { ...sub, parentCategory: cat };
  }
  return null;
}

// Helper: Get all page slugs for static generation
export function getAllSlugs() {
  const slugs = [];
  for (const cat of categories) {
    slugs.push(cat.slug);
    for (const sub of cat.subcategories) {
      slugs.push(sub.slug);
    }
  }
  return slugs;
}
