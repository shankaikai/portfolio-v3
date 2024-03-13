import { projects } from "@/lib/projects";
import { Badge } from "../ui/badge";
import { ItemHeader } from "../ui/item-header";
import { SectionHeader } from "../ui/section-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

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
      <Carousel>
        <CarouselContent className="aspect-video max-w-md lg:max-w-full">
          {project.images.map((image) => (
            <CarouselItem key={image} className="overflow-clip">
              <img
                src={image}
                alt={project.title}
                className="w-full h-full rounded-lg object-fill"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex items-center flex-wrap gap-2">
        {project.skills.map((skill) => (
          <Badge key={skill + project.title}>{skill}</Badge>
        ))}
      </div>
    </li>
  );
}
