import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";

export function MainContent() {
  return (
    <main className="flex flex-col gap-y-16 lg:gap-y-24 pt-16 pb-24">
      <About />
      <Experience />
      <Projects />
      {/* <Testimonials /> */}
    </main>
  );
}
