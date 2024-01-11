// Home page data (about company content)
export const data = [
  {
    title: "Your title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
    image: "/images/code-review-bro.png"
  },
  {
    title: "Your title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
    image: "/images/code-review-bro.png"
  },
  {
    title: "Your title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
    image: "/images/code-review-bro.png"
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
    answer: "Yes, our team ensures that recipes undergo testing before being featured. However, individual preferences may vary, so feel free to adjust ingredients and cooking times to suit your taste."
  },
  {
    question: "Do you have a mobile app?",
    answer: "Currently, we do not have a dedicated mobile app, but our website is designed to be mobile-friendly. You can access FoodieBits from your mobile browser for a seamless experience."
  },
  {
    question: "How can I report a problem or provide feedback?",
    answer: "If you encounter any issues or have suggestions for improvement, please use the contact form below to get in touch with us. We appreciate your feedback!"
  },
  {
    question: "Can I request specific types of recipes or cuisines?",
    answer: "Yes, you can! We are always looking to expand our recipe collection, so feel free to let us know what you would like to see through the contact form below."
  }
];

export default faqData;

// Footer data (links)
// By: Bowen
export const footerData = [
  {
    label: "About",
    href: "/",
    links: [
      { label: "Story", href: "#" },
      { label: "Projects", href: "#" },
      { label: "FAQ", href: "/#FAQ" }
    ]
  },
  {
    label: "Recipes",
    href: "/recipes",
    links: [
      { label: "Browse", href: "/recipes" },
      { label: "Create", href: "#" },
      { label: "Share", href: "#" }
    ]
  },
  {
    label: "Restaurants",
    href: "/restaurants",
    links: [
      { label: "Find", href: "/restaurants" },
      { label: "Rate", href: "#" },
      { label: "Order", href: "#" },
      { label: "Talk", href: "#" }
    ]
  },
  {
    label: "Social",
    href: "/contact",
    links: [
      { label: "Email", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Github", href: "#" },
      { label: "Linkedin", href: "#" },
      { label: "RSS", href: "#" }
    ]
  }
];

// Restaurant data
// By: Bowen
// placeId taken from: https://developers.google.com/maps/documentation/places/web-service/place-id
export const restaurantData = [{
  title: "La Dame de Pic",
  location: "City Hall",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
  images: ["https://axwwgrkdco.cloudimg.io/v7/__gmpics__/ba314b55a2024a71bc41194fd95b3318", "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/a4bb8bb755b741ea861f4cd1660cd515", "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5f1b08485a1d4a22a41e86635b8ff951", "https://axwwgrkdco.cloudimg.io/v7/__gmpics__/6d2620afc12a4aaa9891c8635ec7bf47"],
  placeId: "ChIJtT96xf4Z2jERiG7wNClHeAY"
}, {
  title: "Path",
  location: "Marina Bay",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla tempora dolorem doloribus repudiandae, possimus quod quas. Ipsum culpa repellat dolorem vero odit iste delectus id, sed iure facere, animi suscipit.",
  images: ["https://pathrestaurant.com.sg/wp-content/uploads/2023/10/Path-Web_1.jpg", "https://pathrestaurant.com.sg/wp-content/uploads/2023/10/Path-Web_2-1200x800.jpg", "https://pathrestaurant.com.sg/wp-content/uploads/2023/10/Path-Web_3-1200x800.jpg"],
  placeId: "ChIJpXP0eYAZ2jEReM0l4h0xDH4"
}];