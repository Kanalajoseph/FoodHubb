/* ============================================
   The Tourist's Food Compass
   Mock Data — Zambian Food Culture
   No APIs or database connections used
   ============================================ */

// All Zambian dishes with full details
export const dishes = [
  {
    id: 1,
    name: 'Nshima',
    subtitle: 'The Heart of Zambian Cuisine',
    emoji: '🍚',
    description:
      'Nshima is the staple food of Zambia, made from finely ground maize (corn) flour. It is cooked into a thick porridge-like consistency and served with various relishes. No Zambian meal is complete without it.',
    culturalContext:
      'Nshima is more than food — it is a cultural cornerstone. It is eaten at nearly every meal, bringing families and communities together. Traditionally eaten with the right hand, the act of sharing Nshima symbolizes unity, hospitality, and respect.',
    category: ['staple', 'vegetarian'],
    tags: ['Staple', 'Traditional', 'Must Try'],
    ingredients: [
      'Maize flour (mealie meal)',
      'Water',
    ],
    prepTime: '25 min',
    difficulty: 'Easy',
    rating: 4.9,
    reviews: 342,
    restaurant: {
      name: 'Matebeto Restaurant',
      location: 'Lusaka, Zambia',
      address: 'Plot 4, Addis Ababa Drive, Lusaka',
      rating: 4.7,
    },
    gradient: 'from-maize-400 to-terracotta-400',
    bgColor: 'bg-maize-50',
  },
  {
    id: 2,
    name: 'Ifisashi',
    subtitle: 'Peanut & Greens Stew',
    emoji: '🥜',
    description:
      'Ifisashi is a rich, creamy stew made from ground peanuts (groundnuts) cooked with leafy green vegetables like pumpkin leaves, cassava leaves, or kale. It is one of Zambia\'s most beloved vegetarian dishes.',
    culturalContext:
      'Usually served at family gatherings and celebrations, Ifisashi represents the warmth of Zambian hospitality. The dish showcases the country\'s agricultural heritage — peanuts and greens are both abundantly grown across Zambia.',
    category: ['vegetarian', 'relish'],
    tags: ['Vegetarian', 'Protein-Rich', 'Family Favorite'],
    ingredients: [
      'Ground peanuts (groundnuts)',
      'Pumpkin leaves or kale',
      'Tomatoes',
      'Onions',
      'Salt',
    ],
    prepTime: '40 min',
    difficulty: 'Medium',
    rating: 4.8,
    reviews: 287,
    restaurant: {
      name: 'Matebeto Restaurant',
      location: 'Lusaka, Zambia',
      address: 'Plot 4, Addis Ababa Drive, Lusaka',
      rating: 4.7,
    },
    gradient: 'from-zambia-400 to-zambia-600',
    bgColor: 'bg-zambia-50',
  },
  {
    id: 3,
    name: 'Chikanda',
    subtitle: 'African Polony',
    emoji: '🫓',
    description:
      'Often called "African Polony," Chikanda is a unique Zambian delicacy made from wild orchid tubers, groundnuts, and chili. It has a firm, sausage-like texture and a distinctive earthy flavor.',
    culturalContext:
      'Chikanda is a specialty from Northern Zambia but is enjoyed nationwide. It reflects the incredible biodiversity of Zambian cuisine, using ingredients found in the wild forests. It is a popular snack and side dish at social events.',
    category: ['vegetarian', 'street food'],
    tags: ['Unique', 'Street Food', 'Vegetarian'],
    ingredients: [
      'Wild orchid tubers (chikanda)',
      'Ground peanuts',
      'Chili peppers',
      'Baking soda',
    ],
    prepTime: '1 hr 30 min',
    difficulty: 'Hard',
    rating: 4.6,
    reviews: 198,
    restaurant: {
      name: 'Zambezi Sun Restaurant',
      location: 'Livingstone, Zambia',
      address: 'Mosi-oa-Tunya Road, Livingstone',
      rating: 4.5,
    },
    gradient: 'from-earth-400 to-earth-600',
    bgColor: 'bg-earth-50',
  },
  {
    id: 4,
    name: 'Kapenta',
    subtitle: 'Dried Lake Sardines',
    emoji: '🐟',
    description:
      'Kapenta are tiny, dried sardine-like fish from Lake Kariba and Lake Tanganyika. They are fried or stewed with tomatoes and onions and served as a protein-rich relish alongside Nshima.',
    culturalContext:
      'Kapenta fishing is a major industry in Zambia, particularly around Lake Kariba. The sight of Kapenta rigs lighting up the lake at night is iconic. This humble fish is a dietary staple for millions, providing affordable, nutrient-dense protein.',
    category: ['fish', 'relish'],
    tags: ['Fish', 'Protein-Rich', 'Lake Kariba'],
    ingredients: [
      'Dried Kapenta fish',
      'Tomatoes',
      'Onions',
      'Cooking oil',
      'Salt',
    ],
    prepTime: '30 min',
    difficulty: 'Easy',
    rating: 4.5,
    reviews: 256,
    restaurant: {
      name: 'Choma House',
      location: 'Siavonga, Zambia',
      address: 'Lake Kariba Road, Siavonga',
      rating: 4.4,
    },
    gradient: 'from-terracotta-300 to-maize-400',
    bgColor: 'bg-terracotta-50',
  },
  {
    id: 5,
    name: 'Vitumbuwa',
    subtitle: 'Sweet Fried Fritters',
    emoji: '🍩',
    description:
      'Vitumbuwa are delicious fried dough balls — Zambia\'s version of doughnuts. Made from a simple batter of flour, sugar, and yeast, they are deep-fried until golden and crispy on the outside, soft on the inside.',
    culturalContext:
      'A beloved street food and breakfast treat, Vitumbuwa can be found at markets and roadside stalls across Zambia. They are perfect with a cup of tea and represent the simple, joyful side of Zambian food culture.',
    category: ['street food', 'snack'],
    tags: ['Street Food', 'Sweet', 'Breakfast'],
    ingredients: [
      'Flour',
      'Sugar',
      'Yeast',
      'Water',
      'Cooking oil (for frying)',
    ],
    prepTime: '45 min',
    difficulty: 'Easy',
    rating: 4.7,
    reviews: 312,
    restaurant: {
      name: 'Soweto Market Stalls',
      location: 'Lusaka, Zambia',
      address: 'Soweto Market, Lusaka',
      rating: 4.3,
    },
    gradient: 'from-maize-300 to-terracotta-300',
    bgColor: 'bg-maize-50',
  },
  {
    id: 6,
    name: 'Chibwantu',
    subtitle: 'Traditional Sweet Drink',
    emoji: '🥤',
    description:
      'Chibwantu is a traditional Zambian non-alcoholic beverage made from fermented maize meal and millet. It has a slightly sweet and tangy taste and is wonderfully refreshing.',
    culturalContext:
      'This nutritious drink has been enjoyed for generations across Zambia. It is often prepared for special occasions and is believed to have health benefits. It represents the ingenuity of traditional Zambian food preservation techniques.',
    category: ['drink'],
    tags: ['Drink', 'Traditional', 'Refreshing'],
    ingredients: [
      'Maize flour',
      'Millet flour',
      'Sugar',
      'Water',
    ],
    prepTime: '2 days (fermentation)',
    difficulty: 'Medium',
    rating: 4.4,
    reviews: 178,
    restaurant: {
      name: 'Traditional Kitchen',
      location: 'Kitwe, Zambia',
      address: 'Freedom Avenue, Kitwe',
      rating: 4.2,
    },
    gradient: 'from-zambia-300 to-maize-300',
    bgColor: 'bg-zambia-50',
  },
  {
    id: 7,
    name: 'Munkoyo',
    subtitle: 'Root-Brewed Refresher',
    emoji: '🍵',
    description:
      'Munkoyo is a popular traditional Zambian drink brewed from maize and the roots of the Munkoyo plant. It has a distinctive, mildly sweet and earthy flavor with natural probiotic benefits.',
    culturalContext:
      'Munkoyo is deeply rooted in Zambian tradition and is commonly shared during community events and celebrations. The Munkoyo roots are foraged from the wild, connecting this drink to Zambia\'s rich natural heritage.',
    category: ['drink'],
    tags: ['Drink', 'Probiotic', 'Heritage'],
    ingredients: [
      'Maize flour',
      'Munkoyo roots',
      'Water',
      'Sugar (optional)',
    ],
    prepTime: '1 day (brewing)',
    difficulty: 'Medium',
    rating: 4.3,
    reviews: 145,
    restaurant: {
      name: 'Mfuwe Lodge Restaurant',
      location: 'South Luangwa, Zambia',
      address: 'Mfuwe Area, South Luangwa National Park',
      rating: 4.8,
    },
    gradient: 'from-earth-300 to-zambia-400',
    bgColor: 'bg-earth-50',
  },
];

// Quick categories for the Home screen
export const categories = [
  {
    id: 'nshima',
    name: 'Nshima & Relishes',
    emoji: '🍚',
    description: 'The heart of every Zambian meal',
    gradient: 'from-terracotta-400 to-terracotta-600',
    filterTags: ['staple', 'relish'],
  },
  {
    id: 'street',
    name: 'Street Food',
    emoji: '🍢',
    description: 'Flavors from the bustling markets',
    gradient: 'from-maize-400 to-maize-600',
    filterTags: ['street food', 'snack'],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    emoji: '🥤',
    description: 'Traditional beverages & refreshers',
    gradient: 'from-zambia-400 to-zambia-600',
    filterTags: ['drink'],
  },
];

// Filter tags for the Explore screen
export const filterTags = [
  { id: 'all', label: 'All', icon: '🍽️' },
  { id: 'vegetarian', label: 'Vegetarian', icon: '🥬' },
  { id: 'meat', label: 'Meat', icon: '🥩' },
  { id: 'fish', label: 'Fish', icon: '🐟' },
  { id: 'street food', label: 'Street Food', icon: '🍢' },
  { id: 'drink', label: 'Drinks', icon: '🥤' },
];

// Cultural etiquette tips
export const etiquetteTips = [
  {
    id: 1,
    title: 'Hand-Washing Ritual',
    icon: '🫧',
    description:
      'Before eating Nshima, a basin of warm water (and sometimes soap) will be brought to you at the table. Wash your hands before and after the meal — this is both a hygienic practice and a sign of respect.',
  },
  {
    id: 2,
    title: 'Eat with Your Right Hand',
    icon: '🤚',
    description:
      'Nshima is traditionally eaten with the right hand. Take a small lump, roll it into a ball, press a small dip with your thumb, and use it to scoop up the relish.',
  },
  {
    id: 3,
    title: 'Share the Meal',
    icon: '🤝',
    description:
      'Zambian meals are communal. Food is often served in shared dishes placed at the center of the table. It is polite to eat from the side of the dish closest to you.',
  },
  {
    id: 4,
    title: 'Show Appreciation',
    icon: '🙏',
    description:
      'Complimenting the cook is a cherished tradition. A simple "Natotela" (thank you in Bemba) goes a long way!',
  },
];
