import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Socials() {
  return (
    <div className="space-y-2">
      <span className="text-xs uppercase font-bold">Let's connect!</span>
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
    </div>
  );
}
