import { v4 as uuid } from "uuid"

export const experiences = [
  {
    id: uuid(),
    title: "Technical Intern",
    organization: {
      name: "Niveus Solutions",
      url: "https://niveussolutions.com/",
      logo: "/experiences/niveus.jpeg",
    },
    startDate: "Nov 2023",
    endDate: null,
  },
  {
    id: uuid(),
    title: "President",
    organization: {
      name: "Sahyadri Open Source Community (SOSC)",
      url: "https://sosc.org.in/",
      logo: "/experiences/sosc.jpeg",
    },
    startDate: "Jun 2022",
    endDate: null,
  },
  {
    id: uuid(),
    title: "Postman Student Leader",
    organization: {
      name: "Postman",
      url: "https://postman.com/",
      logo: "/experiences/postman.png",
    },
    startDate: "Oct 2022",
    endDate: null,
  },
  {
    id: uuid(),
    title: "Full Stack Developer Intern",
    organization: {
      name: "The Startupreneur",
      url: "https://thestartupreneur.co/",
      logo: "/experiences/startupreneur.jpeg",
    },
    startDate: "Sep 2022",
    endDate: "Jan 2023",
  },
  {
    id: uuid(),
    title: "Technical Trainer",
    organization: {
      name: "Thaniya Technologies",
      url: "https://thaniyatech.com/",
      logo: "/experiences/thaniyatech.jpeg",
    },
    startDate: "Apr 2023",
    endDate: "Jun 2023",
  },
]
