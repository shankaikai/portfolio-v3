import { Hero } from "@/components/Hero/Hero";
import { MainContent } from "@/components/MainContent/MainContent";

function App() {
  return (
    <div className="bg-background relative antialiased">
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-accent/70">
          <Hero />
          <MainContent />
        </div>
      </div>
      <div className="fixed inset-y-0 m-auto h-1/2 w-1/2 bg-gradient-to-tr from-indigo-400 via-teal-900 to-[rgb(130,116,144)] blur-[118px] opacity-50" />
      <div className="absolute z-20 bottom-0 left-1/2 -translate-x-1/2 py-4 text-accent/50 text-sm text-center">
        Built by{" "}
        <a
          href="https://github.com/shankaikai"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
          title="GitHub"
          className="underline"
        >
          @shankaikai
        </a>{" "}
        using{" "}
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="ViteJS (opens in a new tab)"
          title="ViteJS"
          className="underline"
        >
          React + Vite.
        </a>
      </div>
    </div>
  );
}

export default App;
