import { Badge } from "../ui/badge";
import { ItemHeader } from "../ui/item-header";
import { SectionHeader } from "../ui/section-header";

export function Projects() {
  return (
    <div>
      <SectionHeader>Projects</SectionHeader>
      <ol className="space-y-8">
        <li className="space-y-3">
          <ItemHeader>Concorde Visitor Management System</ItemHeader>
          <p>
            Project 1 description qwewqewqewqe asdasd as sdas dqw eqweqw asdsasd
            qweqwqwdqwd wdqwd asdsa
          </p>
          <div className="aspect-video max-w-md mx-auto lg:max-w-full bg-accent/50 rounded-lg">
            Carousel
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <Badge>TypeScript</Badge>
          </div>
        </li>
        <li className="space-y-3">
          <ItemHeader>Peek Beta</ItemHeader>
          <p>
            Project 1 description qwewqewqewqe asdasd as sdas dqw eqweqw asdsasd
            qweqwqwdqwd wdqwd asdsa
          </p>
          <div className="aspect-video max-w-md mx-auto lg:max-w-full bg-accent/50 rounded-lg">
            Carousel?
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <Badge>TypeScript</Badge>
          </div>
        </li>
      </ol>
    </div>
  );
}
