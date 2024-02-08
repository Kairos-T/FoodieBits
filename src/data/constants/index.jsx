// Navbar Links
// By: Kairos
export const navbarLinks = [
  { href: "/", label: "Home" },
  { href: "/cuisines", label: "Cuisines" },
  { href: "/recipes", label: "Recipes" },
  { href: "/restaurants", label: "Restaurants" },
  { href: "/contact", label: "Contact" }
];

// Home page data (about company content)
// By: Ruby
export const data = [
  {
    title: "History",
    description:
      "Fueled by their love for cooking and savoring diverse cuisines, FoodieBits in the brainchild of 2 brothers in 2007 who transformed their humble kitchen experiments into an online sensation. What began as a simple desire to share their gastronomic adventures evolved into a vibrant hub for reputable and reliable recipes as well as trustworthy food reviews.",
    image: "/images/about/brothers.jpg"
  },
  {
    title: "Promise",
    description:
      "All our recipes are tried and tested in multiple kitchens, by multiple people - from professional chefs to homecooks to ensure YOU get the best. FoodieBits reviews are always authentic and we do not accept monetary compensation for our reviews. In fact, almost 90% of the reviews written are from anonymous visits and we will always declare at the bottom of our articles if it was done undercover, in partnership with or as part of a media tasting.",
    image: "/images/about/turtle.jpg"
  },
  {
    title: "Growth",
    description:
      "From those early days of culinary curiosity, FoodieBits has blossomed into a thriving community of food enthusiasts - becoming a go-to destination for those seeking delightful recipes and genuine insights into the local food scene. Over the years, we've expanded our team, welcoming diverse voices and experiences. As we continue to evolve, our commitment remains unchanged to share the joy of good food and foster culinary exploration.",
    image: "/images/about/staff.jpg"
  }
];

// FAQs
// By: Kairos
const faqData = [
  {
    question: "What is FoodieBits?",
    answer: "FoodieBits is a platform dedicated to exploring and celebrating various cuisines, recipes, and restaurants. We aim to provide a diverse culinary experience for food enthusiasts or just the average person looking for a new place to eat."
  },
  {
    question: "Are the recipes on FoodieBits tested and verified?",
    answer: "Yes, our team ensures that recipes undergo testing before being featured. Each recipe is tested in multiple kitchens, and by multiple people - from professionals to homecooks to ensure their quality. However, individual preferences may vary, so feel free to adjust ingredients and cooking times to suit your taste."
  },
  {
    question: "Do you have a mobile app?",
    answer: "Currently, we do not have a dedicated mobile app. However, our website is designed to be mobile-friendly and accessible from your mobile browser."
  },
  {
    question: "How can I report a problem or provide feedback?",
    answer: "If you encounter any issues or have suggestions for improvement, please use the contact form under Contact tab to get in-touch with us. We appreciate your feedback and look forward to improving FoodieBits!"
  },
  {
    question: "Can I request specific types of recipes or cuisines?",
    answer: "Certainly! We want FoodieBits to be able to cater to all types of people with a diverse array of tastes. Please submit your requests via the contact form in the contact tab, or email us at info@foodiebits.com!"
  },
  {
    question: "Can I submit my own recipes to be added to FoodieBits?",
    answer: "Yes, you can! We are always looking to expand our recipe collection, you can reach us via the contact form in the contact tab, or email us at info@foodiebits.com!"
  }
];

export default faqData;

// Footer data
// By: Bowen & Ruby

export const footerData = [
  {
    label: "About",
    href: "/",
    links: [
      { label: "Our Profile", href: "/#About" },
      { label: "FAQ", href: "/#FAQ" }
    ]
  },
  {
    label: "Recipes",
    href: "/recipes",
    links: [
      { label: "Browse", href: "/recipes" },
      { label: "Suggest", href: "/contact" },
    ]
  },
  {
    label: "Restaurants",
    href: "/restaurants",
    links: [
      { label: "Find", href: "/restaurants" },
      { label: "Recommend", href: "/contact" },
    ]
  },
  {
    label: "Social",
    href: "/contact",
    links: [
      { label: "Youtube", href: "https://www.youtube.com/@buzzfeedtasty" },
      { label: "Instagram", href: "https://www.instagram.com/dennistheprescott/" },
      { label: "Github", href: "https://github.com/Kairos-T/FoodieBits" }
    ]
  }
];


// Restaurant data
// By: Bowen
// placeId taken from: https://developers.google.com/maps/documentation/places/web-service/place-id
export const restaurantData = [{
  title: "La Dame de Pic",
  location: "City Hall",
  descriptions: ["A superlative dining experience by acclaimed chef Anne-Sophie Pic's Asia in Raffles Hotel Singapore with exquisite edible depictions of her hometown in Valence.", "Newly appointed chef de cuisine Alexandre Alves Pereira strings together the locale’s finest Asian flavours and herbs with beautiful florals while remaining rooted in French techniques. And no meal at La Dame de Pic is complete without Chef Anne-Sophie Pic’s signature Les Berlingots where each exquisite pyramid-shaped pasta parcel holds the season’s bounties."],
  images: ["https://axwwgrkdco.cloudimg.io/v7/__gmpics__/ba314b55a2024a71bc41194fd95b3318", "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a4bb8bb755b741ea861f4cd1660cd515", "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5f1b08485a1d4a22a41e86635b8ff951", "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/6d2620afc12a4aaa9891c8635ec7bf47"],
  placeId: "ChIJtT96xf4Z2jERiG7wNClHeAY"
}, {
  title: "Path",
  location: "Marina Bay",
  descriptions: ["A modern Asian restaurant that serves up comforting yet refined compositions of East Asian flavours expressed through French fine-dining techniques and presentations.", "Dining at Path is a rather transformative culinary experience. Creativity, flavour mastery and decadence – these themes anchor the current series of not-so-small plates that tastefully features luxe ingredients. Know that you won't walk out having to need another stop at a fast food restaurant.", "Don't sleep on an irrefutable order of Marvas' steamed deep-sea fish maw. Each firm yet gelatinous sliver is doused with a velvety beurre blanc perfumed with fermented black bean, garlic and sake."],
  images: ["https://pathrestaurant.com.sg/wp-content/uploads/2023/10/Path-Web_1.jpg", "https://pathrestaurant.com.sg/wp-content/uploads/2023/10/Path-Web_2-1200x800.jpg", "https://pathrestaurant.com.sg/wp-content/uploads/2023/10/Path-Web_3-1200x800.jpg"],
  placeId: "ChIJpXP0eYAZ2jEReM0l4h0xDH4"
}, {
  title: "Osteria Mozza",
  location: "Orchard Road",
  descriptions: ["American celebrity Chef Nancy Silverton's Cal-Italian dining concept that has her iconic mozzarella bar.", "It almost feels like a casual day trip to Los Angeles. During lunch, she serves up her famous wood-fired pizzas in lip-smacking fashion. Come nightfall, dishes are nodes to classics that first rocketed Osteria Mozza into the dining sphere. Don't sleep on her deconstructed Nancy’s Caesar ($23) and her inimitable fennel-laced Orecchiette ($32).", "PS: Don't come to dinner expecting pizzas, they are lunch exclusives."],
  images: ["https://media.timeout.com/images/105904123/1372/772/image.webp", "https://media.timeout.com/images/105904130/1372/772/image.webp", "https://media.timeout.com/images/105904118/1372/772/image.webp", "https://media.timeout.com/images/105904119/1372/772/image.webp"],
  placeId: "ChIJLXhQg6UZ2jER_QGp15ggBTY"
}, {
  title: "Birds of a Feather",
  location: "Chinatown",
  descriptions: ["Western dishes get a Sichuan twist at Birds of a Feather. Inspired by the laid-back teahouses of Chengdu, the café tastefully makes use of lush greenery and eclectic design pieces to create a space you won't mind unwinding at from morning 'til late.", "The menu spices up classic Sichuan dishes to present them in a new light. Slurp up the oriental bolognaise ($25), tossed in a pork ragout-style sauce with sakura ebi; or Spicy Good Slime Shine ($25), which is much more appetising than it sounds. Slippery yam noodles are suspended in a tongue-tingling soup broth bursting with spice and umami.", "Gather the flock and split its larger-format plates. Dried Angus OP rib ($20/100g) is first aged for over 40 days, then seasoned with Sichuan pepper salt before hitting the sizzling grill; or try the braised pork belly ($58), where ingredients are stewed in a claypot with chilli bean paste till fork-tender.", "And should the heat prove too intense, cool down with Asian-influenced tipples that include the baijiu-based Lucky Red ($32) and osmanthus tequila sour ($23)"],
  images: ["https://media.timeout.com/images/105828312/1372/772/image.webp", "https://media.timeout.com/images/103635088/1372/772/image.webp"],
  placeId: "ChIJcTm7VAwZ2jERKhEYYOyi754"
}, {
  title: "Luke's Oyster Bar & Chop House",
  location: "Chinatown",
  descriptions: ["This Travis Masiero-owned joint is your traditional American chophouse: it specialises in lots of meat and some stellar seafood. If you’re in the mood for the former, try the bone-in tenderloin au poivre, served with peppercorn crust and mustard cognac jus ($82) or the blue label burger ($32). But ends up as your main, make sure you start with a tray of Luke’s oysters, sourced from chef Masiero’s hometown of Boston. Going for $96 for a dozen and $48 for six, the molluscs range from the mildly briny Onset to the rich Bar Harbor."],
  images: ["https://media.timeout.com/images/103491650/1372/772/image.webp", "https://media.timeout.com/images/103491651/1372/772/image.webp", "https://media.timeout.com/images/103491652/1372/772/image.webp", "https://media.timeout.com/images/103491653/1372/772/image.webp"],
  placeId: "ChIJ-bpG_AwZ2jERskkgk4_Fwr8"
}, {
  title: "Terra Tokyo Italian",
  location: "Tanjong Pagar",
  descriptions: ["No two meals at Terra are exactly the same – even though you can request for your favourite dishes in advance. The sea urchin spaghetti and oven-baked Hokkaido scallop are mainstays, but if you enjoy an element of surprise, just leave it to chef-owner Seita Nakahara to decide. Not to be confused with fusion food – what's on the menu here is an appreciation of Japanese food culture (shokubunka) in Italian cuisine and culinary traditions. Chef Seita regularly travels to Japan to source for new ingredients, establishing close relationships with his suppliers to get the best quality of ingredients which he uses in omakase sets ($168/$208/$308) that change seasonally. Lunch is also available from $48."],
  images: ["https://media.timeout.com/images/105273974/1372/772/image.webp"],
  placeId: "ChIJH8QyMG0Z2jERlvBEI9CfCXw"
}, {
  title: "Restaurant Ibid",
  location: "Raffles Place",
  descriptions: ["Woo Wai Leong could have been a lawyer. But he chose not to. He could have cashed in on his MasterChef Asia fame when he won the competition. But he chose not to. He could have opened a restaurant when investors came knocking. But he chose not to.", "It’s our choices that define us – and we think Woo’s say a lot about the man behind Restaurant Ibid. The autodidact chef has a lot to prove. It’s been three years since he took the MasterChef crown but the pressure to live up to expectations has not subsided. He’s taken the criticisms and the doubts in his stride, biding his time, honing his craft, assembling a talented team he can count on and making sure the restaurant is in it for the long haul. Having finally sampled his food, we can say that his slow and steady approach has paid off.", "Restaurant Ibid’s story first starts with its name. Anyone familiar with writing a thesis would recognise the word ibid, which means in the same source. It’s meant to highlight Leong’s roots as a Singaporean Chinese man and his Nanyang identity – a phrase borrowed from the realm of art where Singaporean painters like Liu Kang and Georgette Chen blended Western and Eastern painting traditions to create something uniquely their own. It’s part of a spiel that’s given to us ad verbatim as we dine, and while we appreciate the philosophy of the cuisine, the overall execution of dishes matters more than the story, as colourful as it may be.", "Thankfully, the food isn’t as contrived as the lecture. Priced at $78 for four courses, $88 for six and $118 for eight, the dinner highlights playful twists on childhood favourites with touches influenced by traditional Chinese medicine. Our meal starts with a doughy shao bing stuffed with spring onions and mozzarella cheese that’s so good, we forget to smear on the whipped butter it’s served with.", "Taking comfort food to the next level is the white radish porridge with bamboo shoots and century egg. Every bite yields to a different flavour or textural element and leaves us wanting to put on our best Oliver Twist impression. Between having fish or beef as a main, opt for the short rib – Woo’s signature dish that’s seen many iterations at the pop-ups he’s done leading up to the opening of Restaurant Ibid. Served with black garlic, black fungus and angelica root, the tender beef is neither bitter and heavy – and the sweetness of the Chinese pear and tinge of vinegar in the fungus help lift and balance the unctuous beef.", "Peppered with friendly service from the man himself – who makes a point to interact with every table – the meal felt less like a painful lesson on new wave Nanyang culture and more like an enthusiastic exchange of food and love of local flavours we’d gladly pay for again."],
  images: ["https://media.timeout.com/images/105277713/1372/772/image.webp", "https://media.timeout.com/images/105277712/1372/772/image.webp", "https://media.timeout.com/images/105277708/1372/772/image.webp"],
  placeId: "ChIJzUZNrgsZ2jER2epSYaG6Gyg"
}, {
  title: "Summer Pavilion",
  location: "City Hall",
  descriptions: ["Helmed by chef Cheung Siu Kong, who has honing his craft in the same kitchen since 2003, Summer Pavilion is the only Chinese hotel restaurant to receive a star in the Michelin Guide Singapore 2016. And for good reason.", "To try the best of everything, go for the set lunch and dinner menus (from $88). They feature some of Cheung’s signature dishes, such as barbecued Iberico pork with honey sauce, and marinated South African abalone with roasted sesame dressing. If we had to pick, our favourites are the double-boiled sea whelk soup with fish maw and chicken, served in a whole coconut, and poached rice with lobster and diced Japanese wagyu beef.", "Following an extensive transformation in late 2015, the restaurant has been given a brand new contemporary Chinese look and the spacious main dining seats 119, with six elegant private dining rooms catering to groups from six to 30."],
  images: ["https://media.timeout.com/images/103687060/1372/772/image.webp", "https://media.timeout.com/images/103687057/1372/772/image.webp", "https://media.timeout.com/images/103687056/1372/772/image.webp"],
  placeId: "ChIJhyAGsKkZ2jERMy2EGAnyv4k"
}];

// Wayne Constants Section
export const entries = [
  { color: 0xcc8b3a, height: 1 },
  { color: 0x563071, height: 2 },
  { color: 0x3c4b6e, height: 4 },
  { color: 0x8f221f, height: 8 }
];
export const cuisineCoords = [
  { // China
    region: {
      name: "China",
      NS: 35.8617,
      EW: 104.1954
    },
    location: [
      { name: "Guangdong",
        NS: 22.379032,
        EW: 110.763283, },
      { name: "Fujian",
        NS: 25.924480,
        EW: 118.278992 },
      { name: "Hunan",
        NS: 28.228001,
        EW: 112.939003 },
      { name: "Jiangsu",
        NS: 33.140171,
        EW: 119.788925},
      { name: "Shandong",
        NS: 37.80060640,
        EW: 122.26999180 },
      { name: "Sichuan",
        NS: 31.456781,
        EW: 102.843018},
      { name: "Zhejiang",
        NS: 29.14164320,
        EW: 119.78892480, },
      { name: "Hong Kong",
        NS: 22.396427,
        EW: 114.109497, }
    ]},
  { // SEA
    region: {
      name: "South East Asia",
      NS: -2.2180,
      EW: 115.6628 },
    location: [
      { name: "Singapore",
        NS: 1.3521,
        EW: 103.8198 },
      { name: "Malaysia",
        NS: 4.2105,
        EW: 101.9758, }
    ]},
  { // West
    region: {
      name: "USA",
      NS: 37.0902,
      EW: 275.7129 },
    location: [
      { name: "New York",
        NS: 40.7128,
        EW: -74.0060 }
    ]},
  { // Europe
    region: {
      name: "Europe",
      NS: 54.5260,
      EW: 15.2551 },
    location: [
      { name: "England",
        NS: 52.3555,
        EW: 359.82421875 },
      { name: "France",
        NS: 46.2276,
        EW: 2.2137 }
    ]
  }
]

export const sceneColor = {
  // Background, Material
  light: ["#edf2f7", "#63B3ED"],
  dark: ["#1a202c", "#4FD1C5"]
};

export const cuisineContent = [
  { // China
    region: {
      name: "China",
      content: "",
      funFact: [""]
    },
    location: [
      { name: "Guangdong",
        content: "",
        funFact: [""] },
      { name: "Fujian",
        content: "",
        funFact: [""] },
      { name: "Hunan",
        content: "",
        funFact: [""] },
      { name: "Jiangsu",
        content: "",
        funFact: [""]},
      { name: "Shandong",
        content: "",
        funFact: [""] },
      { name: "Sichuan",
        content: "",
        funFact: [""]},
      { name: "Zhejiang",
        content: "",
        funFact: [""] },
      { name: "Hong Kong",
        content: "",
        funFact: [""] }
    ]},
  { // SEA
    region: {
      name: "South East Asia",
      content: "",
      funFact: [""] },
    location: [
      { name: "Singapore",
        content: "",
        funFact: [""] },
      { name: "Malaysia",
        content: "",
        funFact: [""] }
    ]},
  { // West
    region: {
      name: "USA",
      content: "",
      funFact: [""] },
    location: [
      { name: "New York",
        content: "",
        funFact: [""] }
    ]},
  { // Europe
    region: {
      name: "Europe",
      content: "",
      funFact: [""] },
    location: [
      { name: "England",
        content: "",
        funFact: [""] },
      { name: "France",
        content: "",
        funFact: [""] }
    ]
  }
]
