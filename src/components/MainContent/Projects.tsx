import { projects } from "@/lib/projects";
import { Badge } from "../ui/badge";
import { ItemHeader } from "../ui/item-header";
import { SectionHeader } from "../ui/section-header";

export function Projects() {
  return (
    <div>
      <SectionHeader>Projects</SectionHeader>
      <ol className="space-y-8">
        {projects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </ol>
    </div>
  );
}

function ProjectItem({ project }: { project: (typeof projects)[0] }) {
  return (
    <li className="space-y-4">
      <ItemHeader>{project.title}</ItemHeader>
      <p>{project.description}</p>
      <div className="aspect-video max-w-md lg:max-w-full bg-accent/50 rounded-lg">
        Carousel
      </div>
      <div className="flex items-center flex-wrap gap-2">
        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
        <Badge>TypeScript</Badge>
      </div>
    </li>
  );
}
