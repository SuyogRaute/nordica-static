export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  features: string[];
  compatibility: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  badge?: string;
  url?: string;
}

export const categories = [
  { id: 'Detailing-Accessories', name: 'Detailing Accessories', slug: 'Detailing-Accessories' },
];

export const products: Product[] = [
  {
    id: 'Detailing Accessories',
    name: 'Dirt Lock Car Wash Insert – Bucket Filter for 3–8 Gallon Round Pails – Traps Debris, Prevents Swirl Marks – Self-Locking Rubber Grips, Venturi Flow, Cleaning Tool ',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Our Premium PPF Full Body Kit provides the ultimate protection for your vehicle\'s paint. Featuring advanced self-healing technology, this optically clear film guards against rock chips, scratches, swirl marks, and environmental contaminants while maintaining your car\'s showroom finish. The kit includes pre-cut panels designed for precise fitment on most popular vehicle models.',
    price: 24.99,
    originalPrice: null,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/71FKBeRc4cL._AC_SX679_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      'Self-healing technology',
      '10-year warranty',
      'Optically clear finish',
      'UV resistant',
      'Stain resistant',
      'Easy installation'
    ],
    compatibility: ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Porsche', 'Toyota', 'Honda'],
    rating: 4.9,
    reviewCount: 247,
    inStock: true,
    badge: '',
    url: "https://www.amazon.com/Detail-Guardz-Dirt-Bucket-Insert/dp/B07CKC4M9D?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: 'Dirt Lock Scrub Wall 180/360 – Washboard Attachment Dirt Lock - Bucket Filter – Vertical Cleaning Tool for Brushes, Mitts ',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Experience the pinnacle of paint protection with our Ceramic Pro Coating Kit. This professional-grade formula creates an incredibly durable, hydrophobic barrier that repels water, dirt, and contaminants. The nano-ceramic technology bonds at the molecular level with your paint, providing unmatched gloss and protection that lasts for years.',
    price: 20.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/61Qgfvha82L._AC_SX466_.jpg',
    images: ['/src/assets/product-ceramic.jpg'],

    features: [
      '9H hardness rating',
      'Hydrophobic surface',
      'UV protection',
      '5-year durability',
      'Chemical resistant',
      'Enhanced gloss'
    ],
    compatibility: ['All vehicle types', 'Boats', 'Motorcycles', 'RVs'],
    rating: 4.8,
    reviewCount: 183,
    inStock: true,
    badge: '',
    url: "https://www.amazon.com/DETAIL-GUARDZ-Bucket-Filter-Washboard/dp/B09CRX2D31?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: 'The Dirt Lock Scrub and Pump Attachment for Car Wash Bucket Filter ',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Protect the most vulnerable parts of your vehicle with our Universal Door Edge Guards. These precision-cut, crystal-clear guards wrap around door edges to prevent paint chips and scratches that commonly occur in parking lots. The flexible material conforms perfectly to any door edge contour for a virtually invisible installation.',
    price: 16.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/61P-hSN61ML._AC_SY300_SX300_QL70_FMwebp_.jpg',
    images: ['/src/assets/product-edge-guards.jpg'],
    features: [
      'Crystal clear finish',
      'Pre-cut for easy install',
      'Flexible material',
      '5-year warranty',
      'Fits most vehicles'
    ],
    compatibility: ['Universal fit for 4-door vehicles'],
    rating: 4.7,
    reviewCount: 412,
    inStock: true,
    url: "https://www.amazon.com/DETAIL-GUARDZ-Attachment-Bucket-Filter/dp/B08FTK9PJJ?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: 'Dirt Lock Scrub and Pump Bundle Complete Kit (Includes Dirt Lock Car Wash Bucket Filter) ',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Shield your bumpers from everyday hazards with our comprehensive Front & Rear Bumper Guard Kit. Designed for the areas most susceptible to damage, this thick, durable film absorbs impacts from shopping carts, minor collisions, and road debris. The kit includes coverage for both front and rear bumper corners and edges.',
    price: 33.99,
    originalPrice: null,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/71FXvGVXeHS._AC_SX466_.jpg',
    images: ['/src/assets/product-bumper.jpg'],
    features: [
      'Extra-thick protection',
      'Impact resistant',
      'Pre-cut patterns',
      'Clear or matte finish',
      '7-year warranty'
    ],
    compatibility: ['BMW', 'Mercedes-Benz', 'Audi', 'Tesla', 'Lexus', 'Acura'],
    rating: 4.8,
    reviewCount: 156,
    inStock: true,
    badge: '',
    url: "https://www.amazon.com/DETAIL-GUARDZ-Bundle-Complete-Bucket/dp/B08WWPLGNB?ref_=ast_sto_dp"
  },
  {
    id: 'Detailing Accessories',
    name: 'Dirt Lock Scrub and Pump Bundle Complete Kit (Includes Dirt Lock Car Wash Bucket Filter)',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Maximum protection for maximum exposure. Our Hood Protection Film provides full coverage for your vehicle\'s hood—the area most exposed to rock chips and road debris on highways. With 50% thicker material than standard PPF, this film is engineered for drivers who demand the best protection.',
    price: 33.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/71+TXrAMnfL._AC_SX466_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      '50% thicker material',
      'Highway-grade protection',
      'Self-healing',
      'Precision cut',
      '10-year warranty'
    ],
    compatibility: ['Most sedan and SUV models'],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    url: "https://www.amazon.com/DETAIL-GUARDZ-Bundle-Complete-Bucket/dp/B08WRL277D?ref_=ast_sto_dp"
  },
  {
    id: 'Detailing Accessories',
    name: 'Dirt Lock Pad Washer System Attachment with Spray Cleaner (Black)',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Keep your lights crystal clear with our Headlight Protection Film. This specialized film protects expensive headlight and taillight assemblies from yellowing, hazing, and rock chips. The optically clear material maintains full light output while providing a barrier against UV damage and road debris.',
    price: 79.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/710cuaz8RzS._AC_SY300_SX300_QL70_FMwebp_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      'Optically clear',
      'Anti-yellowing',
      'UV blocking',
      'Easy removal',
      '5-year warranty'
    ],
    compatibility: ['Universal - headlights and taillights'],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    url: "https://www.amazon.com/Detail-Guardz-Washer-Attachment-Cleaner/dp/B07VGMKW7S?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: 'The Dirt Lock Complete Pad Washer Bundle (Red - with Pad Spray Cleaner) Includes Dirt Lock Bucket Filter',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Keep your lights crystal clear with our Headlight Protection Film. This specialized film protects expensive headlight and taillight assemblies from yellowing, hazing, and rock chips. The optically clear material maintains full light output while providing a barrier against UV damage and road debris.',
    price: 79.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/610BaHck-iL._AC_SX466_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      'Optically clear',
      'Anti-yellowing',
      'UV blocking',
      'Easy removal',
      '5-year warranty'
    ],
    compatibility: ['Universal - headlights and taillights'],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    url: "https://www.amazon.com/Detail-Guardz-Washer-Attachment-Cleaner/dp/B07VGMKW7S?ref_=ast_sto_dp&th=1https://www.amazon.com/Detail-Guardz-Washer-Attachment-Cleaner/dp/B07VGMKW7S?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: '4pcs Plastic Hose Roller for Cars, Trucks & Motorcycles - Car Wheel Rolling System Tool Preventing Stucking and Snagging Under Tires (Black)',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Keep your lights crystal clear with our Headlight Protection Film. This specialized film protects expensive headlight and taillight assemblies from yellowing, hazing, and rock chips. The optically clear material maintains full light output while providing a barrier against UV damage and road debris.',
    price: 19.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/61w2m+bKp8L._AC_SX466_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      'Optically clear',
      'Anti-yellowing',
      'UV blocking',
      'Easy removal',
      '5-year warranty'
    ],
    compatibility: ['Universal - headlights and taillights'],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    url: "https://www.amazon.com/DETAIL-GUARDZ-Hose-Guide-Motorcycles/dp/B0FHKTM2YW?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: 'DETAIL GUARDZ Car Hose Guides (2 Pack Black)',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Keep your lights crystal clear with our Headlight Protection Film. This specialized film protects expensive headlight and taillight assemblies from yellowing, hazing, and rock chips. The optically clear material maintains full light output while providing a barrier against UV damage and road debris.',
    price: 12.99,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/61d5UKVXwoL._AC_SX466_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      'Optically clear',
      'Anti-yellowing',
      'UV blocking',
      'Easy removal',
      '5-year warranty'
    ],
    compatibility: ['Universal - headlights and taillights'],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    url: "https://www.amazon.com/Detail-Guardz-Hose-Guide-Black/dp/B07ND4L2ML?ref_=ast_sto_dp&th=1"
  },
  {
    id: 'Detailing Accessories',
    name: 'DETAIL GUARDZ The Microfiber and Foam Pad Cleaner Spray (6X 650ML)',
    slug: 'Detailing-Accessories',
    description: '',
    longDescription: 'Keep your lights crystal clear with our Headlight Protection Film. This specialized film protects expensive headlight and taillight assemblies from yellowing, hazing, and rock chips. The optically clear material maintains full light output while providing a barrier against UV damage and road debris.',
    price: null,
    category: 'Detailing-Accessories',
    image: 'https://m.media-amazon.com/images/I/8153MDtrc5L._AC_SY300_SX300_QL70_FMwebp_.jpg',
    images: ['/src/assets/product-ppf.jpg'],
    features: [
      'Optically clear',
      'Anti-yellowing',
      'UV blocking',
      'Easy removal',
      '5-year warranty'
    ],
    compatibility: ['Universal - headlights and taillights'],
    rating: 4.6,
    reviewCount: 234,
    inStock: true,
    url: "https://www.amazon.com/DETAIL-GUARDZ-Microfiber-Cleaner-Spray/dp/B08WT79STZ?ref_=ast_sto_dp"
  }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getProductsByCategory = (category: string) => products.filter(p => p.category === category);
