import { FaLinkedin } from "react-icons/fa6";

type Route = {
  id: number;
  name: string;
  path: string;
};

type Icon ={
  id: number;
  name: string;
  icon: string;
  link: string
}

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

export const SOCIAL_MEDIA : ReadonlyArray<Icon> = Object.freeze(
  [
{
  id:1,
  name:"LinkedIn",
  icon:'/linkedIn.png',
  link:'https://www.linkedin.com/in/arjun-tv-8369522b5/'
},
{
  id:2,
  name:"Github",
  icon:'/github.png',
    link:'https://github.com/Arjun-4366'
},
{
  id:3,
  name:"Instagram",
  icon:'/insta.png',
  link:'https://www.instagram.com/'
}
]
)