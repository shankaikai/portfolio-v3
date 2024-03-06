import { experiences } from "@/lib/experiences";
import { Badge } from "../ui/badge";
import { SectionHeader } from "../ui/section-header";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { ItemHeader } from "../ui/item-header";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <SectionHeader>Experience</SectionHeader>
      <ol className="border-s space-y-8 border-accent/20 ml-4">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </ol>
    </section>
  );
}

function ExperienceItem({
  experience,
}: {
  experience: (typeof experiences)[0];
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      className="ps-8 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={cn(
          "-z-10 absolute -inset-x-4 -inset-y-2.5 rounded-md bg-accent/5 blur-lg opacity-0 transition-opacity duration-200 ease-in-out",
          isHovered && "opacity-100"
        )}
      />
      <div className="absolute aspect-square w-7 bg-accent rounded-full -start-3.5 text-black flex justify-center items-center overflow-clip">
        <img src={experience.logo} />
      </div>
      <div className="space-y-3">
        <time className="text-sm font-normal ">
          {experience.from} - {experience.to}
        </time>
        <ItemHeader>
          {experience.title} @{" "}
          <a
            href={experience.link}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline hover:text-secondary transition-colors duration-200 ease-in-out"
            aria-label={`${experience.company} (opens in a new tab)`}
            title={experience.company}
          >
            {experience.company}
          </a>
        </ItemHeader>
        <p>{experience.description}</p>
        <div className="flex items-center flex-wrap gap-2">
          {experience.skills.map((skill, index) => (
            <Badge key={index}>{skill}</Badge>
          ))}
        </div>
      </div>
    </li>
  );
}
