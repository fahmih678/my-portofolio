import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Ramadhan Fahmi",
  lastName: "Habibi",
  displayName: "Fahmi Habibi",
  username: "fahmih678",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  timeZone: "Asia/Jakarta",
  flipSentences: [
    "Fullstack Web Developer",
    "AI Agent Engineer",
    "Mobile App Developer",
  ],
  address: "Surakarta, Jawa Tengah, Indonesia",
  phoneNumber: "KzYyODk2OTkwNzc2NTE=", // E.164 format, base64 encoded (https://t.io.vn/
  // secondPhoneNumber: "KzYyODk2OTkwNzc2NTE=",
  // base64-string-converter)
  email: "ZmFobWloNjc4QGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://fahmih678.my.id",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Computer Teacher",
      company: "SD MPU PK Surakarta",
      website: "https://sdmpu-colomadu.sch.id/",
    },
  ],
  about: `
- **Fullstack Developer** with **4+ years of experience**, started coding at age 19; known for clean architecture and attention to detail.
`,
  avatar: "/images/me.jpg",
  ogImage: "/images/og-image-light.png",
  namePronunciationUrl: "/audio/fahmihabibi.mp3",
  keywords: [
    "fahmi habibi",
    "fahmihabibi",
    "ramadhan fahmi habibi",
    "juarasilat",
    "hand-drawn video templates",
    "remotion developer",
    "fullstack developer",
    "mern stack developer",
    "react developer",
    "nextjs developer",
    "react native developer",
    "three.js developer",
    "3d web developer",
    "electron developer",
    "desktop app developer",
    "mobile app developer",
    "nodejs developer",
    "nestjs developer",
  ],
  dateCreated: "2026-10-24", // YYYY-MM-DD
};
