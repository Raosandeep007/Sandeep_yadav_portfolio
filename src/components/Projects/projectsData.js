import {
  zoomcar1laptop,
  zoomcar1Mobile,
  healthmug2Laptop,
  healthmug2Mobile,
  linkedin1laptop,
  linkedin1mobile,
} from "./projectImages";

export const projectData = [
  {
    id: 1,
    image: linkedin1mobile,
    transitionImage: linkedin1laptop,
    title:
      "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps.the platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.",
    codeLink: "https://github.com/Raosandeep007/linkedin_clone.git",
    liveLink: "https://linkedin-clone-3e412.web.app/",
    techStack: ["Reactjs", "MUI", "firebase", "Redux", "styled-components"],
  },
  {
    id: 2,
    image: zoomcar1laptop,
    transitionImage: zoomcar1Mobile,
    title:
      "A web application to rent self-drive cars on a monthly and daily basis.",
    codeLink: "https://github.com/Raosandeep007/Zoom_Car_Clone_ejs.git",
    liveLink: "http://3.82.160.93:2345/home",
    techStack: ["Ejs", "Javascript", "Express", "Mongodb", "Redis"],
  },
  {
    id: 3,
    image: healthmug2Laptop,
    transitionImage: healthmug2Mobile,
    title:
      "A web application to purchase nutrition, any kind of medicines and doctor consultion.",
    codeLink: "https://github.com/Raosandeep007/healthmug.git",
    liveLink: "https://healthmug.vercel.app/",
    techStack: ["HTML", "CSS", "Javascript"],
  },
];
