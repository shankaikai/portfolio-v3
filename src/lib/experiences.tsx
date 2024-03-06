import indeed from "@/assets/indeed.png";
import dhl from "@/assets/dhl.jpeg";
import bluejay from "@/assets/bluejay.png";

// Most recent first
export const experiences = [
  {
    logo: bluejay,
    from: "June 2023",
    to: "Present",
    title: "Software Engineer",
    company: "Bluejay Finance",
    description:
      "Full stack developer for a fintech startup. Built a new onboarding flow for a stable coin investment platform. Worked on bug fixes and improved SEO by using SSG and semantic design. Built MVPs of new product ideas.",
    skills: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Serverless",
      "AWS",
      "Lambda",
      "DynamoDB",
      "S3",
      "PostgreSQL",
      "Prisma",
      "Ethers.js",
      "React Query",
    ],
    link: "https://bluejay.finance/",
  },
  {
    logo: indeed,
    from: "Sept 2022",
    to: "Mar 2023",
    title: "Software Developer II",
    company: "Indeed",
    description:
      "Full stack developer for the Japan employer team. Built a new interview booking feature. Worked on bug fixes and improved accessibility (a11y) following WCAG standards. Handled on-call duties and resolved production issues.",
    skills: [
      "TypeScript",
      "Java",
      "React",
      "SpringBoot",
      "GraphQL",
      "Jest",
      "JUnit",
      "TestCafe",
      "DataDog",
      "JIRA",
    ],
    link: "https://www.indeed.com/",
  },
  {
    logo: indeed,
    from: "May 2021",
    to: "Aug 2021",
    title: "Software Engineering Intern",
    company: "Indeed",
    description:
      "Worked in the International Payments team. Internationalised the global payment platform, enabling dynamic translations to multiple languages.",
    skills: [
      "TypeScript",
      "React",
      "Java",
      "SpringBoot",
      "Jest",
      "JUnit",
      "Jenkins",
      "DataDog",
      "JIRA",
    ],
    link: "https://www.indeed.com/",
  },
  {
    logo: dhl,
    from: "May 2020",
    to: "Aug 2020",
    title: "Information Technology Intern",
    company: "DHL Express",
    description:
      "Worked in the product delivery team. Built applications and scripts to improve company processes. Gathered requirements from internal clients and carried out user acceptance testing (UAT).",
    skills: ["Python", "JavaScript", "HTML", "CSS", "VBA", "R Shiny"],
    link: "https://www.dhl.com/",
  },
];
