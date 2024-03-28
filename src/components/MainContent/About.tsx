import { SectionHeader } from "../ui/section-header";

export function About() {
  return (
    <section id="about" className="relative">
      <SectionHeader>About Me</SectionHeader>
      <div className="space-y-4">
        <p>
          Hi there, I am a 2022 graduate from the SUTD-SMU Dual Degree Program
          holding bachelor's degrees in Computer Science and Business
          Management. I adopt a user-centric perspective and enjoy being
          involved in the end-to-end processes in application development.
        </p>
        <p>
          Currently, I'm working as a Full Stack Software Engineer at{" "}
          <a
            href="https://tokkalabs.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Tokka Labs (opens in a new tab)"
            title="Tokka Labs"
            className="text-secondary hover:underline"
          >
            Tokka Labs
          </a>
          , where I am developing and maintaining their proprietary digital
          assets trading platform. Currently, I'm working in their middle office
          team, which governs the transfer of funds.
        </p>
        <p>
          Outside work, I enjoy cooking, bouldering, working out, or playing
          racket sports. I also enjoy reading about general finance and tech
          news.
        </p>
      </div>
    </section>
  );
}
