export const sellers = [
  {
    id: 1,
    slug: 'maria-silva',
    name: 'Maria Silva',
    avatar: '👩‍🎨',
    location: 'Porto, Portugal',
    specialty: 'Ceramic Artist',
    bio: [
      'Maria Silva is a talented ceramic artist based in Porto, Portugal, with over a decade of experience creating unique, handcrafted pottery. Her passion for ceramics began as a childhood fascination with clay and has evolved into a dedicated craft that merges traditional Portuguese techniques with contemporary design.',
      'Each piece is carefully handmade using locally-sourced, sustainable materials. Maria\'s work is characterized by organic forms, earthy glazes, and a deep respect for the natural world. Her studio, nestled in the hills outside Porto, serves as both workspace and inspiration, surrounded by the landscapes that influence her designs.',
      'Maria believes in slow, mindful creation and the importance of supporting local artisans. Every purchase directly supports her small studio and helps preserve traditional Portuguese pottery techniques for future generations.'
    ],
    stats: {
      products: 42,
      rating: 4.8,
      reviews: 287,
      memberSince: 2019
    },
    gradient: 'linear-gradient(135deg, #8B7355 0%, #C2956E 100%)'
  },
  {
    id: 2,
    slug: 'john-anderson',
    name: 'John Anderson',
    avatar: '👨‍🎨',
    location: 'Austin, Texas',
    specialty: 'Woodworker',
    bio: [
      'John Anderson is a master woodworker specializing in handcrafted furniture and home decor. With 15 years of experience, he creates timeless pieces that blend functionality with artistic expression.',
      'Working primarily with reclaimed wood, John gives new life to materials that would otherwise be discarded. His workshop in Austin is a testament to sustainable craftsmanship.',
      'Each piece tells a story, combining traditional joinery techniques with modern design sensibilities.'
    ],
    stats: {
      products: 28,
      rating: 4.9,
      reviews: 156,
      memberSince: 2018
    },
    gradient: 'linear-gradient(135deg, #6B5B4D 0%, #8B7355 100%)'
  }
];

export const reviews = [
  {
    id: 1,
    sellerId: 1,
    reviewer: 'Sarah Johnson',
    avatar: 'SJ',
    date: '2 weeks ago',
    rating: 5,
    text: 'Absolutely beautiful ceramic vase! The craftsmanship is exceptional, and you can really feel the quality in every detail. Maria\'s work is truly special, and I love having this piece in my home. Shipping was fast and the packaging ensured it arrived perfectly. Highly recommend!'
  },
  {
    id: 2,
    sellerId: 1,
    reviewer: 'Thomas Martinez',
    avatar: 'TM',
    date: '1 month ago',
    rating: 5,
    text: 'The teapot set exceeded my expectations! Each piece is unique and beautifully made. Maria\'s attention to detail is evident, and the customer service was excellent. This makes a perfect gift, and I\'ve already ordered more items for friends.'
  },
  {
    id: 3,
    sellerId: 1,
    reviewer: 'Emma Lopez',
    avatar: 'EL',
    date: '2 months ago',
    rating: 4,
    text: 'Love my new coffee mugs! They\'re the perfect size and weight, and the glaze is gorgeous. My only minor note is they took slightly longer to arrive than expected, but the wait was worth it. These are now my favorite mugs!'
  }
];
