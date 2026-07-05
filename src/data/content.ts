export const UNSPLASH = {
  luxuryBox: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  kraftMailer: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=800&q=80',
  rigidBox: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80',
  skincare: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80',
  subscription: 'https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=800&q=80',
  kraftDetail: 'https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800&q=80',
  flatLay: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80',
  candle: 'https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=800&q=80',
  customBox: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=800&q=80',
  workshop: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
  supplement: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80',
  foodArtisan: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
  blog1: 'https://images.unsplash.com/photo-1618354691229-88d47f285158?w=600&q=80',
  blog2: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&q=80',
  blog3: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&q=80',
  blog4: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
  blog5: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
  blog6: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
};

export interface Category {
  name: string;
  icon: string;
  slug: string;
  items: string[];
}

export const CATEGORIES: Category[] = [
  {
    name: 'Boxes',
    icon: 'box',
    slug: 'boxes',
    items: [
      'Custom Shipping Boxes', 'Corrugated Boxes', 'Mailer Boxes', 'Folding Carton Boxes',
      'Product Packaging Boxes', 'Retail Display Boxes', 'Rigid Boxes', 'Luxury Gift Boxes',
      'Magnetic Closure Boxes', 'Subscription Boxes', 'Pizza Boxes', 'Bakery Boxes',
      'Cosmetic Boxes', 'Pharmaceutical Boxes', 'Food Packaging Boxes', 'Electronic Product Boxes',
      'CBD Packaging Boxes', 'Kraft Boxes', 'Window Cut Boxes', 'Sleeve Boxes', 'Tuck End Boxes',
    ],
  },
  {
    name: 'Bags',
    icon: 'shopping-bag',
    slug: 'bags',
    items: [
      'Paper Shopping Bags', 'Kraft Paper Bags', 'Luxury Paper Bags', 'Gift Bags',
      'Custom Printed Poly Bags', 'Die-Cut Handle Bags', 'Rope Handle Bags', 'Reusable Tote Bags',
    ],
  },
  {
    name: 'Flexible Packaging',
    icon: 'package',
    slug: 'flexible',
    items: [
      'Stand-Up Pouches', 'Mylar Bags', 'Ziplock Pouches', 'Spout Pouches',
      'Vacuum Packaging Bags', 'Food Grade Pouches', 'Coffee Packaging Bags',
    ],
  },
  {
    name: 'Labels & Stickers',
    icon: 'tags',
    slug: 'labels',
    items: [
      'Product Labels', 'Roll Labels', 'Bottle Labels', 'Jar Labels', 'Cosmetic Labels',
      'Food Labels', 'Shipping Labels', 'Barcode Labels', 'QR Code Labels', 'Waterproof Labels',
      'Vinyl Stickers', 'Die-Cut Stickers', 'Kiss-Cut Stickers', 'Window Stickers',
      'Bumper Stickers', 'Holographic Stickers', 'Transparent Stickers',
    ],
  },
  {
    name: 'Marketing Materials',
    icon: 'file-text',
    slug: 'marketing',
    items: [
      'Business Cards', 'Premium Business Cards', 'Spot UV Business Cards', 'Metal Business Cards',
      'Flyers', 'Leaflets', 'Brochures', 'Catalogs', 'Booklets', 'Presentation Folders',
      'Postcards', 'Door Hangers', 'Rack Cards', 'Sell Sheets', 'Menus', 'Tent Cards',
    ],
  },
  {
    name: 'Large Format Printing',
    icon: 'layout',
    slug: 'large-format',
    items: [
      'Banners', 'Vinyl Banners', 'Mesh Banners', 'Retractable Roll-Up Banners',
      'X-Stand Banners', 'Backdrop Banners', 'Trade Show Displays', 'Event Signage',
      'Yard Signs', 'Real Estate Signs', 'Storefront Signs', 'Window Graphics',
      'Wall Graphics', 'Floor Graphics', 'Vehicle Wraps', 'Car Magnets',
    ],
  },
  {
    name: 'Promotional Products',
    icon: 'gift',
    slug: 'promotional',
    items: [
      'Custom Pens', 'Custom Mugs', 'Water Bottles', 'Keychains', 'USB Drives',
      'Notebooks', 'Mouse Pads', 'Tote Bags', 'T-Shirts', 'Polo Shirts',
      'Hoodies', 'Caps', 'Lanyards', 'Wristbands',
    ],
  },
  {
    name: 'Office & Corporate Printing',
    icon: 'briefcase',
    slug: 'office',
    items: [
      'Letterheads', 'Envelopes', 'Invoice Books', 'Receipt Books', 'NCR Forms',
      'Presentation Folders', 'Corporate Stationery Sets', 'Employee ID Cards',
      'Certificates', 'Training Manuals',
    ],
  },
  {
    name: 'Restaurant & Food Printing',
    icon: 'utensils',
    slug: 'restaurant',
    items: [
      'Restaurant Menus', 'Takeaway Menus', 'Food Packaging', 'Pizza Boxes',
      'Burger Boxes', 'Food Trays', 'Cup Sleeves', 'Coffee Cups',
      'Food Labels', 'Restaurant Table Tents',
    ],
  },
  {
    name: 'Event & Wedding Printing',
    icon: 'calendar',
    slug: 'events',
    items: [
      'Wedding Invitations', 'Save the Date Cards', 'RSVP Cards', 'Event Tickets',
      'Event Badges', 'Programs', 'Table Cards', 'Name Tags',
    ],
  },
  {
    name: 'Specialty Printing',
    icon: 'sparkles',
    slug: 'specialty',
    items: [
      'Foil Stamping', 'Embossing', 'Debossing', 'Spot UV Printing',
      'Soft Touch Lamination', 'Matte Lamination', 'Gloss Lamination',
      'Holographic Printing', 'UV Coating', 'Metallic Printing',
    ],
  },
  {
    name: 'Custom Solutions',
    icon: 'layers',
    slug: 'custom',
    items: [
      'Private Label Packaging', 'E-commerce Packaging', 'Amazon FBA Packaging',
      'Subscription Box Packaging', 'Retail Packaging Solutions', 'Product Launch Kits',
      'Custom Branding Packages', 'Prototype Packaging', 'Short Run Printing',
      'Bulk Commercial Printing',
    ],
  },
];

// Legacy — kept for any component still referencing SERVICE_ITEMS
export const SERVICE_ITEMS = CATEGORIES.slice(0, 6).map((c) => ({
  name: c.name,
  description: c.items.slice(0, 2).join(', '),
  icon: c.icon,
}));
