import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "juarasilat",
    companyName: "Juarasilat",
    companyLogo: "https://media.licdn.com/dms/image/v2/D560BAQH9UqCrUbJZNA/company-logo_200_200/company-logo_200_200/0/1664365687516?e=1794441600&v=beta&t=B6kgsdpyZAiCiw99r9XNtAz-y0Ork6PGSXAVXdYLs2k",
    positions: [
      {
        id: "juarasilat-web-dev",
        title: "Fullstack Web Developer",
        employmentPeriod: {
          start: "11.2021",
          end: "02.2025"
        },
        employmentType: "Self-Employed",
        icon: "code",
        description: `- Built and launched [scrawlkit.com](https://scrawlkit.com): hand-drawn video templates for TikTok, Reels and Shorts. Pick a template, type a few words, download an MP4.
- Designed the ink-on-paper house style: eight templates in Remotion whose strokes are generated as rough SVG paths and redrawn frame by frame, so every render wobbles like a real pen.
- Renders run on AWS Lambda through Remotion Lambda, with an in-app queue that keeps the account inside its concurrency limit and refunds a credit when a render fails.
- Accounts and monthly render credits with Better Auth and Drizzle on Neon Postgres; confirmation and reset emails through Resend.
- Subscriptions with Stripe Checkout, webhooks and the customer portal, verified by an end-to-end test that fast-forwards a Stripe test clock through a renewal.
- Brand and in-template art generated with Higgsfield; error reports in Sentry; cookieless analytics.`,
        skills: [
          "Next.js 16",
          "React 19",
          "TypeScript",
          "Remotion",
          "AWS Lambda",
          "Tailwind CSS v4",
          "Better Auth",
          "Drizzle ORM",
          "Neon Postgres",
          "Stripe",
          "Resend",
          "Sentry",
          "Product Design",
        ],
      },
    ],
    isCurrentEmployer: true,
  },

  //   {
  //     id: "freelance",
  //     companyName: "Freelance",
  //     positions: [
  //       {
  //         id: "f0becfba-057d-40db-b252-739e1654faa1",
  //         title: "Full-stack Developer",
  //         employmentPeriod: {
  //           start: "2025",
  //         },
  //         employmentType: "Part-time",
  //         description: `**Key Projects:**

  // - **[Petakehidupan](https://petakehidupan.com)** - Built complete e-signature SaaS platform with PDF signing workflows (pdf-lib), Stripe subscriptions, OAuth, Gemini AI insights, and audit trails. Deployed on AWS EC2.`,
  //         icon: "code",
  //         skills: [
  //           "React",
  //           "React Native",
  //           "Redux Toolkit",
  //           "TypeScript",
  //           "Node.js",
  //           "NestJS",
  //           "FastAPI",
  //           "MongoDB",
  //           "PostgreSQL",
  //           "AWS EC2",
  //           "Stripe",
  //           "OAuth",
  //           "Expo",
  //           "pdf-lib",
  //           "API Integration",
  //         ],
  //         isExpanded: true,
  //       },
  //     ],
  //   },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "University Sebelas Maret of Surakarta, Indonesia",
        employmentPeriod: {
          start: "08.2019",
          end: "07.2026",
        },
        icon: "education",
        description: `- Bachelor of Education, Informatics and Computer Engineering Education.`,
        skills: [
          "Software Development",
          "Object-Oriented Programming (OOP)",
          "Data Structures & Algorithms",
          "Web Development",
          "Database Management System (DBMS)",
          "Programming Fundamentals",
          "Operating Systems",
          "Software Engineering",
          "Computer Networks",
          "Cloud Computing",
          "Artificial Intelligence",
        ],
      },
    ],
  },
];
