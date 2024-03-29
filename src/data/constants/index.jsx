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
      { label: "Suggest", href: "/contact" }
    ]
  },
  {
    label: "Restaurants",
    href: "/restaurants",
    links: [
      { label: "Find", href: "/restaurants" },
      { label: "Recommend", href: "/contact" }
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
      {
        name: "Guangdong",
        NS: 22.379032,
        EW: 110.763283
      },
      {
        name: "Fujian",
        NS: 25.924480,
        EW: 118.278992
      },
      {
        name: "Hunan",
        NS: 28.228001,
        EW: 112.939003
      },
      {
        name: "Jiangsu",
        NS: 33.140171,
        EW: 119.788925
      },
      {
        name: "Shandong",
        NS: 37.80060640,
        EW: 122.26999180
      },
      {
        name: "Sichuan",
        NS: 31.456781,
        EW: 102.843018
      },
      {
        name: "Zhejiang",
        NS: 29.14164320,
        EW: 119.78892480
      },
      {
        name: "Hong Kong",
        NS: 22.396427,
        EW: 114.109497
      }
    ]
  },
  { // SEA
    region: {
      name: "South East Asia",
      NS: -2.2180,
      EW: 115.6628
    },
    location: [
      {
        name: "Singapore",
        NS: 1.3521,
        EW: 103.8198
      },
      {
        name: "Malaysia",
        NS: 4.2105,
        EW: 101.9758
      }
    ]
  },
  { // West
    region: {
      name: "USA",
      NS: 37.0902,
      EW: 275.7129
    },
    location: [
      {
        name: "New York",
        NS: 40.7128,
        EW: -74.0060
      }
    ]
  },
  { // Europe
    region: {
      name: "Europe",
      NS: 54.5260,
      EW: 15.2551
    },
    location: [
      {
        name: "England",
        NS: 52.3555,
        EW: 359.82421875
      },
      {
        name: "France",
        NS: 46.2276,
        EW: 2.2137
      }
    ]
  }
];

export const sceneColor = {
  // Background, Material
  light: ["#edf2f7", "#63B3ED"],
  dark: ["#1a202c", "#4FD1C5"]
};

export const cuisineContent = [
  { // China
    region: {
      name: "China",
      content: "China, being one of the world's oldest civilizations, boasts a rich culinary heritage that varies widely across its vast territory.\n" +
        "The country's diverse geography, climate, history, and cultural influences have contributed to the development of numerous regional cuisines, each with its own distinct flavors, ingredients, cooking techniques, and culinary traditions.",
      funFact: [""]
    },
    location: [
      {
        name: "Guangdong",
        content: "Cantonese cuisine is one of the most well-known Chinese cuisines internationally.\n" +
          "Characterized by fresh ingredients, subtle flavors, and meticulous preparation methods.\n" +
          "Steaming, stir-frying, and deep-frying are common cooking techniques.\n" +
          "Dishes often feature seafood, poultry, pork, and vegetables.\n" +
          "Dim sum, a style of small, bite-sized dishes, is a popular aspect of Cantonese cuisine.",
        funFact: [""]
      },
      {
        name: "Fujian",
        content: "Fujian cuisine emphasizes the use of seafood, poultry, and mushrooms.\n" +
          "Known for its clear, fresh, and slightly sweet flavors.\n" +
          "Utilizes various cooking techniques including steaming, stewing, braising, and stir-frying.\n" +
          "Dishes often incorporate ingredients like bamboo shoots, mushrooms, and seafood.",
        funFact: [""]
      },
      {
        name: "Hunan",
        content: "Similar to Sichuan cuisine in its use of spicy flavors, but tends to be hotter and oilier.\n" +
          "Utilizes a wide variety of ingredients, including pork, beef, poultry, and tofu.\n" +
          "Known for its liberal use of chili peppers and garlic.\n" +
          "Famous dishes include \"Dong'an chicken\" and \"Chairman Mao's red-braised pork.\"",
        funFact: [""]
      },
      {
        name: "Jiangsu",
        content: "Jiangsu cuisine is known for its delicacy, elegance, and artistic presentation.\n" +
          "Features freshwater fish, crustaceans, and vegetables.\n" +
          "Braising and stewing are common cooking methods.\n" +
          "Famous dishes include \"Lion's Head\" meatballs and \"Beggar's Chicken,\" which is marinated and wrapped in lotus leaves before being baked.",
        funFact: [""]
      },
      {
        name: "Shandong",
        content: "Shandong cuisine is characterized by its emphasis on seafood and simple, savory flavors.\n" +
          "Reflects a strong influence from Confucian philosophy, emphasizing freshness, purity, and natural flavors.\n" +
          "Common cooking techniques include braising, stir-frying, and deep-frying.\n" +
          "Shandong is famous for its seafood dishes, particularly braised abalone and sea cucumber.",
        funFact: [""]
      },
      {
        name: "Sichuan",
        content: "Known for its bold, spicy, and flavorful dishes.\n" +
          "The use of Sichuan peppercorns and chili peppers gives the cuisine its distinctive numbing and spicy sensation.\n" +
          "Common ingredients include garlic, ginger, peanuts, and various pickled vegetables.\n" +
          "Famous dishes include Mapo tofu, Kung Pao chicken, and Sichuan hot pot.",
        funFact: [""]
      },
      {
        name: "Zhejiang",
        content: "Zhejiang Cuisine (Zhe Cuisine):\n" +
          "\n" +
          "Zhejiang cuisine hails from the Zhejiang province in eastern China, known for its lush landscapes and access to fresh ingredients from both the sea and land.\n" +
          "Often praised for its freshness, tenderness, softness, and mellow fragrance.\n" +
          "Features a balance of flavors, with an emphasis on lightness and delicacy.\n" +
          "Cooking techniques include stir-frying, steaming, braising, and simmering.\n" +
          "Notable dishes include:\n" +
          "Dongpo Pork: A braised pork belly dish with a history dating back to the Song Dynasty, named after the famous poet and politician Su Dongpo.\n" +
          "West Lake Vinegar Fish: A freshwater fish dish cooked with Zhejiang vinegar, ginger, sugar, and soy sauce, named after Hangzhou's picturesque West Lake.\n" +
          "Longjing Shrimp: Shrimp stir-fried with Longjing tea leaves, known for its fresh and delicate taste.",
        funFact: [""]
      },
      {
        name: "Hong Kong",
        content: "Hong Kong cuisine is a fusion of Cantonese, British, and Western influences, reflecting the city's unique history and cosmopolitan nature.\n" +
          "Characterized by its wide variety of dishes, from traditional Cantonese dim sum to international cuisines.\n" +
          "Known for its high-quality ingredients, sophisticated cooking techniques, and attention to detail.\n" +
          "Reflects a balance of flavors, textures, and colors.\n" +
          "Dim sum is a popular aspect of Hong Kong cuisine, with a wide range of steamed, fried, and baked dumplings, buns, and pastries.\n" +
          "Notable dishes include:\n" +
          "Roast Goose: Succulent and crispy roasted goose served with plum sauce.\n" +
          "Dim Sum: Various small dishes served in bamboo steamers or on small plates, including dumplings, buns, rice rolls, and pastries.\n" +
          "Char Siu: Barbecued pork with a sweet and savory marinade, often served with rice or noodles.\n" +
          "Wonton Noodle Soup: Egg noodles served in a clear broth with wontons filled with shrimp or pork.",
        funFact: [""]
      }
    ]
  },
  { // SEA
    region: {
      name: "South East Asia",
      content: "",
      funFact: [""]
    },
    location: [
      {
        name: "Singapore",
        content: "Singaporean cuisine is a melting pot of flavors and culinary traditions from various ethnic groups. Here are some key aspects:\n" +
          "\n" +
          "Hawker Culture: Singapore is famous for its hawker centers, which are bustling open-air food courts offering a wide variety of affordable and delicious dishes. Hawker centers are where locals and tourists alike enjoy authentic Singaporean food.\n" +
          "\n" +
          "Peranakan Influence: Peranakan cuisine, also known as Nyonya or Straits Chinese cuisine, is a significant influence in Singaporean food. It combines Chinese, Malay, and Indonesian flavors and techniques. Dishes like Laksa (spicy noodle soup), Ayam Buah Keluak (chicken with black nuts), and Kueh (traditional desserts) are Peranakan specialties.\n" +
          "\n" +
          "Chili Crab: Perhaps Singapore's most iconic dish, chili crab features a succulent crab cooked in a spicy tomato and chili sauce. It's typically served with mantou (fried buns) for dipping.\n" +
          "\n" +
          "Hainanese Chicken Rice: This dish consists of poached chicken served with fragrant rice cooked in chicken broth, accompanied by chili sauce and ginger paste. It's a beloved comfort food in Singapore.\n" +
          "\n" +
          "Satay: Satay is a popular street food featuring skewered and grilled meat (often chicken, beef, or lamb) served with a flavorful peanut sauce.\n" +
          "\n" +
          "Roti Prata: A type of Indian-influenced flatbread, roti prata is crispy on the outside and fluffy on the inside, often served with curry.",
        funFact: [""]
      },
      {
        name: "Malaysia",
        content: "Malaysian cuisine is a reflection of the country's multicultural heritage, with influences from Malay, Chinese, Indian, and indigenous culinary traditions. Here are some highlights:\n" +
          "\n" +
          "Nasi Lemak: Often considered Malaysia's national dish, nasi lemak consists of fragrant rice cooked in coconut milk, served with anchovies, peanuts, boiled egg, cucumber slices, and spicy sambal sauce.\n" +
          "\n" +
          "Laksa: There are various types of laksa in Malaysia, but they generally consist of noodles in a spicy and aromatic coconut-based broth, often with ingredients like shrimp, chicken, or tofu.\n" +
          "\n" +
          "Roti Canai: Similar to Singapore's roti prata, roti canai is a type of Indian-influenced flatbread served with curry sauce.\n" +
          "\n" +
          "Satay: Satay is also popular in Malaysia, particularly among the Malay community. It's often served with a peanut sauce, cucumbers, and rice cakes.\n" +
          "\n" +
          "Char Kway Teow: A flavorful stir-fried noodle dish made with flat rice noodles, prawns, cockles, Chinese lap cheong (sausage), eggs, bean sprouts, and chives, cooked in a dark soy sauce.\n" +
          "\n" +
          "Rendang: Originating from the Minangkabau ethnic group of Indonesia, rendang is a rich and aromatic dry curry made with beef, coconut milk, and a blend of spices.",
        funFact: [""]
      }
    ]
  },
  { // West
    region: {
      name: "USA",
      content: "",
      funFact: [""]
    },
    location: [
      {
        name: "New York",
        content: "New York City, in particular, is a culinary mecca known for its diverse and eclectic food scene. Here are some highlights:\n" +
          "\n" +
          "Pizza: New York-style pizza is iconic, characterized by its thin crust, foldable slices, and generous toppings. Pizzerias throughout the city serve up classic pies as well as creative variations.\n" +
          "\n" +
          "Bagels and Deli Sandwiches: New York is famous for its bagels, which are boiled and then baked to achieve a chewy texture. Bagels are often enjoyed with cream cheese, lox, or as the base for deli sandwiches filled with pastrami, corned beef, or smoked turkey.\n" +
          "\n" +
          "Ethnic Cuisine: New York City is home to vibrant ethnic neighborhoods offering a diverse array of cuisines, including Chinese in Chinatown, Italian in Little Italy, Jewish in the Lower East Side, and many others. You can find authentic dishes from around the world within the city's five boroughs.\n" +
          "\n" +
          "Fine Dining: New York City boasts a thriving fine dining scene, with world-class restaurants helmed by renowned chefs. From Michelin-starred establishments to trendy eateries, the city offers an unparalleled dining experience for food enthusiasts.\n" +
          "\n" +
          "Street Food: Food carts and street vendors are ubiquitous throughout New York City, offering everything from hot dogs and pretzels to falafel and kebabs. Grabbing a quick bite from a street vendor is a quintessential New York experience.",
        funFact: [""]
      }
    ]
  },
  { // Europe
    region: {
      name: "Europe",
      content: "",
      funFact: [""]
    },
    location: [
      {
        name: "England",
        content: "Traditional English Breakfast: A classic English breakfast typically includes eggs, bacon, sausages, baked beans, grilled tomatoes, mushrooms, and toast. It's a hearty and substantial meal often enjoyed on weekends or as a special treat.\n" +
          "\n" +
          "Roast Dinner: The Sunday roast is a beloved tradition in England, featuring roasted meat (such as beef, chicken, or lamb) served with Yorkshire pudding, roast potatoes, vegetables, and gravy.\n" +
          "\n" +
          "Fish and Chips: Fish and chips is a quintessential British dish consisting of battered and deep-fried fish (usually cod or haddock) served with thick-cut fries (chips) and malt vinegar. It's a popular takeaway meal enjoyed across the country.\n" +
          "\n" +
          "Pies and Puddings: England is known for its savory pies, such as steak and kidney pie, chicken and mushroom pie, and shepherd's pie. Traditional British puddings, like sticky toffee pudding, spotted dick, and treacle tart, are also cherished desserts.\n" +
          "\n" +
          "Afternoon Tea: Afternoon tea is a cherished English tradition that typically includes a selection of finger sandwiches, scones with clotted cream and jam, cakes, and pastries, served with a pot of tea.",
        funFact: [""]
      },
      {
        name: "France",
        content: "Haute Cuisine: French cuisine is renowned worldwide for its sophistication and emphasis on high-quality ingredients and meticulous preparation techniques. Haute cuisine, or \"high cuisine,\" refers to the elaborate and refined dishes typically associated with French fine dining.\n" +
          "\n" +
          "Classical French Dishes: French cuisine features a wide variety of classic dishes that have become staples of culinary culture around the world. These include Coq au Vin (chicken cooked in red wine), Beef Bourguignon (beef stewed in red wine), Boeuf Bourguignon (braised beef in red wine), Escargot (snails cooked in garlic butter), and Bouillabaisse (a Provencal fish stew).\n" +
          "\n" +
          "Bread and Pastries: France is famous for its bread and pastries, with the baguette being perhaps the most iconic French bread. Croissants, pain au chocolat, éclairs, macarons, and tarts are just a few examples of the delicious pastries found in French bakeries (patisseries).\n" +
          "\n" +
          "Cheese: France is known for its extensive variety of cheeses, with over 1,000 different types produced across the country. From creamy Brie and tangy Roquefort to nutty Comté and pungent Camembert, French cheeses are beloved by cheese enthusiasts worldwide.\n" +
          "\n" +
          "Wine: France is one of the world's leading wine-producing countries, famous for its Bordeaux, Burgundy, Champagne, and Rhône Valley wines. Wine is an integral part of French cuisine and culture, often enjoyed alongside meals to complement the flavors of the food.",
        funFact: [""]
      }
    ]
  }
];
