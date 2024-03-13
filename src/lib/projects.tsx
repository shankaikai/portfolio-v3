import vms1 from "@/assets/projects/vms-1.jpg";
import vms2 from "@/assets/projects/vms-2.jpg";
import vms3 from "@/assets/projects/vms-3.jpg";
import peek1 from "@/assets/projects/peek-1.jpg";
import peek2 from "@/assets/projects/peek-2.jpg";
import peek3 from "@/assets/projects/peek-3.jpg";
import peek4 from "@/assets/projects/peek-4.jpg";
import peek5 from "@/assets/projects/peek-5.jpg";
import peek6 from "@/assets/projects/peek-6.jpg";
import peek7 from "@/assets/projects/peek-7.jpg";

export const projects = [
  {
    title: "Concorde Visitor Management System",
    description:
      "A web application built in collaboration with Concorde Security for a private client. The scope included a customised visitor management system, with analytics, role-based UI and QR scanning.",
    images: [vms1, vms2, vms3],
    skills: [
      "TypeScript",
      "Python",
      "React",
      "Vite",
      "Django",
      "TailwindCSS",
      "PostgreSQL",
    ],
  },
  {
    title: "Peek Beta v1",
    description:
      "An MVP web application built for Bluejay Finance. Peek was built for speed by leveraging keyboard shortcuts to navigate its features. As park of v1, users can add their assets/liabilities and track their net worth with delta analysis.",
    images: [peek1, peek2, peek3, peek4, peek5, peek6, peek7],
    skills: [
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Serverless",
      "PostgreSQL",
      "React Query",
    ],
  },
];
