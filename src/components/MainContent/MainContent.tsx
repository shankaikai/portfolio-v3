import { About } from "./About";
import { Experience } from "./Experience";

export function MainContent() {
  return (
    <main className="flex flex-col gap-y-8 p-8">
      <About />
      <Experience />
    </main>
  );
}
