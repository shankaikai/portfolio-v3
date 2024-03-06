import { experiences } from "@/lib/experiences";
import { Badge } from "../ui/badge";
import { SectionHeader } from "../ui/section-header";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <SectionHeader>Experience</SectionHeader>
      <ol className="relative border-s space-y-8 border-accent/20 ml-4">
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
  return (
    <li className="ms-8">
      <div className="absolute aspect-square w-7 bg-accent rounded-full -start-3.5 text-black flex justify-center items-center overflow-clip">
        <img src={experience.logo} />
      </div>
      <div className="space-y-3">
        <time className="text-sm font-normal ">
          {experience.from} - {experience.to}
        </time>
        <h2 className="text-lg font-semibold text-accent">
          {experience.title} @ {experience.company}
        </h2>
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
