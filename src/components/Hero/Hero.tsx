import { BiDownload } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <header className="md:sticky md:top-0 md:max-h-screen flex flex-col p-8 gap-4 md:gap-6 rounded-lg">
      <div className="w-32 sm:w-48 aspect-square bg-slate-500 rounded-full" />
      <h1 className="text-4xl font-bold tracking-normal sm:text-5xl text-accent hover:text-secondary transition-colors duration-200 ease-in-out">
        <a href="/">Tiong Shan Kai</a>
      </h1>
      <h2 className="text-lg text-accent font-medium tracking-tight sm:text-xl">
        Full Stack Software Engineer
      </h2>
      <p className="max-w-xs leading-normal">
        I enjoy creating efficient, user-friendly digital solutions.
      </p>
      <Button
        className="w-fit flex gap-x-2 items-center my-8"
        onClick={() => console.log("Heelo")}
      >
        My resume <BiDownload className="h-4 w-4" />
      </Button>
      <ul
        className="flex items-center gap-x-4 text-accent/50"
        aria-label="Social media"
      >
        <li className="text-xs shrink-0 hover:text-secondary transition-colors duration-200 ease-in-out">
          <a
            href="https://www.linkedin.com/in/shan-kai-tiong/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="text-xs shrink-0 hover:text-secondary transition-colors duration-200 ease-in-out">
          <a
            className=""
            href="https://github.com/shankaikai"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
            title="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
      </ul>
      <nav
        className="nav hidden md:block flex-1"
        aria-label="In-page jump links"
      ></nav>
    </header>
  );
}
