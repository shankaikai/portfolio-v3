import { CgTranscript } from "react-icons/cg";
import { Button } from "../ui/button";
import { Socials } from "./Socials";
import self from "@/assets/self.jpg";

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:max-h-screen flex flex-col pt-16 gap-4 md:gap-6 rounded-lg">
      <img
        className="w-32 sm:w-48 aspect-square rounded-full object-cover"
        src={self}
        alt="self"
      />
      <h1 className="text-4xl font-bold tracking-normal sm:text-5xl text-accent hover:text-secondary transition-colors duration-200 ease-in-out">
        <a href="/">Tiong Shan Kai</a>
      </h1>
      <h2 className="text-lg text-accent font-medium tracking-tight sm:text-xl">
        Full Stack Software Engineer
      </h2>
      <p className="w-1/2 leading-normal">
        Creating efficient, user-friendly digital solutions.
      </p>
      <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">
        <Button className="w-fit flex gap-x-2 items-center my-6">
          View Resume <CgTranscript className="h-4 w-4" />
        </Button>
      </a>
      <Socials />
      <nav
        className="nav hidden md:block flex-1"
        aria-label="In-page jump links"
      ></nav>
    </header>
  );
}
