import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  minapoli,
  rentracks,
  inews,
  gm,
  narama,
  luxspace,
  youtube,
  gericht,
  eatery,
  video,
  premiere,
  illustrator,
  afterEffect,
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
    title: "User Interface Designer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Video Editor",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Adobe Premiere Pro",
    icon: premiere,
  },
  {
    name: "Adobe After Effects",
    icon: afterEffect,
  },
  {
    name: "Adobe Illustrator",
    icon: illustrator,
  },
];

const experiences = [
  {
    title: "Video Editor Internship",
    company_name: "Minapoli",
    icon: minapoli,
    iconBg: "#FFFFFF",
    date: "Dec 2021 - Jun 2022",
    points: [
      "Edited over 50+ videos both daily and project base",
      "Edited the video according to the brief given.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created a new clip transcription and template method that saved 10+ hours of transcription per week.",
    ],
  },
  {
    title: "Video Editor Internship",
    company_name: "PT Rentracks Cocreation Indonesia",
    icon: rentracks,
    iconBg: "#FFFFFF",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Edited many short videos with a 1-2 day turnaround.",
      "Sorted and edited 5+ hours of raw footage into 10 minutes of finished video for multiple Youtube accounts.",
      "Captured and clipped clips daily.",
      "Created Motion graphics for several contents.",
    ],
  },
  {
    title: "Social Media Internship ",
    company_name: "PT. MNC Televisi Networks ",
    icon: inews,
    iconBg: "#FFFFFF",
    date: "Apr 2021 - Jun 2021",
    points: ["Edited 100+ television program segment videos for uploading to social media.", "Sorted and edited footage for uploading purposes to social media.", "Created Motion graphics for several contents.      "],
  },
  {
    title: "Web Designer & Web Developer Intern",
    company_name: "Politeknik Kesehatan Genesis Medicare",
    icon: gm,
    iconBg: "#FFFFFF",
    date: "Jan 2021 - Apr 2021",
    points: [
      "Created and Designed a layout and User Interface for the Website.",
      "Code and slice the design into a Website, Maintaining the website and the content of the website.",
      "Ensured that all code is well documented, reusable, efficient, and followed best practices.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "PT Narama Mandiri",
    icon: narama,
    iconBg: "#FFFFFF",
    date: "Jun 2019 - Aug 2019",
    points: [
      "Generated and implemented a Company Profile Website from the brief.",
      "Developed and implemented front-end code using HTML, CSS, JavaScript, and other frameworks for requirements.",
      "Maintaining brand consistency throughout the design.",
    ],
  },
];

const WebsiteProjects = [
  {
    name: "Luxspace",
    description: "A website-based e-commerce where users can choose home furnishing products, put them in the basket, until transactions are according to needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "postman",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: luxspace,
    source_code_link: "https://github.com/rassyaabiwafaaa/Luxspace",
    website_link: "https://luxspace-shop.netlify.app/",
  },
  {
    name: "Youtube Clone",
    description: "An application from one of the biggest platforms, namely Youtube, where users can search for YouTube channels, search for videos, and watch the videos they want.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
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
    image: youtube,
    source_code_link: "https://github.com/rassyaabiwafaaa/Youtube-Clone",
    website_link: "https://rassyaabiwafa-youtube-clone.netlify.app/",
  },
  {
    name: "Gericht Restaurant",
    description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: gericht,
    source_code_link: "https://github.com/rassyaabiwafaaa/gericht-restaurant",
    website_link: "https://gerichtrestaurant-rassyaabiwafa.netlify.app/",
  },
  {
    name: "Eatery",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eatery,
    website_link: "https://www.behance.net/gallery/132936271/Food-Delivery-Application-User-Interface-Design",
  },
  {
    name: "Video Portfolio",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: video,
    website_link: "https://drive.google.com/drive/folders/1KFcZf-JLstz7r_vPFFdqtWqb45zhPdLV",
  },
];

const designProjects = [
  {
    name: "Eatery",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eatery,
    website_link: "https://www.behance.net/gallery/132936271/Food-Delivery-Application-User-Interface-Design",
  },
];

const videoProjects = [
  {
    name: "Video Portfolio",
    description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: video,
    website_link: "https://drive.google.com/drive/folders/1KFcZf-JLstz7r_vPFFdqtWqb45zhPdLV",
  },
];

const socialMedia = [
  {
    name: "linkedIn",
    link: "https://www.linkedin.com/in/rassyaabiwafa/",
  },
  {
    name: "github",
    link: "https://github.com/rassyaabiwafaaa",
  },
  {
    name: "behance",
    link: "https://www.behance.net/rassyaabiwafa",
  },
  {
    name: "instagram",
    link: "https://www.behance.net/rassyaabiwafa",
  },
  {
    name: "whatsapp",
    link: "https://api.whatsapp.com/send/?phone=6285782643433&text&type=phone_number&app_absent=0",
  },
];

export { services, technologies, experiences, WebsiteProjects, designProjects, videoProjects, socialMedia };
