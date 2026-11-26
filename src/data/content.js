const a = (name) => `/assets/${name}`;

export const navLinks = ["Home", "Features", "Community", "Blog", "Pricing"].map((label) => ({
  label,
  href: `#${label.toLowerCase()}`,
}));

export const hero = {
  title: "Lessons and insights",
  highlight: "from 8 years",
  text: "Where to grow your business as a photographer: site or social media?",
  cta: "Register",
  image: a("hero-illustration.svg"),
};

export const clients = {
  title: "Our Clients",
  text: "We have been working with some Fortune 500+ clients",
  logos: [1, 2, 3, 4, 5, 6, 7].map((n) => a(`client-${n}.svg`)),
};

export const community = {
  title: "Manage your entire community in a single system",
  text: "Who is Nextcent suitable for?",
  cards: [
    { id: 1, icon: a("icon-membership.svg"), title: "Membership Organisations" },
    { id: 2, icon: a("icon-associations.svg"), title: "National Associations" },
    { id: 3, icon: a("icon-clubs.svg"), title: "Clubs And Groups" },
  ].map((c) => ({
    ...c,
    text: "Our membership management software provides full automation of membership renewals and payments",
  })),
};

export const spotlights = [
  {
    id: "unlock",
    image: a("spotlight-login.svg"),
    title: "The unseen of spending three years at Pixelgrade",
    text: "When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.",
    cta: "Learn More",
  },
  {
    id: "calendar",
    image: a("spotlight-phone.svg"),
    title: "How to design your site footer like we did",
    text: "One event calendar shared across National, Regional and Club events to simplify your event experience. Allowing you to create waiting lists, share data capture, issue credential for course completion, apply smart purchasing rules and much more.",
    cta: "Learn More",
  },
];

export const achievements = {
  title: "Helping a local",
  highlight: "business reinvent itself",
  text: "We reached here with our hard work and dedication",
  stats: [
    { id: 1, icon: a("stat-members.svg"), value: "2,245,341", label: "Members" },
    { id: 2, icon: a("stat-clubs.svg"), value: "46,328", label: "Clubs" },
    { id: 3, icon: a("stat-bookings.svg"), value: "828,867", label: "Event Bookings" },
    { id: 4, icon: a("stat-payments.svg"), value: "1,926,436", label: "Payments" },
  ],
};

export const testimonial = {
  image: a("testimonial.png"),
  quote:
    "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.",
  name: "Tim Smith",
  role: "British Dragon Boat Racing Association",
  logos: [1, 2, 3, 4, 5, 6].map((n) => a(`client-${n}.svg`)),
  cta: "Meet all customers",
};

export const blog = {
  title: "Caring is the new marketing",
  text: "The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.",
  posts: [
    { id: 1, image: a("blog-1.png"), title: "Creating Streamlined Safeguarding Processes with OneRen" },
    { id: 2, image: a("blog-2.png"), title: "What are your safeguarding responsibilities and how can you manage them?" },
    { id: 3, image: a("blog-3.png"), title: "Revamping the Membership Model with Triathlon Australia" },
  ],
};

export const cta = { title: "Pellentesque suscipit fringilla libero eu.", button: "Get a Demo" };

export const footer = {
  logo: a("logo-light.svg"),
  copyright: ["Copyright © 2020 Landify UI Kit.", "All rights reserved"],
  social: [1, 2, 3, 4].map((n) => ({ id: n, icon: a(`social-${n}.svg`), label: ["Instagram", "Dribbble", "Twitter", "YouTube"][n - 1] })),
  columns: [
    { title: "Company", links: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"] },
    { title: "Support", links: ["Help center", "Terms of service", "Legal", "Privacy policy", "Status"] },
  ],
  newsletter: { title: "Stay up to date", placeholder: "Your email address" },
};
