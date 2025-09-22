export interface Project {
  name: string;
  version?: string;
  description: string;
  slug: string;
  year: string;
  tech_stack: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    name: "tiddl",
    version: "v2.6.0",
    description:
      "python package with cli: allows downloading tracks from streaming platform",
    slug: "tiddl",
    year: "2025",
    tech_stack: ["python", "github"],
    url: "https://github.com/oskvr37/tiddl",
  },
  {
    name: "mygym (unreleased)",
    version: "v0.4.7",
    description:
      "progressive web app: helps the user discover new exercises and track the results",
    slug: "mygym",
    year: "2025",
    tech_stack: ["react", "zustand", "react_router"],
  },
  {
    name: "drivehub",
    description: "international landing page for the taxi company from poland",
    slug: "drivehub",
    year: "2025",
    url: "https://drivehub.pl",
    tech_stack: ["astro_js", "tailwind_css"],
  },
  {
    name: "kawasaki",
    description:
      "the new modern look for motorcycle company: redesigned website with CMS support",
    slug: "kawasaki",
    year: "2024",
    url: "https://kawasaki-polska.vercel.app",
    tech_stack: ["astro_js", "sanity_cms"],
  },
  {
    name: "blachy",
    description: "fullstack web app: search, rate and comment polish drivers",
    slug: "blachy",
    year: "2024",
    url: "https://blachy.vercel.app",
    tech_stack: ["next_js", "prisma"],
  },
];
