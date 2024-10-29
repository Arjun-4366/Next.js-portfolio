type Route = {
  id: number;
  name: string;
  path: string;
};

type Icon = {
  id: number;
  name: string;
  icon: string;
  link: string;
};
type FrontSkills = {
  id: number;
  path: string;
  name?: string;
};
type BackSkills = {
  id: number;
  path: string;
  name?: string;
};
type Tools = {
  id: number;
  path: string;
  name?: string;
};

type Projects = {
  id: number;
  name: string;
  description: string;
  img: string;
  stack: Array<string>;
  git?: string;
  live?: string;
};

export const ROUTES: ReadonlyArray<Route> = Object.freeze([
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Resume",
    path: "/resume",
  },
  // {
  //   id: 3,
  //   name: "Services",
  //   path: "/services",
  // },
  {
    id: 4,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 5,
    name: "Contact Me",
    path: "/contact",
  },
]);

export const SOCIAL_MEDIA: ReadonlyArray<Icon> = Object.freeze([
  {
    id: 1,
    name: "LinkedIn",
    icon: "/linkedIn.png",
    link: "https://www.linkedin.com/in/arjun-tv-8369522b5/",
  },
  {
    id: 2,
    name: "Github",
    icon: "/github.png",
    link: "https://github.com/Arjun-4366",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "/insta.png",
    link: "https://www.instagram.com/",
  },
]);

export const FRONT_END_SKILLS: ReadonlyArray<FrontSkills> = Object.freeze([
  {
    id: 1,
    path: "/html.png",
    name: "Html5",
  },
  {
    id: 2,
    path: "/css.png",
    name: "Css3",
  },
  {
    id: 3,
    path: "/js.png",
    name: "JavaScript",
  },
  {
    id: 4,
    path: "/react.png",
    name: "React.js",
  },
  {
    id: 5,
    path: "/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id: 6,
    path: "/tailwind.png",
    name: "Tailwind CSS",
  },
  {
    id: 7,
    path: "/next.png",
    name: "Next.js",
  },
  {
    id: 8,
    path: "/redux.png",
    name: "Redux",
  },
  {
    id: 9,
    path: "/ts.png",
    name: "TypeScript",
  },
]);

export const BACK_END_SKILLS: ReadonlyArray<BackSkills> = Object.freeze([
  {
    id: 1,
    path: "/node.png",
    name: "Node.js",
  },
  {
    id: 2,
    path: "/express.png",
    name: "Express.js",
  },
  {
    id: 3,
    path: "/mongodb.png",
    name: "MongoDB",
  },
  {
    id: 4,
    path: "/rest.png",
    name: "REST API",
  },
]);

export const TOOLS: ReadonlyArray<Tools> = Object.freeze([
  {
    id: 1,
    path: "/git.png",
    name: "Git",
  },
  {
    id: 2,
    path: "/github.png",
    name: "Github",
  },
  {
    id: 3,
    path: "/postman.png",
    name: "Postman",
  },
  {
    id: 4,
    path: "/ec2.png",
    name: "EC2",
  },
  {
    id: 5,
    path: "/figma.png",
    name: "Figma",
  },
  {
    id: 6,
    path: "/vercel.png",
    name: "Vercel",
  },
]);

export const PROJECTS: ReadonlyArray<Projects> = Object.freeze([
  {
    id: 1,
    name: "Kerala4u-ongoing",
    description:
      "Discover the beauty of Kerala with Kerala4U - Your personalized guide to God’s Own Country! Explore scenic destinations, local experiences, and curated travel plans all in one place",
    img: "/kerala4u.jpg",
    stack: [
      "/js.png", 
      "/react.png",
      "/mongodb.png",
      "/tailwind.png",
      "/ts.png",
      "/next.png",
      "/node.png",
    ],
    git: "https://github.com/Arjun-4366/Kerala-tourism",
    live: "https://kerala-frontend-livid.vercel.app/",
  },
  {
    id: 2,
    name: "GearPlusX",
    description:
      "Fuel your game with Gearplux – Your one-stop shop for top-tier sports gear and equipment! Whether you're hitting the field or the gym, we’ve got the gear to elevate your performance",
    img: "/gear.jpeg",
    stack: [
      "/bootstrap.png",
      "/ejs.png",
      "/mongodb.png",
      "/express.png",
      "/node.png",
    ],
    git: "https://github.com/Arjun-4366/Gear-plus-X",
    
  },
  {
    id: 3,
    name: "Chat App",
    description:
      " Real-time messaging made simple, secure, and seamless! From instant chats to group conversations, communicate effortlessly wherever you are",
    img: "/chat.jpg",
    stack: [
      "/js.png",
      "/react.png",
      "/css.png",
      "/mongodb.png",
      "/node.png",
      "/redux.png",
    ],
    git: "https://github.com/Arjun-4366/MERN-Chat-App",
    // live: "https://github.com/Arjun-4366/Kerala-tourism",
  },
  {
    id: 4,
    name: "BrightMinds",
    description:
      " Real-time messaging made simple, secure, and seamless! From instant chats to group conversations, communicate effortlessly wherever you are",
    img: "/edtech.png",
    stack: [
      "/js.png",
      "/react.png",
      "/tailwind.png",
      "/node.png",
      "/mongodb.png",
    ],
    git: "https://github.com/Arjun-4366/Kerala-tourism",
    live: "https://github.com/Arjun-4366/Kerala-tourism",
  },
  {
    id: 5,
    name: "Password Generate",
    description:
      "Effortlessly create secure passwords with our Password Generator app – keeping your accounts safe, one strong password at a time!",
    img: "/password.jpg",
    stack: ["/js.png", "/react.png", "/bootstrap.png"],
    git: "https://github.com/Arjun-4366/React-password-generator",
    // live: "https://github.com/Arjun-4366/Kerala-tourism",
  },
  
  {
    id: 6,
    name: "LinkedIn clone",
    description:
      "Check out this LinkedIn clone demo built with just HTML, CSS, and Bootstrap – a simple yet sleek representation of the professional networking platform!",
    img: "/link.png",
    stack: ["/html.png", "/css.png", "/bootstrap.png"],
    git: "https://github.com/Arjun-4366/Linkedin",
    live: "https://arjun-4366.github.io/Linkedin/",
  },
  {
    id: 7,
    name: "Myntra clone",
    description:
      "Explore this Myntra clone demo crafted with HTML and CSS – a clean and minimal take on the popular fashion e-commerce site!",
    img: "/Myntra.png",
    stack: ["/html.png", "/css.png"],
    git: "https://github.com/Arjun-4366/Myntra",
    live: "https://arjun-4366.github.io/Myntra/",
  },
  {
    id: 6,
    name: "Rakuten",
    description:
      "Discover this Rakuten clone demo built with HTML and CSS – a streamlined version of the popular shopping rewards platform!",
    img: "/rakuten.png",
    stack: ["/html.png", "/css.png"],
    git: "https://github.com/Arjun-4366/Rakuten",
    live: "https://arjun-4366.github.io/Rakuten/",
  },
]);
