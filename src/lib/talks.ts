import { v4 as uuid } from "uuid"

type Talk = {
  id: string
  title: string
  organizer: string
  description: string
  date: string
  blog: string | null
  video: string | null
}

export const talks: Talk[] = [
  {
    id: uuid(),
    title: "Commit to Success",
    organizer: "SOSC",
    description: "Hands-on session on Introduction to Git and GitHub.",
    date: "14 July, 2023",
    blog: "https://www.sosc.org.in/events/commit-to-success",
    video: null,
  },
  {
    id: uuid(),
    title: "API 101 - Introduction to APIs",
    organizer: "Postman and SOSC",
    description: "Hands-on session on Introduction to API.",
    date: "15 Oct, 2023",
    blog: "https://www.sosc.org.in/events/API_101-Workshop",
    video: "https://www.youtube.com/watch?v=UUGHJh-EgDs",
  },
  {
    id: uuid(),
    title: "Promising with JavaScript",
    organizer: "DevHost by SOSC",
    description:
      "A talk on asynchronous JavaScript telling about promises and event loop.",
    date: "24 Dec, 2023",
    blog: null,
    video:
      "https://www.youtube.com/live/84TgdSg4bVY?si=T1uLhzBhfqaN_i_t&t=7419",
  },
]
