// Import images
const KetoDiet = "https://i.pinimg.com/736x/dd/a9/ce/dda9ce1475f5ad37176576476a427129.jpg";
const  Mediterranean = " https://i.pinimg.com/736x/66/de/a8/66dea841ff48aace6a60b4343f8acb8e.jpg";
const  Vegan = "https://i.pinimg.com/736x/9d/0e/d6/9d0ed63ec42ac1c6c94b78a7b0a32f51.jpg";
const Paleo  = "";
const  LowCarb = "";
const   Intermittent = "https://i.pinimg.com/736x/28/70/04/2870042d397de13b9371ac880700afe2.jpg";
const  Balanced = "";
const  Detox = "";



export const dietPlans = [
  {
    id: 'keto',
    name: "Keto Diet",
    type: "Low-Carb, High-Fat",
    difficulty: "Medium",
    duration: "2-12 weeks",
    description: "A low-carb, high-fat diet that puts your body into ketosis, burning fat for energy instead of carbs.",
    benefits: [
      "Rapid weight loss",
      "Improved mental focus",
      "Reduced blood sugar levels",
      "Increased energy"
    ],
    foods: {
      recommended: ["Avocados", "Cheese", "Meat/Fish", "Leafy greens", "Eggs", "Nuts/Seeds"],
      avoid: ["Grains", "Sugar", "Fruit (high sugar)", "Processed foods", "Starchy vegetables"]
    },
    sampleMealPlan: [
      { meal: "Breakfast", items: "Scrambled eggs with spinach and avocado" },
      { meal: "Lunch", items: "Grilled salmon with asparagus" },
      { meal: "Snack", items: "Handful of almonds" },
      { meal: "Dinner", items: "Steak with roasted Brussels sprouts" }
    ],
    image: KetoDiet,
    science: "Forces body to burn fats rather than carbohydrates by severely limiting carb intake to 20-50g per day.",
    suitableFor: ["Weight loss", "Type 2 diabetes management", "Epilepsy management"],
    rating: 4.5
  },
  {
    id: 'mediterranean',
    name: "Mediterranean Diet",
    type: "Balanced",
    difficulty: "Easy",
    duration: "Long-term",
    description: "Inspired by traditional eating patterns of Mediterranean countries, emphasizing whole foods and healthy fats.",
    benefits: [
      "Heart health",
      "Longevity",
      "Brain function",
      "Reduced inflammation"
    ],
    foods: {
      recommended: ["Olive oil", "Fish", "Whole grains", "Vegetables", "Legumes", "Nuts"],
      avoid: ["Processed meats", "Refined grains", "Added sugars", "Processed foods"]
    },
    sampleMealPlan: [
      { meal: "Breakfast", items: "Greek yogurt with honey and walnuts" },
      { meal: "Lunch", items: "Greek salad with feta and olives" },
      { meal: "Snack", items: "Hummus with vegetables" },
      { meal: "Dinner", items: "Grilled fish with quinoa and roasted vegetables" }
    ],
    image: Mediterranean,
    science: "Rich in monounsaturated fats, omega-3s, and antioxidants shown to reduce cardiovascular disease risk.",
    suitableFor: ["Heart health", "Sustainable weight loss", "Cognitive health"],
    rating: 4.8
  },
  // Additional diet plans with same structure
  {
    id: 'vegan',
    name: "Vegan Diet",
    type: "Plant-Based",
    difficulty: "Medium",
    duration: "Long-term",
    description: "Excludes all animal products, focusing on plant-based nutrition.",
    benefits: [
      "Lower cholesterol",
      "Reduced inflammation",
      "Environmental benefits",
      "Higher nutrient density"
    ],
    foods: {
      recommended: ["Legumes", "Whole grains", "Nuts/Seeds", "Fruits", "Vegetables", "Plant milks"],
      avoid: ["Meat", "Dairy", "Eggs", "Honey", "Animal-derived ingredients"]
    },
    sampleMealPlan: [
      { meal: "Breakfast", items: "Smoothie bowl with almond milk and chia seeds" },
      { meal: "Lunch", items: "Lentil curry with brown rice" },
      { meal: "Snack", items: "Roasted chickpeas" },
      { meal: "Dinner", items: "Tofu stir-fry with quinoa" }
    ],
    image: Vegan,
    science: "Associated with lower BMI, reduced risk of chronic diseases, and improved gut microbiome diversity.",
    suitableFor: ["Ethical eating", "Weight management", "Chronic disease prevention"],
    rating: 4.2
  },
  {
    id: 'intermittent',
    name: "Intermittent Fasting",
    type: "Eating Pattern",
    difficulty: "Hard",
    duration: "Long-term",
    description: "Cycles between periods of eating and fasting, focusing on when you eat rather than what you eat.",
    benefits: [
      "Weight loss",
      "Cellular repair",
      "Improved metabolism",
      "Longevity"
    ],
    methods: [
      { name: "16/8 Method", description: "Fast for 16 hours, eat within 8-hour window" },
      { name: "5:2 Diet", description: "Eat normally 5 days, restrict calories 2 days" },
      { name: "Eat-Stop-Eat", description: "24-hour fast once or twice weekly" }
    ],
    image: Intermittent,
    science: "Triggers autophagy (cellular cleanup), improves insulin sensitivity, and enhances fat burning.",
    suitableFor: ["Weight loss", "Metabolic health", "Simplifying eating habits"],
    rating: 4.3
  }
];

export const nutritionGuides = [
  {
    category: "Macronutrients",
    topics: [
      {
        title: "Proteins",
        description: "Building blocks for muscles and tissues",
        sources: ["Meat", "Fish", "Eggs", "Legumes", "Dairy"],
        dailyNeed: "0.8g per kg of body weight"
      },
      {
        title: "Carbohydrates",
        description: "Primary energy source for the body",
        sources: ["Whole grains", "Fruits", "Vegetables", "Legumes"],
        dailyNeed: "45-65% of total calories"
      }
    ]
  },
  {
    category: "Micronutrients",
    topics: [
      {
        title: "Vitamin D",
        description: "Essential for bone health and immunity",
        sources: ["Sunlight", "Fatty fish", "Fortified foods"],
        dailyNeed: "600-800 IU"
      },
      {
        title: "Iron",
        description: "Crucial for blood production",
        sources: ["Red meat", "Spinach", "Legumes", "Fortified cereals"],
        dailyNeed: "8-18 mg depending on age/gender"
      }
    ]
  }
];

export const dietTips = [
  "Stay hydrated - drink at least 2L of water daily",
  "Eat mindfully without distractions",
  "Plan meals ahead to avoid unhealthy choices",
  "Include protein in every meal for satiety",
  "Choose whole foods over processed options",
  "Don't skip breakfast - it kickstarts metabolism",
  "Read nutrition labels carefully",
  "Practice portion control",
  "Limit added sugars to <25g per day",
  "Include healthy fats like avocados and nuts"
];