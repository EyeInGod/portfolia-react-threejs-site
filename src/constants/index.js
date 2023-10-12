import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  nextjs,
  vuejs,
  sveltejs,
  angularjs,
  python,
  ruby,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  onlineshop,
  tripguide,
  udemy,
  threejs,
  laravel,
  ecommerce,
  music,
  nft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Hybrid App Developer",
    icon: mobile,
  },
  {
    title: "Fulltime Service Support",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  // {
  //   name: "Vue JS",
  //   icon: vuejs,
  // },
  {
    name: "Angular JS",
    icon: angularjs,
  },
  // {
  //   name: "Svelte JS",
  //   icon: sveltejs,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Senior Web Developer",
    company_name: "Self-employed/Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2022 - Present",
    points: [
      "Developed 10+ applications following Agile product development methodologies.",
      "Designed, built and automated data flows to save 40+ hours of tedious work per week.",
      "Diagnosed and fixed report functionally issues by troubleshooting.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Digital Resource Australia Pty Ltd",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2020 - June 2022",
    points: [
      "Customize Duda platform that could scale up to 300k daily visitors.",
      "Wrote 100+ unit tests to ensure 100% code with SDLC was without bugs.",
    ],
  },
  {
    title: "Self-employed/Freelance",
    company_name: "Frontend && Backend Developer",
    icon: shopify,
    iconBg: "#383E56",
    date: "July 2017 - June 2020",
    points: [
      "Created an application interface that integrated 50+ third party APIs and improved sales results by 70% with 3 weeks  on the Job.",
      "Reduced development time by 30% through code  reuse in jQuery libraries for various projects with over 2.5k combined page visits.",
      "Improved the home page views from 5k to 80k weekly through SEO optimization, A/B testing.",
      "By developing a school administration system, student grades have increased by 20% compared to before.",
    ],
  },
  {
    title: "Junior Full-Stack Engineer",
    company_name: "EWANDS",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "October 2016 - 2017",
    points: [
      "Learned orginazation's overall strategies, business operates and what drives in success.",
      "communicated with line of business and managed overoll status and health of 10+ applications.",
      "collaborated external programmers to coordinate delivery of 3 new software applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Dollar Car Rental allows you to reserve a rental car online , saving you time and money. They offer great car rental deals and have convenient pickup and drop-off locations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "restapi",
        color: "black-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Shop",
    description:
      "When shopping for online printing services, you can find various options that offer different types of printed materials, such as business cards, flyers, brochures, posters, banners, and more. These services often provide customization options, allowing you to personalize your printed materials with your own designs, logos, and text.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: onlineshop,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce Site",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Music Site",
    description:
      "Spotify is a digital music service that provides access to millions of songs . It offers a vast library of music across various genres and allows users to create playlists, discover new music, and follow their favorite artists.",
    tags: [
      {
        name: "Svelte",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "yellow-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/",
  },
  {
    name: "Udemy",
    description:
      "Udemy is an online learning and teaching marketplace that offers a wide range of courses on various topics . It has over 213,000 courses and 62 million students . Udemy provides a platform for instructors to create and sell their courses, allowing learners to access high-quality educational content from experts around the world.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "orange-text-gradient",
      },
      {
        name: "BootStrap",
        color: "yellow-text-gradient",
      },
    ],
    image: udemy,
    source_code_link: "https://github.com/",
  },
  {
    name: "NFT Markting Site",
    description:
      "Spotify is a digital music service that provides access to millions of songs . It offers a vast library of music across various genres and allows users to create playlists, discover new music, and follow their favorite artists.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
      {
        name: "CSS3",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "yellow-text-gradient",
      },
    ],
    image: nft,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
