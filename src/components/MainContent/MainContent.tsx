import { About } from "./About";
import { Experience } from "./Experience";

export function MainContent() {
  return (
    <main className="flex flex-col gap-y-16 lg:gap-y-24 p-8">
      <About />
      <Experience />
    </main>
  );
}
