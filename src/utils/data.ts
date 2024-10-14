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
  name?:string
};
type BackSkills = {
  id: number;
  path: string;
  name?:string
};
type Tools = {
  id: number;
  path: string;
  name?:string
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
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
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
    name:'Html5'
  },
  {
    id: 2,
    path: "/css.png",
    name:'Css3'
  },
  {
    id: 3,
    path: "/js.png",
    name:'JavaScript'
  },
  {
    id: 4,
    path: "/react.png",
    name:'React.js'

  },
  {
    id: 5,
    path: "/bootstrap.png",
    name:'Bootstrap'
  },
  {
    id: 6,
    path: "/tailwind.png",
    name:'Tailwind CSS'
  },
  {
    id: 7,
    path: "/next.png",
    name:'Next.js'
  },
  {
    id: 8,
    path: "/redux.png",
    name:'Redux'
  },
  {
    id: 9,
    path: "/ts.png",
    name:'TypeScript'
  },
]);

export const BACK_END_SKILLS: ReadonlyArray<BackSkills> = Object.freeze([
  {
    id: 1,
    path: "/node.png",
    name:'Node.js'
  },
  {
    id: 2,
    path: "/express.png",
    name:'Express.js'
  },
  {
    id: 3,
    path: "/mongodb.png",
    name:'MongoDB'
  },
  {
    id: 4,
    path: "/rest.png",
    name:'REST API'
  },
]);

export const TOOLS: ReadonlyArray<Tools> = Object.freeze([
  {
    id: 1,
    path: "/git.png",
    name:'Git'
  },
  {
    id: 2,
    path: "/github.png",
    name:'Github'
  },
  {
    id: 3,
    path: "/postman.png",
    name:'Postman'
  },
  {
    id: 4,
    path: "/ec2.png",
    name:'EC2'
  },
  {
    id: 5,
    path: "/figma.png",
    name:"Figma"
  },
  {
    id: 6,
    path: "/vercel.png",
    name:"Vercel"
  },

]);
