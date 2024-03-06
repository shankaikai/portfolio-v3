import { Hero } from "@/components/Hero/Hero";
import { MainContent } from "@/components/MainContent";

function App() {
  return (
    <div className="bg-background text-accent relative antialiased">
      <div className="absolute aspect-square w-3/4 bg-accent/5 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl" />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 text-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Hero />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
